import Box from "@mui/material/Box";
import Title from "../../page-components/Home/Title";
import {Button, Container, Grid} from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import {planData} from "./planData";
import {useRouter} from "next/router";

export default function Index({planRef}) {

    const Router = useRouter();

    return (
        <>
            <Box width={'100%'} py={10} ref={planRef}>
                <Container maxWidth={'lg'}>
                    <Box width={'100%'} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} mt={4} mb={4}>
                        <Title first={'The Event'} second={'Pricing'} />
                        <Box mt={{md: 8, xs: 2}} />
                        <Grid container spacing={5} direction={"row"} justifyContent="center" alignItems="center" px={{md: 0, xs: 5}}>
                            {
                                planData.map((each, index) => (
                                    <Grid key={index} item md={4} xs={12} height={'100%'}>
                                        <Box
                                            width={'100%'}
                                            display={'flex'}
                                            flexDirection={'column'}
                                            justifyContent={'space-between'}
                                            alignItems={'center'}
                                            boxShadow={'0px 0px 30px rgb(0 0 0 / 10%)'}
                                            border={'2px solid #FFF'}
                                            borderRadius={'3px'}
                                            px={3}
                                            py={3}
                                            sx={{
                                                transition: {md: '.1s linear', xs: 0},
                                                '&:hover': {
                                                    border: '2px solid #4763B7',
                                                    transform: {md: 'scale(1.1) translate(0 ,-5px)', xs: 0},
                                                },
                                            }}
                                            height={{md: '390px', xs: '410px'}}
                                        >
                                            <Box width={'100%'} display={'flex'} alignItems={'center'} flexDirection={'column'}>
                                                <Box fontSize={'18px'} fontWeight={600} letterSpacing={1.7} mb={2}>
                                                    {each.title}
                                                </Box>
                                                <Box fontSize={'40px'} fontWeight={700} color={'#4763B7'} mb={3}>
                                                    {each.price}
                                                </Box>
                                                <Box>
                                                    {
                                                        each.points.map((point, idx) => (
                                                            <Box key={idx} display={'flex'} mb={0.5} lineHeight={1.5}>
                                                                <DoneIcon color={'primary'} />
                                                                <Box ml={1}>
                                                                    {point}
                                                                </Box>
                                                            </Box>
                                                        ))
                                                    }
                                                </Box>
                                            </Box>
                                            <Button
                                                disableElevation
                                                fullWidth
                                                variant={'contained'}
                                                sx={{
                                                    borderRadius: '10px',
                                                    py: 1,
                                                    px: 4,
                                                    marginTop: 2
                                                    // fontSize: {md: '20px', xs: '16px'},
                                                }}
                                                onClick={async () => {
                                                    await Router.push('/register')
                                                }}
                                            >
                                                Buy Now
                                            </Button>
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
