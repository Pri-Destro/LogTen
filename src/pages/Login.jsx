import {useState} from 'react'
import {Card} from '../components/heroCard'
import Captcha from '../components/captcha'
import BottomWarning from '../components/BottomWarning'
import PageLayout from '../components/PageLayout'
import axios from 'axios'
import FormButton from '../components/FormButton'


export function Login(){

    console.log("re renders")
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [showPass, setShowPass] = useState(false)
    
    const inputStyle = "rounded h-full w-full font-mono text-sm p-2.5 outline-none border-2 border-transparent transition-all ease-linear duration-300 focus:border-b-blue-800"




    const isformFilled = ()=>{
        return email && password
    }

    const isFormValid = ()=>{
        return isformFilled()
    }

    const toggleShowPass = ()=>{
        setShowPass(!showPass)
    }
    

    const loginUser = (event)=>{
        event.preventDefault()
        axios.post("http://localhost:3000/api/v1/login",
        {   
            email,
            password
        },{
            headers : {
                'Content-Type' : 'application/json',
                'Captcha-Token' : captchaValue
            }
        })
        .then(() => console.log("promise resolved data sent"))
        .catch((error) => console.log(error + ' server not responded'))

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
                
            <FormButton label = "Login" fnName = {isFormValid()}></FormButton>
                
            </form>

            <BottomWarning label = "Don't have an account ? " linkText = "Register" to = "/register"></BottomWarning>
            </div>

        </Card>

    </div>
    </PageLayout>
    </>
    )
}

