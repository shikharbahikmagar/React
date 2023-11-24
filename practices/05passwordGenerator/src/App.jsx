import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, SetLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  
  const [charAllowed, setCharAllowed] = useState(false)

  const [password, setPassword] = useState("")
  //useRef hook
  const passwordRef = useRef(null)

  //password genereator method to generator random password using characters inside str variable
  const passwordGenerator = useCallback(() =>
  {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "1234567890"
    if(charAllowed) str += "!@#$%^&*_+{}[]'"

    //loop to generate password
    for(let i=1; i<= length; i++)
    {
      let char = Math.floor(Math.random() * str.length * 1)
        pass += str.charAt(char);
    }

    //set generated password to state(hook)
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPassword = useCallback(() => {

    passwordRef.current?.select();

    //select data in range 
   // passwordRef.current?.setSelectionRange(0, 3)

    window.navigator.clipboard.writeText(password)

  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, passwordGenerator, numberAllowed, charAllowed])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-700'>
        <h1 className='text-white hover:text-sky-400 text-center my-5'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text" value={password} className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
            />
            <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
                SetLength(e.target.value)
            }}
            
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput' 
             onChange={()=>{
                setNumberAllowed((prev) => !prev)
             }} 
            />
            <label htmlFor="">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
