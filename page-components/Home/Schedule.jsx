import Box from "@mui/material/Box";
import Title from "../../page-components/Home/Title";
import {Avatar, Container, Grid, Hidden, Stack} from "@mui/material";
import {scheduleData} from "./scheduleData";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {useState} from "react";


export default function Index({scheduleRef}) {

    const [current, setCurrent] = useState(0)

    return (
        <>
            <Box width={'100%'} bgcolor={'#F5F5F5'} pt={10} pb={6} ref={scheduleRef}>
                <Container maxWidth={'lg'}>
                    <Box width={'100%'} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} mt={4}>
                        <Title first={'The Event'} second={'Schedule'} />
                        <Stack
                            direction="row"
                            // divider={<Divider orientation="vertical" flexItem />}
                            spacing={6}
                        >
                            {
                                scheduleData.map((each, index) => (
                                    <Box
                                        key={index}
                                        color={index === current ? '#000' : '#A1A1A1'}
                                        fontWeight={500}
                                        fontSize={'15px'}
                                        onClick={() => setCurrent(index)}
                                        sx={{cursor: 'pointer'}}
                                    >
                                        {`DAY ${index + 1}`}
                                    </Box>
                                ))
                            }
                        </Stack>
                        <Box mt={{md: 16, xs: 12}} />
                        {
                            scheduleData[current].schedule.map((each, index) => (
                                <Grid key={index} container spacing={{md: 6, xs: 3}} mb={{md: 16, xs: 12}} direction={index % 2 === 0 ? 'row' : "row-reverse"} justifyContent="center" alignItems="center">
                                    <Grid item xs={12} md={6}>
                                        <Hidden smDown>
                                            <Box display={'flex'} alignItems={'center'} flexDirection={index % 2 === 0 ? 'row' : "row-reverse"} justifyContent={'flex-end'}>
                                                <Box mr={index % 2 === 0 ? 1.5 : 0} ml={index % 2 === 0 ? 0 : 1.5} fontWeight={500} fontSize={'15px'}>
                                                    {each.timing}
                                                </Box>
                                                {/*<Avatar sx={{ width: 30, height: 30 }}>{index + 1}</Avatar>*/}
                                                <CalendarMonthIcon color={'primary'} />
                                            </Box>
                                        </Hidden>
                                        <Hidden smUp>
                                            <Box display={'flex'} alignItems={'center'} flexDirection={index % 2 !== 0 ? 'row' : "row-reverse"} justifyContent={'flex-end'}>
                                                <Box mr={index % 2 !== 0 ? 1.5 : 0} ml={index % 2 !== 0 ? 0 : 1.5} fontWeight={500} fontSize={'15px'}>
                                                    {each.timing}
                                                </Box>
                                                <Avatar src={'https://source.unsplash.com/random'} sx={{ width: 30, height: 30 }} />
                                            </Box>
                                        </Hidden>

                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box width={'100%'} display={'flex'} justifyContent={index % 2 === 0 ? 'flex-start' : "flex-end"}>
                                            <Box width={'450px'} p={4} borderRadius={'5px'} borderRight={index % 2 === 0 ? '' : '4px solid #4763B7'} borderLeft={index % 2 === 0 ? '4px solid #4763B7' : ''} bgcolor={'#FFF'} boxShadow={'0px 0px 30px rgb(0 0 0 / 10%)'}>
                                                <Box fontWeight={600} fontSize={'20px'}>
                                                    {each.title}
                                                </Box>
                                                {
                                                    each.description && (
                                                        <Box mt={2} fontSize={'14px'} lineHeight={1.5} letterSpacing={1.7}>
                                                            {each.description}
                                                        </Box>
                                                    )
                                                }
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </Box>
                </Container>
            </Box>


        </>
    )
}
