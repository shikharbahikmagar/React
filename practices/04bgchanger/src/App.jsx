import { useState } from 'react'
let bgcol
function App() {

  const [colour, SetColor] = useState("white")

  if(colour === "white" || colour === "yellow")
  {
    bgcol = "black"
  }else
  {
    bgcol = "white"
   
  }
  
  console.log(bgcol);
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: colour}}
    >
      <div id='display' className='fixed flex flex-wrap justify-center text-3xl inset-x-0 mt-6'
      style={{color: bgcol}}>
      
        Current color : {colour.charAt(0).toUpperCase()+colour.slice(1)}
        
        
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <button
          onClick={()=> SetColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "red"}}>
              Red
          </button>

          <button
            onClick={() => SetColor("pink")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "pink" }}>
            Pink
          </button>

          <button
            onClick={() => SetColor("green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "green" }}>
            Green
          </button>
  
          <button
            onClick={() => SetColor("purple")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "purple" }}>
            Purple
          </button>

          <button
            onClick={() => SetColor("gray")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "gray" }}>
            Gray
          </button>

          <button
            onClick={() => SetColor("yellow")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "yellow" }}>
            Yellow
          </button>

          <button
            onClick={() => SetColor("orange")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "orange" }}>
            Orange
          </button>

          <button
            onClick={() => SetColor("black")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "black" }}>
            Black
          </button>

          <button
            onClick={() => SetColor("navy")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "navy" }}>
            Navy
          </button>

          <button
            onClick={() => SetColor("white")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "white" }}>
            White
          </button>


        </div>
      </div>
    </div>
  )
}

export default App
