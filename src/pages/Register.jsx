import {Card} from '../components/heroCard'
import {useState,useMemo} from 'react'
import axios from 'axios'
import Captcha from '../components/captcha'
import BottomWarning from '../components/BottomWarning'
import PageLayout from '../components/PageLayout'
import FormButton from '../components/FormButton'

export function Register(){

    console.log("re renders")

    
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cnfpasswd,setCnfpasswd] = useState('');

    const [captchaValue,setcaptchaValue] = useState(null);

    const isformFilled = ()=>{
        return fname && lname && email && password && cnfpasswd
    }

    console.log(isformFilled())

     const onCaptchaChange = (token)=>{
        setcaptchaValue(token)
        console.log(token)
    }

    const doPassMatch = (cnfpasswd)=>{
        
        return password == cnfpasswd
    }

    const isFormValid = ()=>{
        return isformFilled && captchaValue!=null && doPassMatch(password,cnfpasswd)
    }



    const registerUser = (event)=>{
        event.preventDefault()
        axios.post("http://localhost:3000/api/v1/register",
        {   
            fname,
            lname,
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
    
    const inputStyle = `rounded h-full w-full font-mono text-sm p-2.5 outline-none border-2 border-transparent transition-all ease-linear duration-300 
                    focus:border-blue-800` 
    
    return(
    <>
    <PageLayout>
    <div className='bg-[#0b0a2a] flex justify-center items-center h-screen'>

        <Card>
            <div className='flex flex-col justify-center items-center h-full space-y-5 w-full relative'>
            <form onSubmit={registerUser} className='flex flex-col items-center space-y-4 p-3 w-full' >

                <input 
                placeholder='First Name'
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className={inputStyle}
                />

                <input 
                placeholder='Last Name'
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                className={inputStyle}
                />

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

                <input 
                placeholder='Confirm Password'
                value={cnfpasswd}
                onChange={(e) => setCnfpasswd(e.target.value)}
                className={inputStyle}
                />

            {!doPassMatch(cnfpasswd) && (
              <span className="text-[#A72608] border-solid border-red-100 text-md font-bold">Passwords do not match!</span>
            )}

            <FormButton label = "Register" fnName = {isFormValid()}></FormButton>

            </form>


            <BottomWarning label = "Already have an account?" linkText = "Login" to = "/login"></BottomWarning>
            <Captcha onVerify = {onCaptchaChange}>
            </Captcha>
            </div>
        </Card>

    </div>
    </PageLayout>
    </>
    )
}

