import { Dots, Stepper, StepperControls } from "./components/stepper"
import { StepperProvider } from "./context/StepperContext"

export default function App() {
  return (
    <StepperProvider>
      <div className="relative w-screen h-screen font-ubuntu bg-magnolia md:centered">
        <div className=" responsive-wrapper">
          <div className="sidebar" >
            <Dots />
          </div>
          <div className="w-full h-auto min-h-full pr-4 md:row-span-2 spaced-col">
            <Stepper />
            <StepperControls />
          </div>
        </div>
      </div>
    </StepperProvider>
  )
}