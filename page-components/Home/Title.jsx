import Box from "@mui/material/Box";
import EventSeatIcon from '@mui/icons-material/EventSeat';

export default function Index({first, second}) {
    return (
        <>
            <Box fontSize={{md: '47px', xs: '35px'}} width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
               <Box>
                   {first}
               </Box>
                <Box color={'#4763B7'} ml={{md:1.5, xs: 1}} fontWeight={600}>
                    {second}
                </Box>
            </Box>
            <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} color={'#c3c3c3'} mt={{md:3, xs: 2}} mb={{md:4, xs: 3}}>
                <Box borderBottom={'2px solid #c3c3c3'} height={'2px'} width={{md: '100px', xs: '130px'}} sx={{opacity: 0.5}}/>
                <EventSeatIcon sx={{ml: 3, mr: 3}} />
                <Box borderBottom={'2px solid #c3c3c3'} height={'2px'} width={{md: '100px', xs: '130px'}} sx={{opacity: 0.5}}/>
            </Box>
        </>
    )
}
