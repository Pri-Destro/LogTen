
export default function FormButton({label,fnName}){
return <>
    <button 
    type = 'submit'
    disabled = {fnName}
    className={`rounded-md font-pacifico text-md h-10 w-1/4 p-2 bg-[#272932] hover:bg-[#4C9F70] text-white
        shadow-lg shadow-blue-800 translate-y-5 transform-transition-all duration-300 
        easy-in-out hover:-translate-y-0 active:bg-[#40875f] active:animate-spin
        ${{fnName} ? 'opacity-50 cursor-not-allowed ' : ''} `} 
        
    >
    {label}
    </button>
</>
}