import * as yup from "yup";

export const schema = yup.object({
  firstName: yup
    .string()
    .required("Введите имя")
    .matches(/[A-Z]{1}[a-z]{1,23}/, "Invalid format, example: John"),
  age: yup
    .string()
    .required("Введите возраст")
    .matches(/[^-?][0-1]{1}[0-9]{0,2}/, "Invalid format, example: 10"),
  email: yup.string().required("Введите почту").email("Invalid email"),
  gender: yup.string().required(),
});

export type FormFieldsElement = {
  firstName: HTMLInputElement;
  age: HTMLInputElement;
  email: HTMLInputElement;
  gender: HTMLInputElement;
};

export type DataFormFields = {
  firstName: string;
  age: string;
  email: string;
  gender: string;
};

