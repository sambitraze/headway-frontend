import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from "../page-components/Home/Navbar";
import Box from "@mui/material/Box";
import Main from "../page-components/Home/Main";
import Schedule from "../page-components/Home/Schedule";
import About from "../page-components/Home/About";
import Plans from "../page-components/Home/Plans";
import Sponsors from "../page-components/Home/Sponsors";
import Gallery from "../page-components/Home/Gallery";
import Contact from "../page-components/Home/Contact";
import Venue from "../page-components/Home/Venue";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useRef} from 'react';

export default function Index() {

    const mainRef = useRef(null);
    const aboutRef = useRef(null);
    const scheduleRef = useRef(null);
    const venueRef = useRef(null);
    const planRef = useRef(null);
    const sponsorRef = useRef(null);
    const galleryRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <>
            <ThemeProvider theme={createTheme({

                palette: {
                    primary: {
                        main: '#4763B7',
                    },
                    secondary: {
                        main: '#204341',
                    },
                    white: {
                        main: '#FFF',
                    },
                },
            })}>
                <Box color={'#000'} bgcolor={'#FFF'}>
                    <Navbar
                        mainRef={mainRef}
                        aboutRef={aboutRef}
                        scheduleRef={scheduleRef}
                        venueRef={venueRef}
                        planRef={planRef}
                        sponsorRef={sponsorRef}
                        galleryRef={galleryRef}
                        contactRef={contactRef}
                    />
                    <Main mainRef={mainRef} scheduleRef={scheduleRef} />
                    <About aboutRef={aboutRef} />
                    <Schedule scheduleRef={scheduleRef} />
                    <Venue venueRef={venueRef} />
                    <Plans planRef={planRef} />
                    <Sponsors sponsorRef={sponsorRef} />
                    <Gallery galleryRef={galleryRef} />
                    <Contact contactRef={contactRef} />
                    {/*<Box pb={6} pt={6} display={'flex'} alignItems={'center'} width={'100%'} justifyContent={'center'} color={'#909090'} fontSize={'18px'} fontWeight={500}>*/}
                    {/*    <Box mr={0.5}>*/}
                    {/*        Copyright ©2022 All rights reserved | Made with*/}
                    {/*    </Box>*/}
                    {/*    <FavoriteIcon />*/}
                    {/*    <Box ml={0.5}>by</Box>*/}
                    {/*    <Box ml={0.5}*/}
                    {/*         onClick={() => {*/}
                    {/*             Router.push("/");*/}
                    {/*         }}*/}
                    {/*         sx={{*/}
                    {/*             cursor: 'pointer',*/}
                    {/*             textDecoration: 'underline',*/}
                    {/*             '&:hover': {*/}
                    {/*                 color: '#4763B7',*/}
                    {/*             },*/}
                    {/*         }}>*/}
                    {/*        IoT KIIT*/}
                    {/*    </Box>*/}
                    {/*</Box>*/}
                </Box>
            </ThemeProvider>
        </>
    )
}
