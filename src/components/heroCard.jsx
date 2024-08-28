export function Card({children}){
    return(
    <div className="flex justify-center items-center h-screen" >
        <div className="border-solid border-4 border-indigo-500 w-1/2 h-1/2 rounded-lg p-3 shadow shadow-emerald-40 relative">
        {children}
        </div>
    </div>
    )
}