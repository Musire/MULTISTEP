import { useContext } from 'react'
import { StepperContext } from '../../context/StepperContext'

const StepperControls = () => {
    const { stepper, handleIncrease, handleDecrease } = useContext(StepperContext)
    const isStepOne = stepper.step === 1
    const isStepFive = stepper.step === 5
    const isAboveThree = stepper.step > 3
    const isBelowFour = stepper.step < 4
    
    return ( 
        <div className={`slide-controls ${isStepFive ? 'hidden' : ''}`}>
            <button disabled={isStepOne || isStepFive} onClick={handleDecrease} className={`back-button ${isStepOne ? 'disabled:invisible' : 'disabled:hidden'}`} >Go Back</button>
            <button disabled={!isStepOne} className="next-button" form='demographics'>Next Step</button>
            <button disabled={isAboveThree || isStepOne} onClick={handleIncrease} className="next-button">Next Step</button>
            <button disabled={isBelowFour || isStepFive} onClick={handleIncrease} className="confirm-button">Confirm</button>
      </div>
     );
}
 
export default StepperControls;