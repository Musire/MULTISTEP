import { useContext } from "react"
import { cards } from "../../constants/CardText"
import { StepperContext } from "../../context/StepperContext"

const CardRadio = ({ variant }) => {

  const { stepper, handleAddon } = useContext(StepperContext)
  const isActive = stepper.addons.has(variant)
  const isMonthly = stepper.billing === 'monthly'
    
  return (
    <div className={`card-radio ${isActive ? 'bg-alabaster border-purpleblue' : ''}`} onClick={() => handleAddon(isActive, variant)} >
        <div className={`checkmark ${isActive ? 'bg-purpleblue border-purpleblue' : ''}`} >
            <div className={`${isActive ? 'w-3/5 h-3/5 bg-img bg-icon-checkmark' : 'hidden' } `} />
        </div>
        <article className="flex flex-col w-[17rem] px-4">
            <h1 className="text-lg font-bold text-blue-800">{cards[variant].title}</h1>
            <p className="text-[15px] text-coolgray">{cards[variant].subtitle}</p>
        </article>
        <p className="text-[15px] font-semibold text-purpleblue">{`+$${cards[variant].price[stepper.billing]}/${isMonthly ? 'mo' : 'yr'}`}</p>
    </div>
  )
}

export default CardRadio