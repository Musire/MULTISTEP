import { useContext } from 'react'
import { StepperContext } from '../../context/StepperContext'
import { dots } from '../../constants/DotText'

const DotIndicator = ({ step }) => {
    const { stepper } = useContext(StepperContext)
    const current = stepper.step === step;
    const isFive = stepper.step === 5

    return (
        <div className="flex flex-row items-center space-x-4">
            <div className={`dot-indicator ${current || isFive && step === 4 ? 'dot-active' : '' } `} >{step}</div>
            <div className="flex-col xs:hidden md:flex">
                <h3 className='text-sm text-lightgray '>{dots[step].step}</h3>
                <h2 className='w-24 text-sm text-white '>{dots[step].title}</h2>
            </div>
        </div>
     );
}
 
export default DotIndicator;