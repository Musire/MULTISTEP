import { useContext } from "react";
import { StepperContext } from "../../context/StepperContext"
import { slides } from "../../constants/SlideText"

const Slide = ({ step, children }) => {
    const { stepper } = useContext(StepperContext)
    const current = stepper.step === step
    const isFive = stepper.step === 5

    return (
        <div className={`slide ${!current ? 'hidden' : isFive ? 'text-center centered-col xs:h-96 md:h-full' : 'h-auto'}`}>
            <div className={`w-16 h-16 rounded-full bg-img bg-icon-thank-you self-center ${isFive ? '' : 'hidden'}`} />
            <h1 className={`xs:text-lg md:text-3xl font-bold `}>{slides[step].title}</h1>
            <h3 className={`xs:text-md md:text-lg text-coolgray pb-4 `}>{slides[step].content}</h3>
            {children}
        </div>
    );
}
 
export default Slide;