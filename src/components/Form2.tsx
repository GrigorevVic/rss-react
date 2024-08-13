
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormFields = {
  email: HTMLInputElement;
  password: HTMLInputElement;
  remember: HTMLInputElement;
};

type LoginFormFields = {
  email: string;
  password: string;
  remember: boolean;
};

export function Form2() {

  const schema = yup.object().shape({
    email: yup
      .string()
      .email({ email: "некорректный емайл" })
      .required("This is required."),
    password: yup
      .string()
      .required("This is required.")
      .min(5, { password: "пароль должен быть более 5" }),
  });

  const onSubmit = (data: LoginFormFields) => {
    try {
      const user = schema.validateSync(data, { abortEarly: false });
      console.log(user, "все заябись");
    } catch (e) {
      console.log(e.value, "*** ошибка  валидации", e.errors);
    }
  };

  const handlerSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (
    event
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { email, password, remember } = form;
    onSubmit({
      email: email.value,
      password: password.value,
      remember: remember.checked,
    });
    form.reset();
  };

  return (
    <div>
      <h1>FORM - 2</h1>
      <form onSubmit={handlerSubmit}>
        <label>
          email
          <input name="email" type="text" required />
        </label>
        <label>
          password
          <input name="password" type="password" required />
        </label>

        <label>
          remember me
          <input name="remember" type="checkbox" />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
