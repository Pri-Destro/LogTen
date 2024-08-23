export function Card({children}){
    return(
    <div className="flex justify-center items-center h-screen" >
        <div className="bg-indigo-500 w-1/2 h-1/2 rounded-md p-3 shadow shadow-emerald-40">
        {children}
        </div>
    </div>
    )
}