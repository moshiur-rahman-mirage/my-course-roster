
import { useState } from 'react';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Summary from './assets/components/Summary/Summary';
import Cards from './assets/components/cards/Cards';
// toast.configure()s
function App() {

  function showToast() {
    toast.warning('This item is already added!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,
    });
    console.log('hello')
  }

  const [allname,setName]=useState([])
  const [allprice,setPrice]=useState(0)
  const [allhour,setHour]=useState(0)
  const [totCount,setCount]=useState(0)
  const handleButtonClicked=(id,name,price,hour)=>{
    if (allname.includes(name)){
      showToast()
       
    }else{
    const newName=[...allname,name]
    setName(newName);
    const newPrice=allprice+price;
    setPrice(newPrice)
    const newHour=allhour+hour;
    setHour(newHour)
    const newCount=totCount+1;
    setCount(newCount)
    }

  }

  // console.log(allname,allhour,allprice,totCount)

  return (
    <>  
    
      <h1 className='text-center text-4xl font-bold py-5'>Course Regestration</h1>
      
      <div className='flex p-10'>
      <Cards handleButtonClicked={handleButtonClicked} allhour={allhour} allname={allname}/>
      <Summary allname={allname} allhour={allhour} allprice={allprice} totCount={totCount}/>
      <ToastContainer/>
      </div>
    </>
  )
}

export default App
