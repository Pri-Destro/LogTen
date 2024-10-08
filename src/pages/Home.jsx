import TypingAnimation from "../components/TypeAnimation"
import Button from "../components/HeroButton"
import PageLayout from "../components/PageLayout"

export function Home(){

    return <div className="bg-black h-screen">
    <PageLayout/>
        <div className = "h-1/2 p-6 pt-1.5">
            <TypingAnimation  
            text = {` "Hello! Is Anybody In There?" `}
            speed = "100"/>

        </div>
        <div className="flex items-center justify-center">
            <Button label = "Get Started" to = "/register"> </Button>
        </div>

    </div>
}