import "./styles/App.scss";
import { getData } from "./services/getDataService";
import { useEffect, useState } from "react";
import { Levels } from "./interfaces/levels";
import Field from "./field";

function App() {
  const [levels, setLevels] = useState<Levels[]>([]);
  const [size, setSize] = useState(5);

  // * load data from api
  useEffect(() => {
    const getDataFromApi = async () => {
      try {
        const result = await getData();
        setLevels(result);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getDataFromApi();
  }, []);

  return (
    <div className="App">
      <header className="App_header">
        {levels.map((item, index) => (
          <button
            key={index}
            className="App_header_btn"
            onClick={() => {
              setSize(item.field);
            }}
          >
            <div>{item.name}</div>
            <div>{item.field}</div>
          </button>
        ))}
      </header>
      <Field size={size}></Field>
    </div>
  );
}

export default App;
