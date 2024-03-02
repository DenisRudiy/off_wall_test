import React, { useEffect, useState } from "react";
import { hoverCell } from "./services/hoverCell";
import { colsGeneration, rowsGeneration } from "./services/tableGenerator";
import "./styles/field.scss";
import { clearService } from "./services/clearService";
import { changeSize } from "./services/changeSize";

const Field = ({ size }: { size: number }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [game, setGame] = useState(false);
  const indexRows = rowsGeneration(size);
  const indexCols = colsGeneration(size);

  function clearAll() {
    setLogs([]);
    clearService();
  }

  useEffect(() => {
    if (game === true) {
      changeSize(size);
    }
  }, [game, size]);

  useEffect(() => {
    setGame(false);
    clearAll();
  }, [size]);

  return (
    <div className="Field_body">
      <div className="Field">
        {game &&
          indexRows.map((row, indexR) => (
            <div key={indexR} className="Field_row" id={row.toString()}>
              {indexCols.map((col, indexC) => (
                <div
                  key={indexC}
                  className="Field_cell"
                  id={col.toString()}
                  onMouseEnter={(event) => {
                    let log = hoverCell(event, row, col);
                    setLogs((prevLogs) => [...prevLogs, log]);
                  }}
                ></div>
              ))}
            </div>
          ))}
      </div>
      <div className="Field_logs">
        <div className="Field_logs_btn_section">
          <button
            className="Field_body_btn"
            onClick={() => {
              setGame(true);
            }}
          >
            Start
          </button>
          <button className="Field_body_btn" onClick={clearAll}>
            Clear
          </button>
        </div>
        <div className="Field_logs_info">
          {logs.map((log, index) => (
            <div className="Field_log_item" key={index}>
              <p>{log}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Field;
