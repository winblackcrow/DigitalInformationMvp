import React from "react";




const api = {
    key : "", 
    base : "https://api.openweathermap.org/data/2.5/"
};


class Weather extends React.Comment{

    constructor(props){
        super(props);
        const state ={
            weather: [],
            completed : 0
        };
    }

    componentDidMount() {
        //this.timer = setInterval(this.progress,20 )
        this.callApi()
            .then(res => this.setState({weather: res}))
            .catch(err => console.log(err));
    }

    callApi = async() => {
        const city = "Seoul";
        const url = `${api.base}weather?q=${city}&appid=${api.key}`;

        const response = await fetch('url');
        const body = await response.json();
        return body;
    }

    progress = () => {
        const {completed} = this.state;
        this.setState({completed: completed >=100 ? 0 : completed + 1});
    }

    render(){
        return(
            <div>
                <p>test</p>
                {/* {this.state.weather ? this.state.weather:"null"} */}
            </div>
        
        );

    }

}

export default Weather;