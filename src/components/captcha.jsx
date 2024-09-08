import ReCAPTCHA from 'react-google-recaptcha'
import {useState} from 'react'

export default function Captcha({captchaFilled}){

    const [captcha,setCaptcha] = useState(null)

    const sitekey = "6LfVhzUqAAAAAPRI20zRVXLP3EkAS6ZssEyBUzYg"

    const captchaChange = (value)=>{
        setCaptcha(value)
        console.log(value)

    }

    return(
    <>
        <ReCAPTCHA 
        sitekey={sitekey}
        onchange={captchaChange}/>
    </>

    )   
}