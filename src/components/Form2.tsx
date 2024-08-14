import { schema } from '../util/const';
import { useDispatch } from "react-redux";
import { addDataForm } from "../store/slice";
import { useNavigate } from "react-router-dom";


type FormFields = {
  firstName: HTMLInputElement;
  age: HTMLInputElement;
  email: HTMLInputElement;
};

type LoginFormFields = {
  firstName: string;
  age: string;
  email: string;
};

export function Form2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addData = (data) => {
    dispatch(addDataForm(data));
  };


  const onSubmit = (data: LoginFormFields) => {
    try {
      const formData = schema.validateSync(data, { abortEarly: false });
      addData(formData);
      navigate('/', {replace: true});
    } catch (e) {
      console.log(e.value, "*** ошибка  валидации", e.errors);
    }
  };
    

  const handlerSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (
    event
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { firstName, age, email } = form;
    onSubmit({
      firstName: firstName.value,
      age: age.value,
      email: email.value,
    });
    form.reset();
  };

  return (
    <div>
      <h1>FORM - 2</h1>
      <form onSubmit={handlerSubmit}>
        <label>
        First Name
          <input name="firstName" type="text" required />
        </label>
        <label>
          Age
          <input name="age" type="test" required />
        </label>

        <label>
          Email
          <input name="email" type="email" required/>
        </label>

        <input type="submit" />
      </form>
    </div>
  );
}
