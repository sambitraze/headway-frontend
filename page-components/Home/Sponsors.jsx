import Box from "@mui/material/Box";
import Title from "../../page-components/Home/Title";
import {Fab, Container, Grid, Hidden} from "@mui/material";
import {planData} from "./planData";
import DoneIcon from "@mui/icons-material/Done";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {useRef} from "react";

export default function Index({sponsorRef}) {

    const ref = useRef(null);
    const scrollDiv = (scrollOffset, ref) => {
        ref.current.scrollLeft += scrollOffset;
    };

    const images = [
        'sp1.png',
        'sp2.png',
        's15.jpg',
        's18.jpg',
        'sp7.jpg',
        'sp8.jpg',
        'sp9.jpg',
        's16.jpg',
        'sp3.png',
        's19.jpeg',
        'sp20.png',
        'sp10.png',
        'sp11.jpeg',
        'sp12.png',
        'sp4.png',
        'sp6.jpg',
        'sp14.jpeg',
    ]

    return (
        <>
            <Box width={'100%'} py={10} bgcolor={'#F5F5F5'} ref={sponsorRef} position={"relative"}>
                {/*<Container maxWidth={'lg'}>*/}
                    <Box width={'100%'} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} mt={4}>
                        <Title first={'The Event'} second={'Sponsors'} />
                        <Box textAlign={'center'} color={'#616161'}>
                            We are very grateful to our sponsors. Without their support and help, this event wouldn't have been possible. We heartily thank you all.                        </Box>
                        <Box mt={8} />
                        {/*<Grid container spacing={5} direction={"row"} justifyContent="center" alignItems="center" px={{md: 0, xs: 6}}>*/}
                        {/*    {*/}
                        {/*        [1, 2, 3, 4, 5, 6].map((each, index) => (*/}
                        {/*            <Grid key={index} item md={4} xs={12} height={'100%'}>*/}
                        {/*                <Box*/}
                        {/*                    width={'100%'}*/}
                        {/*                    display={'flex'}*/}
                        {/*                    justifyContent={'center'}*/}
                        {/*                    alignItems={'center'}*/}
                        {/*                    boxShadow={'0px 0px 30px rgb(0 0 0 / 10%)'}*/}
                        {/*                    borderRadius={'3px'}*/}
                        {/*                    px={3}*/}
                        {/*                    py={7}*/}
                        {/*                >*/}
                        {/*                    <img src={'/event/sp1.png'} alt={'img'} width={'70%'} />*/}
                        {/*                </Box>*/}
                        {/*            </Grid>*/}
                        {/*        ))*/}
                        {/*    }*/}
                        {/*</Grid>*/}
                        <Box
                            width={'100%'}
                            sx={{
                                display: "flex",
                                overflow: "scroll",
                                scrollBehavior: "smooth",
                                padding: 3,
                                borderRadius: "15px",
                                '&::-webkit-scrollbar': {
                                    display: 'none'
                                }
                            }}
                            ref={ref}
                        >
                            {
                                images.map((each) => (
                                    <Box
                                        key={each}
                                        minWidth={'300px'}
                                        display={'flex'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        boxShadow={'0px 0px 30px rgb(0 0 0 / 10%)'}
                                        borderRadius={'3px'}
                                        bgcolor={'#FFF'}
                                        px={3}
                                        py={7}
                                        mr={2}
                                        ml={2}
                                    >
                                        <img src={'/images/' + each} alt={'img'} />
                                    </Box>
                                ))
                            }
                        </Box>
                        <Hidden smDown>
                            <Fab
                                size="small"
                                aria-label="add"
                                sx={{
                                    position: "absolute", top: "63.5%", left: "5.5%",
                                    backgroundColor: 'rgba(71,99,183,0.8)',
                                    '&:hover': {backgroundColor: '#4763B7'},
                                }}
                                onClick={() => scrollDiv(-320, ref)}
                            >
                                <ChevronLeftIcon color={'white'} />
                            </Fab>
                            <Fab
                                size="small"
                                aria-label="add"
                                sx={{
                                    position: "absolute", top: "63.5%", right: "5.5%",
                                    backgroundColor: 'rgba(71,99,183,0.8)',
                                    '&:hover': {backgroundColor: '#4763B7'},
                                }}
                                onClick={() => scrollDiv(320, ref)}
                            >
                                <ChevronRightIcon color={'white'} />
                            </Fab>
                        </Hidden>
                    </Box>
                {/*</Container>*/}
            </Box>


        </>
    )
}
