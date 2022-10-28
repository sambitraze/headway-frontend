import { useEffect, useRef, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import {Container, Hidden} from "@mui/material";


const Navbar = ({mainRef, aboutRef, scheduleRef, planRef, sponsorRef, galleryRef, contactRef}) => {
    const [onTop, setOnTop] = useState(true);
    const navRef = useRef();

    useEffect(() => {
        const position = navRef.current.offsetTop;
        window.onscroll = function () {
            if (window.pageYOffset > position + 440) {
                setOnTop(false);
            } else {
                setOnTop(true);
            }
        };
    }, []);

    // const list = ['HOME', 'ABOUT', 'TIMELINE', 'VENUES', 'CONTACT US'];
    const list = [
        {
            ref: mainRef,
            name: 'Home'
        },
        {
            ref: aboutRef,
            name: 'ABOUT'
        },
        {
            ref: scheduleRef,
            name: 'TIMELINE'
        },
        {
            ref: planRef,
            name: 'PRICING'
        },
        {
            ref: sponsorRef,
            name: 'SPONSORS'
        },
        {
            ref: galleryRef,
            name: 'GALLERY'
        },
        {
            ref: contactRef,
            name: 'CONTACT US'
        },
    ];

    return (
        <>

            <AppBar
                color={"transparent"}
                ref={navRef}
                elevation={0}
                position={onTop ? 'absolute' : 'fixed'}
            >
                <Box width={'100%'} p={1} bgcolor={!onTop ? "#FFF" : ""} color={!onTop ? "#000" : "#FFF"} boxShadow={!onTop ? '0px 4px 32px rgba(0, 0, 0, 0.14)' : ''}>
                    <Container maxWidth={'lg'}>
                        <Box display={'flex'} justifyContent={{md: 'space-between', xs: !onTop ? 'space-between' : 'center'}} alignItems={'center'}>
                            <Box
                                noLinkStyle href="/" width={'120px'} height={'41px'}
                                sx={{cursor: 'pointer'}}
                                onClick={() => {
                                    mainRef.current?.scrollIntoView({behavior: 'smooth'});
                                }}
                            >
                                <Image src={Logo} alt={'logo'} />
                            </Box>
                            <Box display={'flex'} alignItems={'center'}>
                                <Hidden smDown>
                                    <Box display={'flex'} alignItems={'center'}>
                                        {
                                            list.map((each, index) => (
                                                <Box
                                                    key={index} ml={4} fontSize={'15px'} fontWeight={600}
                                                    sx={{
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            color: '#4763B7'
                                                        },
                                                    }}
                                                    onClick={() => {
                                                        each.ref.current?.scrollIntoView({behavior: 'smooth'});
                                                    }}
                                                >
                                                    {each.name}
                                                </Box>
                                            ))
                                        }
                                    </Box>
                                </Hidden>
                                {
                                    !onTop && (
                                        <Button
                                            sx={{
                                                ml: 8,
                                                borderRadius: '30px',
                                                textTransform: 'none',
                                                py: 0.5
                                            }}
                                            variant={'contained'}
                                            disableElevation
                                        >
                                            Register
                                        </Button>
                                    )
                                }

                            </Box>
                        </Box>
                    </Container>
                </Box>
            </AppBar>
        </>
    );
};

export default Navbar;
