const axios = require('axios');

const verifyCaptcha = async (req,res,next) => {
  try {
    
    const token = req.headers['Captcha-Token']

    if(!token) {
      return res.status(400).json({
        message : 'Captcha token is missing'
      })
    }
    const secretKey = process.env.CAPTCHA_SECRET_KEY
    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
      params: {
        secret: secretKey,
        response: token
      }
    });

    if (!response.data.success) {
      return res.status(400).json({
        message : 'Captcha Authentication Failed'
      })}

      next()
    
    }catch (error) {
    console.error('Error verifying CAPTCHA:', error);
    return false;
  }
};

module.exports = {verifyCaptcha}