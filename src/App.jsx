
import './App.css'
import Summary from './assets/components/Summary/Summary';
import Cards from './assets/components/cards/Cards';

function App() {


 

  return (
    <>  
    
      <h1 className='text-center text-4xl font-bold py-5'>Course Regestration</h1>
      
      <div className='flex p-10'>
      <Cards/>
      <Summary/>
      </div>
    </>
  )
}

export default App
