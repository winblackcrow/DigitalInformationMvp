import { Paper, Grid } from '@mui/material'

function Item({item})
{
    return (
        
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid key="1" item>
                {/* <img src= {item.image} alt={item.title} style={{width:"100%", height:"45vh"}}/> */}
                {/* <video src={require('./test.mp4').default} loop muted autoPlay></video> */}
                <video src={`${process.env.PUBLIC_URL}`.concat(item.videoSrc)} style={{display:"flex", margin:"auto"}} loop muted autoPlay></video>            
                
                <div className="description" style={{display:"flex", justifyContent:"center"}}></div>
                <h2><center>{item.name}</center></h2>
            </Grid>
            <Grid key="2" item>
                <video src={`${process.env.PUBLIC_URL}`.concat(item.videoSrc)} style={{display:"flex", margin:"auto"}} loop muted autoPlay></video>            
                
                <div className="description" style={{display:"flex", justifyContent:"center"}}></div>
                <h2><center>{item.name}</center></h2>
            </Grid>
            <Grid key="3" item>
                <video src={`${process.env.PUBLIC_URL}`.concat(item.videoSrc)} style={{display:"flex", margin:"auto"}} loop muted autoPlay></video>            
                
                <div className="description" style={{display:"flex", justifyContent:"center"}}></div>
                <h2><center>{item.name}</center></h2>
            </Grid>
        </Grid>
        
    )
}

export default Item