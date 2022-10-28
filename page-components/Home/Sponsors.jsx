import Box from "@mui/material/Box";
import Title from "../../page-components/Home/Title";
import {Button, Container, Grid} from "@mui/material";
import {planData} from "./planData";
import DoneIcon from "@mui/icons-material/Done";

export default function Index({sponsorRef}) {

    return (
        <>
            <Box width={'100%'} py={10} bgcolor={'#F5F5F5'} ref={sponsorRef}>
                <Container maxWidth={'lg'}>
                    <Box width={'100%'} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} mt={4} mb={4}>
                        <Title first={'The Event'} second={'Sponsors'} />
                        <Box textAlign={'center'} color={'#616161'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, minima!
                        </Box>
                        <Box mt={8} />
                        <Grid container spacing={5} direction={"row"} justifyContent="center" alignItems="center" px={{md: 0, xs: 6}}>
                            {
                                [1, 2, 3, 4, 5, 6].map((each, index) => (
                                    <Grid key={index} item md={4} xs={12} height={'100%'}>
                                        <Box
                                            width={'100%'}
                                            display={'flex'}
                                            justifyContent={'center'}
                                            alignItems={'center'}
                                            boxShadow={'0px 0px 30px rgb(0 0 0 / 10%)'}
                                            borderRadius={'3px'}
                                            px={3}
                                            py={7}
                                        >
                                            <img src={'/images/sp1.png'} alt={'img'} width={'70%'} />
                                        </Box>
                                    </Grid>
                                ))
                            }
                        </Grid>

                    </Box>
                </Container>
            </Box>


        </>
    )
}
