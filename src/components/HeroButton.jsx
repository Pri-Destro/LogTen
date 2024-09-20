import {Link} from 'react-router-dom'

export default function Button({label,onClick,to}){

    return (

    <Link to = {to }> 
    <div
         
    className="flex justify-center items-center bg-slate-700 text-white text-lg rounded-xl animate-bounce cursor-pointer p-4 w-32 action:bg-text-slate-500"
    >
        {label}

    </div>

    </Link>
)}