import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { addDataForm } from "../store/slice";
import { useNavigate } from "react-router-dom";
import { schema } from '../util/const';

export function Form1() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addData = (data) => {
    dispatch(addDataForm(data));
  };

  const {
    register,
    formState: { errors, isValid },
    reset,
    handleSubmit,
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    addData(data);
    reset();
    navigate('/', {replace: true});
  };

  return (
    <div>
      <h1>FORM - 1</h1>
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
        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
}

