import { Data } from "@/types/usuarios";
import * as yup from 'yup';



const requiredString = yup
    .string().
    typeError("Debe ser un texto").
    required('Campo requerido');

const requiredNumber = yup.
    number().
    typeError("Debe ser un número")
    .required('Campo requerido');


export const createUserSchema = yup.object<Data>().shape   ({
    first_name: requiredString,
    last_name: requiredString,
    email: yup.string().email('Correo inválido').required('Campo requerido'),
    avatar: requiredString
})                          