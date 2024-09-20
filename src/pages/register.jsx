import {Card} from '../components/heroCard'
import {useState} from 'react'
import axios from 'axios'
import Captcha from '../components/captcha'
import BottomWarning from '../components/BottomWarning'


export function Register(){

    console.log("re renders")

    
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cnfpasswd,setCnfpasswd] = useState('');

    const [captchaValue,setcaptchaValue] = useState(null);

    const isformFilled = usememo(()=>{
        return fname && lname && email && password && cnfpasswd
    },[cnfpasswd])

     const onCaptchaChange = (token)=>{
        setcaptchaValue(token)
        console.log(token)
    }

    const doPassMatch = (password,cnfpasswd)=>{
        return password === cnfpasswd
    }

    const isFormValid = ()=>{
        return isformFilled && captchaValue!=null && doPassMatch
    }



    const registerUser = (event)=>{
        event.preventDefault()
        axios.post("http://localhost:3000/register",
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
                    focus:border-b-blue-800` 
    
    return(
    <>
        <Card>
            <div className='flex flex-col justify-center items-center p-3 h-full space-y-5 w-full relative'>
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

                <button 
                type = 'submit'
                disabled = {!isformFilled()}
                className={`rounded-md font-mono text-sm h-10 w-1/4 p-2 bg-blue-800 hover:bg-[#4C9F70] text-white
                    shadow-lg shadow-blue-800 translate-y-5 transform-transition-all duration-300 
                    easy-in-out hover:translate-y-1 active:bg-[#40875f]
                    ${!isFormValid() ? 'opacity-50 cursor-not-allowed ' : ''} `} 
                    
                    >
                    Register
                </button>
            </form>

            <Captcha onVerify = {onCaptchaChange}>
            </Captcha>

            <BottomWarning label = "Already have an account?" linkText = "Login" to = "/login"></BottomWarning>
            </div>
        </Card>

    </>
    )
}

