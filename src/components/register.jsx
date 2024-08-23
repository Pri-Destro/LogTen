import {Card} from './heroCard'


export function Register(){
    
    const fields = ["First Name", "Last Name", "Email id", "Password", "Confirm Password"]

    return(
    <>
            <Card>
                <div className='flex justify-center flex-col items-center space-y-4 p-3 h-full '>

                {fields.map((field,index) => <input 

                key = {index}
                placeholder={field} 
                className = "rounded h-1/2 w-3/4 size-1 font-mono text-sm pl-2 focus:outline-none">

                </input>)} 
                </div>
            </Card>
            <button onClick={createAcc} className=''> Register </button>

    </>
    )
}

function createAcc(props){

}
