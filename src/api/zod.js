const zod = require('zod')

const nameSchema = zod.string();
const emailSchema = zod.string().email();
const pwdSchema = zod.string().min(8);


export function SchemaCheck(fname,lname, email, password){
    const fnameRes = nameSchema.safeParse(fname);
    const lnameRes = nameSchema.safeParse(lname);
    const emailRes = emailSchema.safeParse(email);
    const pwdRes = pwdSchema.safeParse(password);

    // if (nameRes.success){
        
    // }
}
