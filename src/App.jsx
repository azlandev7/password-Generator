import { useCallback, useState,useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [length, setLength] = useState(10) 
 const [numAllowed, setNumAllowed] = useState(false)
 const [charAllowed, setCharAllowed] = useState(false)
 const [password, setPassword] = useState('')

 const passwordRef=useRef(null)

 const passwordGenerator = useCallback(()=>{
  let pass=''
  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(numAllowed){
    str+='0123456789'
  }
  if(charAllowed){
    str+='!@#$%^&*()_+~`|}{[]:;?><,./-='
  }
  for(let i=1;i<=length;i++){
    let char = Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }
  setPassword(pass)
 }
  ,[numAllowed,charAllowed,length,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])
  return (
    <>
     <div className="min-h-screen flex items-center justify-center 
bg-gradient-to-tr from-[#020617] via-[#020617] to-[#1e293b]">

  <div className="w-full max-w-sm rounded-xl bg-[#111827]/90 backdrop-blur shadow-2xl p-6">

    <h1 className="text-xl font-medium text-center text-white mb-5 tracking-wide">
      Password Generator
    </h1>

    <div className="flex items-center gap-2 bg-black/40 rounded-lg px-3 py-2 mb-4">
      <input
        readOnly
        ref={passwordRef}
        value={password}
        placeholder="Password"
        className="w-full bg-transparent text-white text-sm tracking-widest outline-none"
      />
      <button
      onClick={copyPasswordToClipboard} className="text-xs px-3 py-1 rounded-md bg-orange-500 hover:bg-orange-600 transition font-semibold text-black">
        Copy
      </button>
    </div>

    <div className="text-xs text-gray-300 space-y-3">
      <div className="flex justify-between">
        <span>Length</span>
        <span className="text-orange-400">{length}</span>
      </div>

      <input type="range" min="6" max="100" className="cursor-pointer w-full accent-orange-500"
      onChange={(e)=> {setLength(e.target.value)}} />

      <div className="flex justify-between">
        <label className="flex gap-2 items-center" htmlFor='numberInput'>
          <input type="checkbox" 
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={(e)=>{setNumAllowed((prev)=>!prev)}} className="accent-orange-500" />
          Numbers
        </label>

        <label className="flex gap-2 items-center" htmlFor='symbolInput'>
          <input type="checkbox" 
          defaultChecked={charAllowed}
          id="symbolInput"
          onChange={(e)=>{setCharAllowed((prev)=>!prev)}}  className="accent-orange-500" />
          Symbols
        </label>
      </div>
    </div>

    <button className="w-full mt-5 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 hover:brightness-110 transition font-semibold text-black">
      Generate
    </button>

  </div>
</div>
    
    </>
  )
}

export default App
