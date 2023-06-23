
import './App.css';
import Display from './components/Display';
import Customer from './components/Customer';
import InteractiveGrid from './components/InteractiveGrid';

const customer = {
  'name': '홍길동',
  'birthday': '9612223',
  'gender': '남자',
  'job': '대학생'
}


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
    "duration" : 1000
},
 ]

 

function App(){
  return (
    <div className="gray-backgroud">
      <InteractiveGrid />
       {layouts.map((v) => <Display key={v.id} layout={v} />)}
      <Customer name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job}/>
    </div>
  );
}

export default App;
