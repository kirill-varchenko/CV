import { useEffect, useState } from "react";
import "./App.css";
import CV from "./components/CV";

function App() {
  const [cvData, setCVData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/kirill-varchenko/CV/main/cv-data.json"
      );
      const data = await response.json();
      setCVData(data);
    })();
  }, []);

  const photo = "https://github.com/kirill-varchenko/CV/raw/main/photo.jpg";
  
  return (
    <div className="App">
      {Object.keys(cvData).length && <CV photo={photo} data={cvData} />}
    </div>
  );
}

export default App;
