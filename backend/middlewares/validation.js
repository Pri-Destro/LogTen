const z = require('zod')


const signupValidation = (req,res,next) => { 

    const schema = z.object({
        fname: z.string().nonempty({ message: "First name is required" }),
        lname: z.string().nonempty({ message: "Last name is required" }),
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  });
    
    

    const schemaCheck = schema.safeParse(req.body);

    if(!schemaCheck.success){
        const errors = schemaCheck.error.errors.map(err => ({
            field: err.path[0],
            message: err.message,
        }));

        return res.json({errors})
    }

    next()
}


// const passwordSchema = z.string()
//   .min(12, "Password must be at least 12 characters long")
//   .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
//   .regex(/[a-z]/, "Password must contain at least one lowercase letter")
//   .regex(/[0-9]/, "Password must contain at least one number")
//   .regex(/[\W_]/, "Password must contain at least one special character")
//   .refine((password) => !/(password|1234|qwerty|letmein)/i.test(password), {
//     message: "Password should not be a common phrase or pattern",
//   });

module.exports = {
    signupValidation
}
