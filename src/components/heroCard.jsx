export function Card({children}){
    return(
    <div className="bg-[#0b0a2a] flex justify-center items-center h-screen" >
        <div className="bg-[#6279B8] w-1/4 h-3/4 rounded-xl p-3 shadow-lg shadow-slate-400 relative">
        {children}
        </div>
    </div>
    )
}