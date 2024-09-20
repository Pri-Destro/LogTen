import {Link} from 'react-router-dom'
export default function BottomWarning(props){

    return <>
        <div>
            {props.label}
        </div>
        <Link className = "underline cusor-pointer" to = {props.to}>
            {props.linkText} 
        </Link>

    
    </>
}