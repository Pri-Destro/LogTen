import HeaderLogo from "./HeaderLogo"

export default function PageLayout({children}){

    return <div className=" bg-transparent">
        <HeaderLogo></HeaderLogo>
        <div>
            {children}
        </div>
    </div>


}