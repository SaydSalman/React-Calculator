

import { useState } from 'react'
import './App.css'

function App() {
  const [value,setValue]=useState('')

  return (
   
     <div className='con  ' style={{width:'100%',height:'100vh'}}>
      <div className="row">
        <h1 className='text-center mt-5'>Simple Calculator</h1>
        <div className='col-md-12 d-flex justify-content-center align-items-center mt-5 '>
        <div className='calculator border border-2 border-warning  align-items-center' style={{width:'400px',height:'390px',background:'beige',boxShadow:'5px 5px 10px #efefef'}}>
        <input type="text" value={value} readOnly placeholder="0" style={{width: '100% ',height: '60px,',textAlign:'right',fontSize:'25px',border:'2px solid',background:'beige',borderRadius:'5px',borderColor:'darkorange'}}/>
        <div className="buttons ms-4 mt-3 me-3" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'10px'}}>
          <button value='7' onClick={e=>setValue(value+e.target.value)} className='btn btn-info' style={{width:'60px',height:'50px',padding:'10px'}}>7</button>
          <button value='8' onClick={e=>setValue(value+e.target.value)} className='btn btn-info' style={{width:'60px',height:'50px',padding:'10px'}}>8</button>
          <button value='9' onClick={e=>setValue(value+e.target.value)} className='btn btn-info' style={{width:'60px',height:'50px',padding:'10px'}}>9</button>
          <button value='delete' onClick={e=>setValue(value.slice(0,-1))} className='btn btn-info' style={{width:'60px',height:'50px',padding:'10px'}}>DEL</button>
          <button value='4' onClick={e=>setValue(value+e.target.value)} className='btn btn-info' style={{width:'60px',height:'50px',padding:'10px'}}>4</button>
          <button value='5' onClick={e=>setValue(value+e.target.value)} className='btn btn-info' style={{width:'60px',height:'50px',padding:'10px'}}>5</button>
          <button value='6' onClick={e=>setValue(value+e.target.value)} className='btn btn-info' style={{width:'60px',height:'50px',padding:'10px'}}>6</button>
          <button value='-' className='btn btn-info' style={{width:'60px',height:'50px',padding:'10px'}}>-</button>
          <button value='1' onClick={e=>setValue(value+e.target.value)} className='btn btn-info' style={{width:'60px',height:'50px',padding:'10px'}}>1</button>
          <button value='2' onClick={e=>setValue(value+e.target.value)} className='btn btn-info' style={{width:'60px',height:'50px',padding:'10px'}}>2</button>
          <button value='3' onClick={e=>setValue(value+e.target.value)} className='btn btn-info' style={{width:'60px',height:'50px',padding:'10px'}}>3</button>
          <button value='+' onClick={e=>setValue(value+e.target.value)} className='btn btn-info' style={{width:'60px',height:'50px',padding:'10px'}}>+</button>
          <button value='0' onClick={e=>setValue(value+e.target.value)} className='btn btn-info' style={{width:'60px',height:'50px',padding:'10px'}}>0</button>
          <button value='clr' onClick={e=>setValue("")}  className='btn btn-info' style={{width:'60px',height:'50px',padding:'10px'}}>clr</button>
          <button value='/' onClick={e=>setValue(value+e.target.value)} className='btn btn-info' style={{width:'60px',height:'50px',padding:'10px'}}>/</button>
          <button value='*' onClick={e=>setValue(value+e.target.value)} className='btn btn-info' style={{width:'60px',height:'50px',padding:'10px'}}>x</button>
          <button value='=' onClick={e=>setValue(eval(value))} className='btn btn-info' style={{width:'60px',height:'50px',padding:'10px'}}>=</button>
        </div>
        </div>
        </div>
      </div>
     </div>
    
  )
}

export default App
