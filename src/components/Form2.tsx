import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function Form2() {
    const schema = yup.object({
        firstName: yup
          .string()
          .required("Введите имя")
          .matches(/[A-Z]{1}[a-z]{1,23}/, "Invalid format, example: John"),
        age: yup
          .string()
          .required("Введите возраст")
          .matches(/[^-?][0-1]{1}[0-9]{0,2}/, "Invalid format, example: 10"),
        email: yup.string().required("Введите почту").email("Invalid email"),
      });
    const {
        register,
        formState: { errors, isValid },
        reset,
        handleSubmit,
      } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });
    
      const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        reset();
      };
  
  return (
    <div>
        <h1>FORM - 2</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <label>
      First Name
      <input {...register("firstName")} />
    </label>
    <p>{errors.firstName?.message}</p>
    <label>
      Age
      <input {...register("age")} />
    </label>
    <p>{errors.age?.message}</p>
    <label>
      Email
      <input {...register("email")} />
    </label>
    <p>{errors.email?.message}</p>
    <input type="submit" disabled={!isValid}/>
  </form>
  </div>
  )
}
