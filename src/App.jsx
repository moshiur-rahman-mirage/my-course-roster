
import { useState } from 'react';
import './App.css'
import Summary from './assets/components/Summary/Summary';
import Cards from './assets/components/cards/Cards';

function App() {


  const [allname,setName]=useState([])
  const [allprice,setPrice]=useState(0)
  const [allhour,setHour]=useState(0)
  const handleButtonClicked=(id,name,price,hour)=>{
    const newName=[...allname,name]
    setName(newName);
    const newPrice=allprice+price;
    setPrice(newPrice)
    const newHour=allhour+hour;
    setHour(newHour)

  }

  console.log(allname,allhour,allprice)

  return (
    <>  
    
      <h1 className='text-center text-4xl font-bold py-5'>Course Regestration</h1>
      
      <div className='flex p-10'>
      <Cards handleButtonClicked={handleButtonClicked}/>
      <Summary allname={allname} allhour={allhour} allprice={allprice}/>
      </div>
    </>
  )
}

export default App
