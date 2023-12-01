import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MovieApi from './MovieApi';

const UpcomingMovie = () => {

    const [api, setApi] = useState(MovieApi)
    const [ apifilter,setApiFilter ] = useState([])
    const [count , setCount] = useState(4)

    const handlePrintfilter = (pid) => {
        if(pid == 'All'){
            setApiFilter(api)
        }
        if(pid != 'All'){
            const filtered = api.filter((ele)=>{
                return ele.print == pid
            })
            // console.log(filtered)
            setApiFilter(filtered)
        }
        
    }

    const handleMore = () =>{
      setCount(count+4)

    }

    console.log("filter",apifilter);
    useEffect(()=>{
        setApiFilter(api)
    },[])
    return (
        <>
            <Grid container sx={{ mt: 5 }} >
                <Grid item lg={6} md={6} sm={6} xs={6} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                    <Typography variant='p' sx={{ color: 'white', ml: 5 }}>OPENING THIS WEEK</Typography>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>

                </Grid>
            </Grid>

            <Grid container sx={{ mt: 5, mb: 5 }}>
                <Box sx={{ ml: 5 }}>
                    <Button variant='contained' color='warning' sx={{ width: '150px', mr: 3 ,mb:{sm:'5px',xs:'5px'} }} onClick={()=>{handlePrintfilter('All')}}>All Films</Button>
                    <Button variant='contained' sx={{ width: '150px', mr: 3, backgroundColor: 'gray',mr: 3 ,mb:{sm:'5px',xs:'5px'} }} onClick={()=>{handlePrintfilter('2D')}} >2D</Button>
                    <Button variant='contained' sx={{ width: '150px', mr: 3, backgroundColor: 'gray',mr: 3 ,mb:{sm:'5px',xs:'5px'} }} onClick={()=>{handlePrintfilter('3D')}} >3D</Button>
                    <Button variant='contained' sx={{ width: '150px', mr: 3, backgroundColor: 'gray',mr: 3 ,mb:{sm:'5px',xs:'5px'} }} onClick={()=>{handlePrintfilter('IMAX')}} >IMAX</Button>
                    <Button variant='contained' sx={{ width: '150px', mr: 3, backgroundColor: 'gray', }} onClick={()=>{handlePrintfilter('IMAX 3D')}} >IMAX 3D</Button>
                </Box>
            </Grid>

            {/* Posters  */}

            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {apifilter.slice(0,count).map((e) => {
                    return (
                        <Grid item lg={3} md={3} sm={6} xs={12} sx={{ mb:2 }}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height:'500px'  }}
                                    image={e.image}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {e.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Duraction : {e.duration} | {e.category}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Download</Button>
                                    <Button size="small">Watch</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}

            </Grid>

            <Grid container sx={{ display:'flex', justifyContent:'center' ,alignItems:'center' }}>
                <Box>

                    <Button variant='contained' sx={{display:count >= apifilter.length ? "none" : "block"}}  onClick={handleMore} >Load More..</Button>
                    {/* <Button variant='contained' sx={{display:count <= apifilter.length ? "none" : "block"}}  onClick={handleLess} >Less..</Button> */}
                </Box>

            </Grid>




        </>
    )
}

export default UpcomingMovie
