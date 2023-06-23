import React from "react"; 
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import slider from '../helper/slider.json' 
import slider2 from '../helper/slider-2.json'

//todo : 아래 slider1, 2로 import 처리하지 말고, json fk를 비교해서 출력하는 걸로 개선 필요 

const renderSlider =() => {
    return null;
    //if문을 사용하기 위해서 함수만들고 호출하면 되나, 아래 props를 위에 함수에서 사용하는 방법을 알고 숙지해야 한다.    
};


class Display extends React.Component{
    constructor(props){
        super(props);
        const state={

        }
    }

    render(){

        return(
            <Carousel interval={this.props.layout.interval} duration={this.props.layout.duration} animation={this.props.layout.animation}>
               
                {/* {slider.map( item => <Item key={item.id} item={item}/>)} */}
                {(() =>{
                    if(this.props.layout.id === 1){
                        return slider.map( item => <Item key={item.id} item={item}/>)
                    }else{
                        return slider2.map( item => <Item key={item.id} item={item}/>)
                    } //선언하자마자 즉시 실행함수에 대해서 알아보고
                })()} 

            </Carousel>
        );

    }
}


export default Display