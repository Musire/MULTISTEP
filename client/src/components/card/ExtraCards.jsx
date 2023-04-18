import { CardContainer, CardRadio } from "."

const ExtraCards = () => {
    return ( 
        <CardContainer>
            <CardRadio variant={'online'} />
            <CardRadio variant={'storage'} />
            <CardRadio variant={'profile'} />
        </CardContainer>
     );
}
 
export default ExtraCards;