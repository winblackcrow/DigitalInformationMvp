import React from "react";


const weatherValue = {
    Clear : "맑음",
    Rain : "비",
    Clouds : "흐림",
    Thunderstorm : "뇌우",
    Snow : "눈",
    Mist : "옅은 안개",
    Drizzle : "이슬비",
    Fog : "안개",
    Haze : "실안개",
}

const api = {
    key : "ea6feeaf70904ed7c4e8294989ee51fe", 
    base : "https://api.openweathermap.org/data/2.5/"
};


class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state={
            weathers: "",
            completed : 0
        }

    }
 
    componentDidMount() {
        //this.timer = setInterval(this.progress,20 )
        
        this.callApi()
            //  .then(res => console.log(res))
            // setState() 호출은 비동기적으로 이뤄지기 때문에 setState 호출 직후 새로운 값이 반영되지 않는다. 
            // 리액트 엘리먼트 트리와 전달받은 state가 적용된 엘리먼트 트리를 비교하는 작업 거치고 최종적으로 변경된 부분만 DOM에 적용된다.
            //  이를 해결하기 위해서는 setState로 받지 않고, 다른 변수로 받은 다음 변경 후 최종적으로 setState값에 반영한다.
            // .then(res => this.setState({weathers: res}, () => {console.log(this.state.weathers)}, () => {this.changeWeather()}))
            .then(data => {
                    const name = data.name;
                    const temp = Math.floor((data.main.temp - 273.15)*10)/10; // 섭씨 온도로 변환/ 소수점 아래 1자리
                    const temp_min = Math.floor(data.main.temp_min -273.15);
                    const temp_max = Math.floor(data.main.temp_max-273.15);
                    const humidity = Math.floor(data.main.humidity);

                    this.setState({weathers: {...this.state.weathers, name : name, main:{temp : `${temp}C`, temp_min : 
                                                `${temp_min}C`, temp_max : `${temp_max}C`, humidity: `${humidity}%`}}});
                }            
            )               
            .catch(err => console.log(err));

    }

    callApi = async() => {
        const city = "Seoul";
        const url = `${api.base}weather?q=${city}&appid=${api.key}`;
        
        
        const response = await fetch(url);
        const body = await response.json();
        console.log(body);
        return body;
    }
    
    progress = () => {
        const {completed} = this.state;
        this.setState({completed: completed >=100 ? 0 : completed + 1});
    }

    render(){
        return(
            <div>
                <p>도시 : {this.state.weathers ? this.state.weathers.name : null}</p>
                <p>현재온도 : {this.state.weathers ? this.state.weathers.main.temp: null}</p>
                <p>최고온도 : {this.state.weathers ? this.state.weathers.main.temp_max : null} 
                   &nbsp; &nbsp; 최저온도 : {this.state.weathers ? this.state.weathers.main.temp_min: null}</p>
                <p>습도 : {this.state.weathers ? this.state.weathers.main.humidity: null}</p>
                 
            </div>
        );
    }
}

export default Weather;