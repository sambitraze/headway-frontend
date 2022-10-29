import Box from "@mui/material/Box";
import Title from "../../page-components/Home/Title";
import {Container} from "@mui/material";


export default function Index({aboutRef}) {
    return (
        <>
            <Container maxWidth={'lg'}>
                <Box pt={8} pb={6} width={'100%'} mb={6} ref={aboutRef}>
                    <Title first={'About'} second={'The Event'} />
                    <Box textAlign={'center'} color={'#616161'}>
                        Innovance- a grand three-day event that allows you to explore various domains and find your interest. You can experience up to 8 different domains like cybersecurity, marketing Web Development, Content writing and many more. Get a chance to participate in fun games, get participation certificates and win exciting prizes.                    </Box>
                </Box>
            </Container>

        </>
    )
}
