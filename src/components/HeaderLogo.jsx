import {Link} from 'react-router-dom'


export default function HeaderLogo(){
    return <div className= 'absolute flex justify-start items-center z-10 '>
        <Link to = "/" className='cursor-pointer'>
        <img src="/logo.png" className='h-28 pl-5'></img>
        </Link>
        
    </div>
}