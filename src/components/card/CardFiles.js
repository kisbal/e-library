import React from "react";
import xls from "../../assets/xls.png";

function CardFiles() {
  const cardFile = [
    {
      nameFile: "Data Entry.xls",
      date: "12/10/2023",
      size: 4.21,
    },
    {
      nameFile: "Data Entry",
      date: "12/10/2023",
      size: 4.21,
    },
    {
      nameFile: "Data Entry",
      date: "12/10/2023",
      size: 4.21,
    },
    {
      nameFile: "Data Entry",
      date: "12/10/2023",
      size: 4.21,
    },
    {
      nameFile: "Data Entry",
      date: "12/10/2023",
      size: 4.21,
    },
  ];
  return (
    <>
      {cardFile.map((cardDataFile,i) => (
        <div className="col-md-3 mt-2 grid-margin stretch-card" key={i}>
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <img src={xls} width="120" />
              </div>
              <p className="text-center">
                <h4>
                  <strong>{cardDataFile.nameFile}</strong>
                </h4>
              </p>
            </div>
            <div className="d-flex justify-content-between px-4">
              <p>{cardDataFile.size}Kb</p>
              <p>{cardDataFile.date}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardFiles;
