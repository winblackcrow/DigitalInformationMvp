import React from "react";

class Customer extends React.Component{
    constructor(props){
        super(props);
        const state={

        }
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