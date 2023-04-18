import { useContext, useRef } from "react";
import { StepperContext } from "../../context/StepperContext";

const DemographicsForm = () => {
    const { handleDemographics } = useContext(StepperContext);

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        handleDemographics({
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value
        })
    }
    
    return ( 
        <form onSubmit={handleSubmit} id="demographics" className="flex flex-col space-y-4">
            <section className="flex flex-col">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" ref={nameRef} type="text" className="form-input" placeholder="e.g. Stephen King" required/>
            </section>
            <section className="flex flex-col">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input id="email" ref={emailRef} type="email" className="form-input" placeholder="e.g. stephenking@lorem.com" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />
            </section>
            <section className="flex flex-col">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input id="phone" ref={phoneRef} type="text" className="form-input" placeholder="e.g. +1 234 567 890" minLength="10" title="Only Numbers" pattern="[0-9]*" required/>
            </section>
        </form>
     );
}
 
export default DemographicsForm;