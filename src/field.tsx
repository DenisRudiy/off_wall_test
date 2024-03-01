import { hoverCell } from "./services/hoverCell";
import { colsGeneration, rowsGeneration } from "./services/tableGenerator";
import "./styles/field.scss";

const field = ({ size }: { size: number }) => {
  const indexRows = rowsGeneration(size);
  const indexCols = colsGeneration(size);

  return (
    <div className="Field_body">
      <div className="Field">
        {indexRows.map((row, indexR) => (
          <div key={indexR} className="Field_row" id={row.toString()}>
            {indexCols.map((col, indexC) => (
              <div
                key={indexC}
                className="Field_cell"
                id={col.toString()}
                onMouseEnter={(event) => {
                  hoverCell(event, row, col);
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="Field_logs">
        <div className="Field_logs_btn_section">
          <button className="Field_body_btn">Clear</button>
          <button className="Field_body_btn">Start</button>
        </div>
      </div>
    </div>
  );
};

export default field;
