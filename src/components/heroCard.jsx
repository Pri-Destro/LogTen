export function Card({children}){
    return(
    <>
        <div className="bg-[#6279B8] w-1/4 h-auto rounded-xl p-4 shadow-lg shadow-slate-400 relative">
        {children}
        </div>
    </>
    )
}