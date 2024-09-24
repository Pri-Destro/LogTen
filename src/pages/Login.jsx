import {useState} from 'react'
import {Card} from '../components/heroCard'
import Captcha from '../components/captcha'
import BottomWarning from '../components/BottomWarning'
import PageLayout from '../components/PageLayout'
import axios from 'axios'


export function Login(){

    console.log("re renders")
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [captchaValue,setcaptchaValue] = useState(null);
    
    const inputStyle = "rounded h-full w-full font-mono text-sm p-2.5 outline-none border-2 border-transparent transition-all ease-linear duration-300 focus:border-b-blue-800"


    const onCaptchaChange = (token)=>{
        setcaptchaValue(token)
        console.log(token)
    }

    const isformFilled = ()=>{
        return email && password
    }

    const isFormValid = ()=>{
        return isformFilled && captchaValue!=null
    }

    

    const loginUser = (event)=>{
        event.preventDefault()
        axios.post("http://localhost:3000/api/v1/login",
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



    const captchaAuth = ()=>{
        axios.post("http://localhost:3000/register/")
    }

    
    return(
        <>
        <PageLayout>

    <div className='bg-[#0b0a2a] flex justify-center items-center h-screen'>
        <Card>
            <div className='flex flex-col justify-center items-center p-3 h-full space-y-5 w-full relative'>
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


            <Captcha onVerify = {onCaptchaChange}/>
            <button 
                type = 'submit'
                disabled = {!isformFilled()}
                className={`rounded-md font-mono text-sm h-10 w-1/4 p-2 bg-[#272932] hover:bg-[#4C9F70] text-white
                    shadow-lg shadow-blue-800 translate-y-5 transform-transition-all duration-300 
                    easy-in-out hover:-translate-y-0 active:bg-[#40875f]
                    ${!isFormValid() ? 'opacity-50 cursor-not-allowed ' : ''} `} 
                    
                    >
                    Login
                    </button>
                
            </form>

            <BottomWarning label = "Don't have an account ? " linkText = "Register" to = "/register"></BottomWarning>
            </div>

        </Card>

    </div>
    </PageLayout>
    </>
    )
}

