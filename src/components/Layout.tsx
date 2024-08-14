import { Link, Outlet } from "react-router-dom";
import { useRef, useState } from "react";

export function Layout() {
  const filePicker = useRef(null);
  const [uploadFile, setUploadFile] = useState(null);

  const handleChange = (event) => {
    setUploadFile(event.target.files[0])
  };

  const handleUpload = () => {
    if (filePicker.current) {
      const element = filePicker.current as HTMLInputElement ;
      element.click();
    }
  };
  console.log(uploadFile);
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <button onClick={handleUpload}>Upload Image</button>
        <input
          className="hidden"
          ref={filePicker}
          type="file" 
          onChange={handleChange}
          accept=".png, jpeg, jpg"
        />
      </header>
      {
        uploadFile && <div>
          <img alt="pic" src={uploadFile.name} width="200px"/>
        </div>
      }
      <Outlet />
    </div>
  );
}
