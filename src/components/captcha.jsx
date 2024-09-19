import ReCAPTCHA from 'react-google-recaptcha'
import {useState} from 'react'

export default function Captcha({onVerify}){

    const sitekey = "6LfVhzUqAAAAAPRI20zRVXLP3EkAS6ZssEyBUzYg"
    const [captchaValue, setcaptchaValue] = useState(null)
    

    const captchaVerify = async function(value){

        setcaptchaValue(value)
        
        await onVerify(value)
    }

    return(
    <>
        <ReCAPTCHA 
        sitekey={sitekey}
        onChange={captchaVerify}/>
    </>

    )
}