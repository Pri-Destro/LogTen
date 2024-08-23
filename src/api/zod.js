const zod = require('zod')

const nameSchema = zod.string();
const emailSchema = zod.string().email();
const pwdSchema = zod.string().min(8);


export function SchemaCheck(name, email, password){
    const nameRes = nameSchema.safeParse();
    const emailRes = emailSchema.safeParse();
    const pwdRes = pwdSchema.safeParse();
}
