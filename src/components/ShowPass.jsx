import { useState } from "react"

export default function ShowPass(){

    const [showPass, setshowPass] = useState(false)

    const toggleShowPass = ()=>{
        setshowPass(!showPass)
    }

    return <>

    <div className = "absolute ">
        <button onClick={toggleShowPass}>
            ? <svg href="./eyeClose.svg"></svg> : <svg href="./eyeOpen.svg"></svg></button>
        
    </div>
    
    </>
}