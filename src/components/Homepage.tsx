import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function HomePage() {
  const formData = useSelector((state) => state.form);

  return (
    <div>
      <h1>Выберите форму</h1>
      <div className="wrapper">
        <Link to="/form-1">Form-1</Link>
        <Link to="/form-2">Form-2</Link>
      </div>
      <div className="form-show">
        {formData.form.firstName && (
          <span className="field">{formData.form.firstName}</span>
        )}
        {formData.form.age && (
          <span className="field">{formData.form.age}</span>
        )}
        {formData.form.email && (
          <span className="field">{formData.form.email}</span>
        )}
      </div>
    </div>
  );
}
