
import './App.css';
import Display from './components/Display';
import Customer from './components/Customer';
import InteractiveGrid from './components/InteractiveGrid';
import { useEffect, useState } from 'react';
import Weather from './components/Weather';

 const layouts = [
   {
    "id": 1,
    "name" : "Layout-1",        
    "animation" : "fade",  
    "interval": 10000,
    "duration" : 1000
  },
  {
    "id": 2,
    "name" : "Layout-2",        
    "animation" : "slide",  
    "interval": 10000,
    "duration" : 500
  },
 ]

 const callApi = async () => {
  const response = await fetch('http://localhost:5000/api/customers');
  const body = await response.json();
  // console.log(body);
  return body;
}



function App(){

  const [customer, setCustomer] = useState([]); // json 배열 선언시 useState는 정확히 선언해줘야 한다. 
  // const [completed, setCompleted] = useState(0);

  
  useEffect(() =>{
    async function call(){
      const responses = await fetch("http://localhost:5000/api/customers");
      const body = await responses.json();
      console.log("body :" + body);
      
      setCustomer(body);
    }
    // call(); // async Function을 만들어주고 호출한다.
    callApi()
      .then(res => setCustomer(res))
      .catch(err => console.log(err));
      
  },[]);


  return (
    <div className="gray-backgroud">
      <Weather/>
      {layouts.map((v) => <Display key={v.id} layout={v} />)}
      <InteractiveGrid />
      {customer.map(c => {return (<Customer key={c.id} id={c.id} name ={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
    </div>
  );
}

export default App;
