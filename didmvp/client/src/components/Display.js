import React from "react"; 
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import slider from '../helper/slider.json' 


class Display extends React.Component{
    constructor(props){
        super(props);
        const state={

        }
    }

    render(){

        return(
            <Carousel interval={this.props.layout.interval} duration={this.props.layout.duration} animation={this.props.layout.animation}>
                {
                    slider.map( item => <Item key={item.id} item={item} /> )
                }
            </Carousel>
        );

    }
}


export default Display