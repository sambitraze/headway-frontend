import { useEffect, useRef, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from "next/image";
import LogoDark from "../../public/images/innovance-light.svg";
import LogoLight from "../../public/images/innovance-dark.svg";
import {Container, Hidden} from "@mui/material";
import {useRouter} from "next/router";
import {useCountdown} from "../useCountdown";


const Navbar = ({mainRef, aboutRef, scheduleRef, venueRef, planRef, sponsorRef, galleryRef, contactRef}) => {
    const [onTop, setOnTop] = useState(true);
    const navRef = useRef();
    const Router = useRouter();

    const [days, hours, minutes, seconds] = useCountdown("2022-11-4 18:30");


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
            name: 'HOME'
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
            ref: venueRef,
            name: 'VENUE'
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
                <Box width={'100%'} px={1} bgcolor={!onTop ? "#FFF" : ""} color={!onTop ? "#000" : "#FFF"} boxShadow={!onTop ? '0px 4px 32px rgba(0, 0, 0, 0.14)' : ''}>
                    <Container maxWidth={'lg'}>
                        <Box display={'flex'} justifyContent={{md: 'space-between', xs: !onTop ? 'space-between' : 'center'}} alignItems={'center'}>
                            <Box
                                noLinkStyle href="/" width={{md: '80px', xs: onTop ? '140px' : '80px'}}
                                sx={{cursor: 'pointer'}}
                                onClick={() => {
                                    mainRef.current?.scrollIntoView({behavior: 'smooth'});
                                }}
                            >
                                {
                                    !onTop ? (<Image src={LogoDark} alt={'logo'} />) : (<Image src={LogoLight} alt={'logo'} />)
                                }
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
                                            onClick={async () => {
                                                await Router.push('/register')
                                            }}
                                            disabled={days + hours + minutes + seconds <= 0}
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
