import * as yup from 'yup'

const regex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

export const schema = yup.object().shape({
    email: yup.string().email().required(),
    age: yup.number().min(18).max(100).integer().required(),
    password: yup.string().min(5, 'Şifrede en az 5 karakter olmalı').matches(regex, 'Şifreniz en az beş karakterden oluşmalı ve  en az bir büyük harf, bir küçük harf, bir rakam ve bir özel işaret içermelidir').required('Zorunlu alan'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Onay şifreniz yanlış').required('Zorunlu alan')
})