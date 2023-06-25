import React from "react";

class Customer extends React.Component{
    constructor(props){
        super(props);
        const state={
            customers:""
        }
    }

    componentDidMount(){
        this.callApi
            .then(res => this.setState({customers : res}))
            .catch(err => console.log(err));

    }

    callApi = async() =>{

        const url = '/api/customers';

        const response = await fetch(url);
        const body  = await response.json();
        return body;
    }

    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.jop}</p>
            </div>
        );
    }
}

export default Customer;