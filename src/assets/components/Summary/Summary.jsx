import Coursename from "../Coursename/Coursename"

export default function Summary(data) {
    const {id,allname,totCount}=data
    console.log(totCount)
  return (
    <div className="w-1/3 mx-5 p-5 bg-white rounded-lg text-left">
        <h1 className="text-xl font-semibold pb-2 text-blue-300">Credit Hour Remaining {data.allhour} hr</h1>
        <hr/>
        <h1 className="text-xl font-bold py-2 text-[#1C1B1B]">Course Name</h1>
        <hr/>
            {
                allname.map((name,idx)=>{
                    {console.log(name,idx)}
                    return(
                        <Coursename key={id} idx={idx} name={name}/>
                        
                       
                    )
                })
            }
        <hr/>
        <h1 className="py-2 font-semibold opacity-80">Total Credit Hour {data.allhour}</h1>
        <hr/>
        <h4 className="py-2 font-semibold opacity-80">Total Price :{data.allprice} USD</h4>
    </div>
  )
}
