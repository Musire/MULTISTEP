import { DotIndicator, DotContainer } from ".";

const Dots = () => {
    return ( 
        <DotContainer>
          <DotIndicator step={1} />
          <DotIndicator step={2} />
          <DotIndicator step={3} />
          <DotIndicator step={4} />
        </DotContainer>
     );
}
 
export default Dots;