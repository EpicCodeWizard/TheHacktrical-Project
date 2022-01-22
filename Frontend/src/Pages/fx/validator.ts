import {isEmail, isNotEmpty} from 'class-validator'

export function SigninValidator() {

}

export function CreateUserValidator(email: string, password: string, name: string) {
    let data: string[] = [email, password, name]
    data.forEach(item => {
        if(!(isNotEmpty(item))) {
            return `${item} is not provided`
        }
    })

    if(!(isEmail(email))) {
        return `Email ${email} is not a valid email`
    }
}