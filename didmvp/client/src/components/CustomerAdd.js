import React from 'react';
import axios from 'axios';


class CustomerAdd extends React.Component{


    constructor(props){
        super(props);
        this.state ={
            file : null,
            userName:'',
            birthday: '', 
            gender: '',
            job: '',
            fileName: ''
        }
    }

    addCustomer = () => {
        const url = "http://localhost:5000/api/customers";
        const formData = new FormData();
        console.log('add file : '+ this.state.file);
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);

        const config = {
            headers:{
                'Content-Type' : 'multipart/form-data'
            }
        }
        
        return axios.post(url, formData, config);
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
        .then(res => console.log(res))

        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        })
        
        window.location.reload();
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render(){
        return(
            <form onSubmit ={this.handleFormSubmit}>
                <h1>고객추가</h1>
                프로필 이미지 : <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/> 
                이름 : <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/> 
                생년월일 : <input type ="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/> 
                성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                <button type="submit">추가하기</button>
            </form>
        )

    }
}

export default CustomerAdd;