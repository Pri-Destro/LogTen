export function InfoCard({heading,body}){
    return(
    <>
        <div className="bg-[#CFE8EF] w-1/2 h-auto rounded-xl p-4 shadow-lg shadow-white text-center">
            <h1
            className="">{heading}</h1>
            <h3>
                {body}
            </h3>
        </div>
    </>
    )
}