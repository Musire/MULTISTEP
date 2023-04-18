import { useContext } from "react";
import { StepperContext } from "../../context/StepperContext";

const SlideContainer = ({ children }) => {
    const { stepper } = useContext(StepperContext)
    const isFive = stepper.step === 5

    return ( 
        <div className={`slide-container ${isFive ? 'centered-col md:h-[20rem]' : ''}`}>
            {children}
        </div>
     );
}
 
export default SlideContainer;