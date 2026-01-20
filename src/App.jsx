import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [length, setLength] = useState(10) 
 const [numAllowed, setNumAllowed] = useState(false)
 const [charAllowed, setCharAllowed] = useState(false)
 const [password, setPassword] = useState('')

 const passwordGenerator = useCallback(()=>{
  let pass=''
  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(numAllowed){
    str+='0123456789'
  }
  if(charAllowed){
    str+='!@#$%^&*()_+~`|}{[]:;?><,./-='
  }
 }
  ,[numAllowed,charAllowed,length,setPassword])
  return (
    <>
     <h1 className='text-4xl text-center text-white'>password generator</h1>
    </>
  )
}

export default App
