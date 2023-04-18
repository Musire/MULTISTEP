import { Card, CardContainer } from "."
import { Toggle } from "../toggle"

const ServiceCards = () => {
    return ( 
        <CardContainer>
            <div className="flex flex-col xs:space-y-8 md:space-y-0 md:space-x-4 md:flex-row xs:w-5/6 md:w-auto">
                <Card variant={'arcade'} />
                <Card variant={'advanced'} />
                <Card variant={'pro'} />
            </div>
            <Toggle />
        </CardContainer>
     );
}
 
export default ServiceCards;