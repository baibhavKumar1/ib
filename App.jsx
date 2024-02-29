import { useState } from "react"

function App() {
    const [name,setName]= useState();
    const [number,setNumber]= useState();
    const [date,setDate]= useState();
    const [cvv,setCvv]= useState();
    const [clicked,setClicked]= useState();

    return(
        <>
            <div className="flex border">
            
            <div className=" bg-rose-300 w-60 h-32" style={{ transform: (clicked == false) ? "rotateY(180deg)" : "rotateY(0deg)" }}>
            <div >
                <p>{number}</p>
                <p>{name}</p>
                <p>{date}</p>
            </div>
            <div>
                <p>{cvv}</p>
            </div> 
            </div>
            <div>
            <input onChange={(e)=>setNumber(e.target.value)} onClick={() => setClicked(true)} />
            <input onChange={(e)=>setName(e.target.value)} onClick={() => setClicked(true)} />
            <input onChange={(e)=>setDate(e.target.value)} onClick={() => setClicked(true)} />
            <input onChange={(e)=>setCvv(e.target.value)} onClick={() => setClicked(false)} />
            </div>
            </div>
        </>
    )

}

export default App
