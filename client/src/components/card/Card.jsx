import { cards } from "../../constants/CardText"
import { useContext } from "react"
import { StepperContext } from "../../context/StepperContext"

const Card = ({ variant }) => {
  const { stepper, handlePlan } = useContext(StepperContext);
  const isMonthly = stepper.billing === 'monthly'

  const icons = {
    arcade: 'bg-icon-arcade',
    advanced: 'bg-icon-advanced',
    pro: 'bg-icon-pro'
  }
  
  return (
    <div className={`card ${stepper.plan === variant ? 'border-purpleblue/70 bg-alabaster': ''}`} onClick={() => handlePlan(variant)}>
        <div className={`card-icon ${icons[variant]}`}></div>
        <section className="flex flex-col items-start md:w-4/5">
            <h1 className="font-bold text-blue-900 xs:text-md md:text-xl">{cards[variant].title}</h1>
            <p className="xs:text-sm md:text-md text-coolgray">{`$${cards[variant].price[stepper.billing]}/${isMonthly ? 'mo' : 'yr'}`}</p>
            <p className={`font-semibold text-blue-800 xs:text-[12px] md:text-[15px] ${isMonthly ? 'hidden': ''}`} >2 months free</p>
        </section>
    </div>
  )
}

export default Card