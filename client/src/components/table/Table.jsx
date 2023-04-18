import { useContext } from "react";
import { TableContainer, TableSlot } from "."
import { StepperContext } from "../../context/StepperContext";
import { cards } from "../../constants/CardText";
import usePrices from "../../hooks/usePrices";

const Table = () => {
    const { stepper } = useContext(StepperContext);
    const serviceCost = cards[stepper.plan].price[stepper.billing]
    const isMonthly = stepper.billing === 'monthly'
    const abbreviation = isMonthly ? 'mo' : 'yr'
    const perBilling = isMonthly ? 'per month' : 'per year'
    const servicesList = [...stepper.addons]
    const services = servicesList.map(item => {
        return (
        <TableSlot key={item}>
            <p className="text-coolgray">{cards[item].title}</p>
            <p className="text-blue-700">+${cards[item].price[stepper.billing]}/{abbreviation}</p>
        </TableSlot>
        )
    })
    let total = usePrices(servicesList, serviceCost)
    
    return ( 
        <>
            <TableContainer>
              <TableSlot>
                <section className="flex flex-col">
                  <p className="text-lg font-bold text-blue-800 capitalize">{stepper.plan} ({stepper.billing})</p>
                  <p className="underline text-coolgray">Change</p>
                </section>
                <p className="text-lg font-bold text-blue-800">+${serviceCost}/{abbreviation}</p>
              </TableSlot>
              <div className="bg-lightgray w-full h-[1px] rounded-full" />
              {services}
            </TableContainer>
            <TableSlot variant >
              <p className="text-coolgray">Total ({perBilling})</p>
              <p className="text-lg font-bold text-purpleblue">${total}/{abbreviation}</p>
            </TableSlot>
        </>
     );
}
 
export default Table;