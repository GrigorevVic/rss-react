import { schema, FormFieldsElement, DataFormFields } from "../util/const";
import { useDispatch } from "react-redux";
import { addDataForm } from "../store/slice";
import { useNavigate } from "react-router-dom";

export function Form2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addData = (data: DataFormFields) => {
    dispatch(addDataForm(data));
  };

  const onSubmit = (data: DataFormFields) => {
    try {
      const formData = schema.validateSync(data, { abortEarly: false });
      addData(formData);
      navigate("/", { replace: true });
    } catch (e: unknown) {
      console.log("*** ошибка  валидации", e.errors);
    }
  };

  const handlerSubmit: React.FormEventHandler<
    HTMLFormElement & FormFieldsElement
  > = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { firstName, age, email, gender } = form;
    onSubmit({
      firstName: firstName.value,
      age: age.value,
      email: email.value,
      gender: gender.value,
    });
    form.reset();
  };

  return (
    <div>
      <h1>FORM - 2</h1>
      <form className="form" onSubmit={handlerSubmit}>
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
          <input name="email" type="email" required />
        </label>
        <div className="gender">
          <label>
            <input name="gender" type="radio" value="male" required/>
            Male
          </label>

          <label>
            <input name="gender" type="radio" value="female" />
            Female
          </label>
        </div>
        <label>
          accept Terms and Conditions
          <input name="accept" type="checkbox" required />
        </label>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
