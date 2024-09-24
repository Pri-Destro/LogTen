import {Link} from 'react-router-dom'
export default function BottomWarning(props){

    return <div className='text-center pt-3 text-md text-[#272932]'>
        <div>
            {props.label}
        </div>
        <Link className = "underline cusor-pointer  " to = {props.to}>
            {props.linkText} 
        </Link>

    
    </div>
}