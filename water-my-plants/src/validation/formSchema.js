import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup.string()
        .trim()
        .required('Username is required, please fill out.')
        .min(5, 'Username must be 5 characters long.'),
    phonemuber: yup.string()
        .phone('Must be a valid Phone number.')
        .required('Phone number is required.'),
    password: yup.string()
        .trim()
        .required('Password is required, please fill out.')
        .min(8, 'Password must be 8 characters long.'),
})

export default formSchema