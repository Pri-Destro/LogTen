import {Link} from 'react-router-dom'

export default function Button({label,onClick,to}){

    return (

    <Link to = {to }> 
    <div
         
    className="bg-slate-700 text-white text-xl rounded-xl animate-bounce cursor-pointer font-mono p-4 w-46 action:bg-slate-500"
    >
        {label}

    </div>

    </Link>
)}