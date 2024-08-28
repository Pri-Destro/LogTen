import {Card} from './heroCard'
import {useState} from 'react'
import axios from 'axios'


export function Register(){

    console.log("re renders")

    
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cnfpasswd,setCnfpasswd] = useState('');

    const isformFilled = ()=>{
        return fname && lname && email && password && cnfpasswd
    }

    

    

    const registerUser = (event)=>{
        event.preventDefault()
        axios.post("http://localhost:3000/register",
            {   fname,
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
    
    
    const inputStyle = "rounded h-1/2 w-3/4 size-1 font-mono text-sm pl-2 focus:outline-none hover:shadow"
    
    return(
    <>
        <Card>
            <form onSubmit={registerUser}>
            <div className='flex justify-center flex-col items-center space-y-4 p-3 h-full '>

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

            </div>
            
            <button 
            type = 'submit' 
            disabled = {!isformFilled()}
            className={`rounded-md font-mono text-sm h-10 w-15 p-2 absolute bg-[#D64045] bottom-0.5 left-0.5
                        hover:: border-b-lime-600 
                    ${!isformFilled() ? 'opacity-70 cursor-not-allowed' : ''} `} 
                    >
                    Register
            </button>

            </form>
        </Card>

    </>
    )
}

