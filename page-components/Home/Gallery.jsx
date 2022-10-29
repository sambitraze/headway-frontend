import Box from "@mui/material/Box";
import Title from "../../page-components/Home/Title";
import {Button, Container, Grid, Hidden} from "@mui/material";

export default function Index({galleryRef}) {

    return (
        <>
            <Box width={'100%'} py={10} bgcolor={'#FFF'} ref={galleryRef} px={{md: 3, xs: 1}}>
                <Box width={'100%'} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} mt={4} mb={4}>
                    <Title first={'Media'} second={'Gallery'} />
                    <Box textAlign={'center'} color={'#616161'} maxWidth={'750px'}>
                        While you eagerly wait for Innovance, you can check out our media gallery. Here, you will find our previous amazing events and workshops! You can see the people who worked hard for making all the events successful.                    </Box>
                    <Box mt={8} />
                    <Hidden xlUp>
                        <Grid container spacing={1}>
                            {
                                [1, 2, 3, 4, 5, 6].map((each) => (
                                    <Grid key={each} item md={4} xs={12}>
                                        <Box width={'100%'} boxShadow={'0px 0px 30px rgb(0 0 0 / 10%)'}>
                                            <img src={`/images/img${each}.jpg`} alt={'img'} width={'100%'} style={{height: '263px'}}/>
                                        </Box>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Hidden>
                    <Hidden xlDown>
                        <Grid container spacing={1}>
                            {
                                [1, 2, 3, 4, 5, 6].map((each) => (
                                    <Grid key={each} item md={4} xs={12}>
                                        <Box width={'100%'} boxShadow={'0px 0px 30px rgb(0 0 0 / 10%)'}>
                                            <img src={`/images/img${each}.jpg`} alt={'img'} width={'100%'} style={{height: '320px'}}/>
                                        </Box>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Hidden>

                </Box>
            </Box>


        </>
    )
}
