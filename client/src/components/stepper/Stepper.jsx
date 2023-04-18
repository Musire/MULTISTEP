import { DemographicsForm, SlideContainer, Slide, ExtraCards, ServiceCards, Table } from "."

const Stepper = () => {
    return (
        <SlideContainer >
            <Slide step={1} >
                <DemographicsForm />
            </Slide>
            <Slide step={2} >
                <ServiceCards />
            </Slide>
            <Slide step={3} >
                <ExtraCards />
            </Slide>
            <Slide step={4} >
                <Table />
            </Slide>
            <Slide step={5} />
        </SlideContainer>
    )
}

export default Stepper