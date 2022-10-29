import Box from "@mui/material/Box";
import Title from "../../page-components/Home/Title";
import {Button, Container, Grid} from "@mui/material";
import {planData} from "./planData";
import DoneIcon from "@mui/icons-material/Done";

export default function Index({galleryRef}) {

    return (
        <>
            <Box width={'100%'} py={10} bgcolor={'#FFF'} ref={galleryRef}>
                <Box width={'100%'} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} mt={4} mb={4}>
                    <Title first={'Media'} second={'Gallery'} />
                    <Box textAlign={'center'} color={'#616161'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, minima!
                    </Box>
                    <Box mt={8} />
                    <Grid container>
                        {
                            [1, 2, 3, 4, 5, 6].map((each) => (
                                <Grid key={each} item md={4} xs={12}>
                                    <img src={`/images/img${each}.jpg`} alt={'img'} width={'100%'} style={{height: '260px'}}/>
                                </Grid>
                            ))
                        }
                    </Grid>

                </Box>
            </Box>


        </>
    )
}
