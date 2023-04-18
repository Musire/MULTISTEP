import { useContext, useEffect, useState } from "react"
import { cards } from "../constants/CardText"
import { StepperContext } from "../context/StepperContext"

const usePrices = (servicesArray, service) => {
    const { stepper } = useContext(StepperContext)
    const [total, setTotal] = useState(0)

    useEffect(() => {
     if (servicesArray.length > 0) {
        const prices = servicesArray.map(item => cards[item].price[stepper.billing])
        const sumValue = prices.reduce((accumulator=0, currentValue) => accumulator + currentValue);
        setTotal(sumValue + service)
     }   
    }, [servicesArray])

        

    return ( total )
}

export default usePrices