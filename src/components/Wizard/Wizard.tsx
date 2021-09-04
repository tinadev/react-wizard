import { Grid, GridItem } from "@chakra-ui/react";
import WizardContent from "src/components/Wizard/WizardContent";
import WizardInstructions from "src/components/Wizard/WizardInstructions";

function Wizard(): JSX.Element {
  return (
    <Grid h="100vh" templateColumns="repeat(9, 1fr)" gap={0}>
      <GridItem colSpan={4} bg="green">
        <WizardInstructions />
      </GridItem>
      <GridItem colSpan={5} bg="tomato">
        <WizardContent />
      </GridItem>
    </Grid>
  );
}

export default Wizard;
