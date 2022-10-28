import Box from "@mui/material/Box";
import Title from "../../page-components/Home/Title";
import {Container} from "@mui/material";


export default function Index({aboutRef}) {
    return (
        <>
            <Container maxWidth={'lg'}>
                <Box width={'100%'} mb={6} ref={aboutRef}>
                    <Title first={'About'} second={'The Event'} />
                    <Box textAlign={'center'} color={'#616161'}>
                        Innovance, A grand three day opportunity to learn, explore and win, wrapped as a fest! Experience up-to 8 different domains&apos; events!
                    </Box>
                </Box>
            </Container>

        </>
    )
}
