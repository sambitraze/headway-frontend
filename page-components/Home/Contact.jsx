import Box from "@mui/material/Box";
import Title from "../../page-components/Home/Title";
import {Button, Container, Grid} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {useRouter} from "next/router";

export default function Index({contactRef}) {
    const Router = useRouter();

    return (
        <>
            <Box width={'100%'} py={10} bgcolor={'#F5F5F5'} ref={contactRef}>
                <Container maxWidth={'lg'}>
                    <Box width={'100%'} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} mt={4}>
                        <Title first={'Contact'} second={'Us'} />
                        <Box textAlign={'center'} color={'#616161'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, minima!
                        </Box>
                        <Box mt={8} />
                        <Grid container>
                            <Grid item md={4} xs={4}>
                                <Box width={'100%'} p={2} color={'#fff'} display={'flex'} justifyContent={'center'}>
                                    <Box p={4} bgcolor={'rgba(255, 255, 255, 0.1)'} borderRadius={25} sx={{
                                        color: '#4763B7',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            backgroundColor: {md: '#4763B7', xs: ''},
                                            color: {md: '#FFF', xs: ''},
                                        },
                                    }}
                                         onClick={async () => {
                                             await Router.push('mailto:iot.lab@kiit.ac.in')
                                         }}
                                    >
                                        <EmailIcon sx={{ fontSize: 50 }} />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <Box width={'100%'} p={2} color={'#fff'} display={'flex'} justifyContent={'center'}>
                                    <Box p={4} bgcolor={'rgba(255, 255, 255, 0.1)'} borderRadius={25} sx={{
                                        color: '#4763B7',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            backgroundColor: {md: '#4763B7', xs: ''},
                                            color: {md: '#FFF', xs: ''},
                                        },
                                    }}
                                         onClick={async () => {
                                             await Router.push('https://twitter.com/iotlabkiit')
                                         }}
                                    >
                                        <TwitterIcon sx={{ fontSize: 50 }} />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <Box width={'100%'} p={2} color={'#fff'} display={'flex'} justifyContent={'center'}>
                                    <Box p={4} bgcolor={'rgba(255, 255, 255, 0.1)'} borderRadius={25} sx={{
                                        color: '#4763B7',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            backgroundColor: {md: '#4763B7', xs: ''},
                                            color: {md: '#FFF', xs: ''},
                                        },
                                    }}
                                         onClick={async () => {
                                             await Router.push('https://www.linkedin.com/company/iotlabkiit/mycompany/')
                                         }}
                                    >
                                        <LinkedInIcon sx={{ fontSize: 50 }} />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>


        </>
    )
}
