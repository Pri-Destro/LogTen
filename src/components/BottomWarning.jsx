import {Link} from 'react-router-dom'
export default function BottomWarning(props){

    return <div className='text-center pt-3 text-md font-mono font-bold text-black'>
        <div>
            {props.label}
        </div>
        <Link className = "underline cusor-pointer font-mono text-black" to = {props.to}>
            {props.linkText} 
        </Link>

    
    </div>
}