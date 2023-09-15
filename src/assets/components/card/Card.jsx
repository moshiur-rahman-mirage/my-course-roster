
import { useState } from 'react';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBookOpen, FaDollarSign } from 'react-icons/fa6'
export default function Card({ course,handleButtonClicked,allhour,allname}) {
    const { image, id, name, description, price, hour } = course
    
    function showToast() {
        toast.error('Credit Hour can not be more than 20!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
        });
      }
    
    const passWithParam=()=>{

        if (hour+allhour<=20){
        handleButtonClicked(id,name,price,hour);
        }else{
            showToast();
        }
    }
    
    return (
        <>
            <div className="bg-white rounded-lg p-5">
                <div className=" pb-2 my-2">
                    <img src={image} className="pb-2"></img>
                    <h2 className="text-xl font-bold text-left [#1C1B1B]">{name}</h2>
                    <p className=" text-[#1C1B1B] opacity-60 pb-2">{description}</p>
                    <div className='flex items-center justify-between pb-2'>
                        <div className='flex items-center text-[#1C1B1B] opacity-60 '>
                            <FaDollarSign/>   Price :{price}
                        </div>
                        <div className='flex items-center text-[#1C1B1B] opacity-60 '>
                            <FaBookOpen/>
                            <p className='pl-2'>    Credit :</p>{hour} hr
                        </div>
                    </div>
                    <button onClick={passWithParam} className='w-full bg-blue-500 text-white rounded-md h-9'>Select</button>
                    <ToastContainer/>
                </div>
            </div>
        </>
    )
}
