import { Heading } from "@chakra-ui/react"
import { DrawerExample1, DrawerExample2, FlexBoxExample, ComplexGridExample, SimpleGridExample } from "../../components/exemplo"

export const LandingPage = () => {
    return (
        <>
            <Heading>LANDING PAGE</Heading>
            <DrawerExample1></DrawerExample1>
            <DrawerExample2></DrawerExample2>
            <FlexBoxExample></FlexBoxExample>
            <ComplexGridExample></ComplexGridExample>
            <SimpleGridExample></SimpleGridExample>
        </>
    )
}