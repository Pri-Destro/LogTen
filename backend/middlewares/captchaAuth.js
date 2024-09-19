const express = require("express")

const axios = require('axios');

const verifyCaptcha = async (token) => {
  try {
    
    const secretKey = process.env.CAPTCHA_SECRET_KEY
    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
      params: {
        secret: secretKey,
        response: token
      }
    });

    return response.data.success;
    }catch (error) {
    console.error('Error verifying CAPTCHA:', error);
    return false;
  }
};

module.exports = {verifyCaptcha}