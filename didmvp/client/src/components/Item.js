import { Paper, Grid } from '@mui/material'


function Item({item})
{

    const displyType = "img";
    let itemInfo;

    //process.env.PUBLIC_URL 정보가 위에서 빼면 되는데 아래 IF 구문에 들어가면 인식이 안됨 
    //itemInfo = <video width={1280 * 0.5} height={780 * 0.5} src={`${process.env.PUBLIC_URL}`.concat(item.itemInfo.src)} style={{display: "flex", margin:"auto"}} loop muted autoPlay></video>;                    
    //==> ( 소괄호로 둘러싸줘야 한다. 

    if(displyType === item.displayType){
        itemInfo = (<img width={1280 * 0.5} height={780 * 0.5} src= {item.itemInfo.src} alt={item.name} style={{display: "flex", margin:"auto"}}/>);
    }else{
        itemInfo = (<video width={1280 * 0.5} height={780 * 0.5} src={`${process.env.PUBLIC_URL}`.concat(item.itemInfo.src)} style={{display: "flex", margin:"auto"}} loop muted autoPlay></video>);
    }

    return (
        
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid key="1">
                {/* <video src={require('./test.mp4').default} loop muted autoPlay></video> */}
                {itemInfo}
                <div className="description" style={{display:"flex", justifyContent:"center"}}>{item.name}</div>
                
            </Grid>
             
        </Grid>
        
    )
}

export default Item