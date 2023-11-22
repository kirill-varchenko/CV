import { useEffect, useState } from "react";
import "./App.css";
import CV from "./components/CV";
import localData from "./cv-data.json";
import localImage from "./photo.jpg";

function App() {
  const [cvData, setCVData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/kirill-varchenko/CV/main/cv-data.json"
      );
      const data = await response.json();
      console.log(data);
      // setCVData(data);
      setCVData(localData);
    })();
  }, []);

  // const photo = "https://github.com/kirill-varchenko/CV/raw/main/photo.jpg";
  const photo = localImage;

  return (
    <div className="App">
      {Object.keys(cvData).length && <CV photo={photo} data={cvData} />}
    </div>
  );
}

export default App;
