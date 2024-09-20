import TypingAnimation from "../components/TypeAnimation"
import Button from "../components/HeroButton"
import {Link} from 'react'

export function Home(){


    return <div className="bg-black h-screen">
        <div className = "h-1/2 p-6 pt-1.5">
            <TypingAnimation  
            text = {` "HELLO! IS ANYBODY IN THERE ?" `}
            speed = "100"/>

        </div>
        <div className="flex items-center justify-center">
            <Button className = "animate-bounce " label = "Get Started" to = "/register"> </Button>
        </div>

    </div>
}