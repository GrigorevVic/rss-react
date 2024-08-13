import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
    <h1>Выберите форму</h1>
      <div className="wrapper">
        <Link to="/form-1">Form-1</Link>
        <Link to="/form-2">Form-2</Link>
      </div>
    </div>
  );
}
