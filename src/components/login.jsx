import {Card} from './heroCard'
import {useState} from 'react'
import Captcha from './captcha'
import axios from 'axios'


export function Login(){

    console.log("re renders")

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');



    const isformFilled = ()=>{
        return email && password
    }

    

    const loginUser = (event)=>{
        event.preventDefault()
        axios.post("http://localhost:3000/login",
        {   
            email,
            password
        },{
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(() => console.log("promise resolved data sent"))
        .catch((error) => console.log(error + ' server not responded'))

    }


    const inputStyle = "rounded h-full w-full font-mono text-sm p-2.5 focus:outline-none shadow shadow-slate-400"
    
    return(
    <>
        <Card>
            <div className='flex justify-center items-center p-3 h-full  w-full relative'>
            <form onSubmit={loginUser} className='flex flex-col space-y-4 items-center p-3 w-full' >


                <input 
                placeholder='Email id'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputStyle}
                />

                <input 
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputStyle}
                />


                <button 
                type = 'submit'
                disabled = {!isformFilled()}
                className={`rounded-md font-mono text-sm h-10 w-1/4 p-2 bg-[#272932] hover:bg-[#4C9F70] text-white
                    shadow-lg shadow-blue-800 translate-y-5 transform-transition-all duration-300 
                    easy-in-out hover:-translate-y-0 active:bg-[#40875f]
                    ${!isformFilled() ? 'opacity-50 cursor-not-allowed ' : ''} `} 
                    
                    >
                    Login
                    </button>
                
            </form>
            <Captcha></Captcha>
            </div>
        </Card>

    </>
    )
}

