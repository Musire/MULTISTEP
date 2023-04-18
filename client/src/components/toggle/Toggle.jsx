import { StepperContext } from "../../context/StepperContext"
import { useContext } from "react"

const Toggle = () => {
    const { stepper, handleBilling } = useContext(StepperContext)
    const newBilling = stepper.billing === 'monthly'? 'yearly' : 'monthly'

    return ( 
        <div className="w-full gap-4 p-4 bg-alabaster centered">
            <h3 className="font-semibold">Monthly</h3>
            <div className={`toggle-holder ${stepper.billing === 'monthly'? 'justify-start': 'justify-end'}`} onClick={() => handleBilling(newBilling)}>
                <div className='toggle-dot'></div>
            </div>
            <h3 className="font-semibold text-coolgray">Yearly</h3>
        </div>
     );
}
 
export default Toggle;