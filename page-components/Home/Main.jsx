import {Container, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import {useCountdown} from "../useCountdown";
import {useRouter} from "next/router";

export default function Index({mainRef, scheduleRef}) {
    const [days, hours, minutes, seconds] = useCountdown("2022-11-4 18:30");
    const countDown = [days, hours, minutes, seconds]
    const Router = useRouter();

    return (
        <>
            <Box
                ref={mainRef}
                mb={10}
                width={'100%'}
                sx={{
                    // background: `url('/event/home-bg.jpg)`,
                    background: `url('/backgrounds/dashboardBg12.jpg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: {xl: '700px', lg: '700px', xs: '580px'},
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: {md: '0% 0% 150% 150%/0% 0% 35% 35%', xs: '0% 0% 150% 150%/0% 0% 15% 15%'},
                }}
            >
                <Container maxWidth={'lg'}>
                    <Box textAlign={'center'} width={'100%'} >
                        <Box lineHeight={0.6} position={'relative'}>
                            <Box letterSpacing={'8px'} fontWeight={900} fontSize={{md: '130px', xs: '45px'}} sx={{color: 'rgba(255, 255, 255, 0.22)'}}>
                                INNOVANCE
                            </Box>
                            <Box fontWeight={900} fontSize={{md: '90px', xs: '50px'}} color={'#FFF'} position={'absolute'} top={13} width={'100%'} textAlign={'center'} letterSpacing={'2.5px'} zIndex={1}>
                                IoT Lab
                            </Box>
                        </Box>
                        <Box color={'#FFF'} mt={5} fontWeight={500} fontSize={{md: '20px', xs: '16px'}}>
                            CAMPUS 15 & CAMPUS 17
                        </Box>
                    </Box>
                    <Box width={'100%'} display={'flex'} justifyContent={'center'} mt={8}>
                        {
                            days + hours + minutes + seconds > 0 ? (
                                <Stack
                                    direction="row"
                                    divider={<Divider orientation="vertical" flexItem color={'white'}/>}
                                    spacing={2}
                                    color={'#FFF'}
                                >
                                    {
                                        countDown.map((each, index) => (
                                            <Box
                                                key={index} width={{md: '100px', xs: '55px'}} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}
                                                sx={{
                                                    transition: {md: '.1s linear', xs: 0},
                                                    "&:hover": {
                                                        // backgroundColor: {md: '#f9f9f9', xs: '#dedede'},
                                                        transform: {md: 'scale(1.05) translate(0 ,-5px)', xs: 0},
                                                    },
                                                }}
                                            >
                                                <Box fontSize={{md: '70px', xs: '45px'}} fontWeight={700}>
                                                    {each}
                                                </Box>
                                                <Box fontSize={{md: '14px', xs: '12px'}} fontWeight={600}>
                                                    {index === 0 ? 'DAYS' : index === 1 ? 'Hours' : index === 2 ? 'MINUTES' : 'SECONDS'}
                                                </Box>
                                            </Box>
                                        ))
                                    }

                                </Stack>
                            ) : (
                                <Box letterSpacing={'5px'} fontWeight={900} fontSize={{md: '80px', xs: '40px'}} sx={{color: 'rgba(255, 255, 255, 0.85)'}}>
                                    Event is Live!
                                </Box>
                            )
                        }
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100%'} mt={5}>
                        <Button
                            sx={{
                                borderRadius: '30px',
                                textTransform: 'none',
                                py: 0.3,
                                px: 4,
                                fontSize: {md: '20px', xs: '16px'},
                                border: '1.5px solid #FFF',
                                "&:hover": {
                                    // background: "#4763B7",
                                    // border: '1.5px solid #4763B7'
                                    border: '1.5px solid #FFF'
                                },
                            }}
                            variant={'outlined'}
                            color={'white'}
                            disableElevation
                            onClick={async () => {
                                scheduleRef.current?.scrollIntoView({behavior: 'smooth'});
                            }}
                        >
                            Details
                        </Button>
                        {
                            days + hours + minutes + seconds > 0 && (
                                <Button
                                    sx={{
                                        ml: 4,
                                        borderRadius: '30px',
                                        textTransform: 'none',
                                        py: 0.3,
                                        px: 4,
                                        fontSize: {md: '20px', xs: '16px'},
                                        border: '1.5px solid #FFF',
                                        "&:hover": {
                                            // background: "#4763B7",
                                            // border: '1.5px solid #4763B7'
                                            border: '1.5px solid #FFF'
                                        },
                                    }}
                                    variant={'outlined'}
                                    color={'white'}
                                    disableElevation
                                    onClick={async () => {
                                        await Router.push('/register')
                                    }}
                                >
                                    Register
                                </Button>
                            )
                        }
                    </Box>

                </Container>
            </Box>
        </>
    )
}
