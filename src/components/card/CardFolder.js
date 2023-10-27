import React from "react";
import folder from "../../assets/double folder.png";
import action from "../../assets/action.png";
import { Link } from "react-router-dom";

function CardFolder() {
  const cardData = [
    {
      name: "ACP",
      date: "12/10/2023",
      file: 4,
    },
    {
      name: "BCP",
      date: "12/10/2023",
      file: 4,
    },
    {
      name: "KCP",
      date: "12/10/2023",
      file: 4,
    },
    {
      name: "WKP",
      date: "12/10/2023",
      file: 4,
    },
  ];

  return (
    <>
      {cardData.map((cardSite,i) => (
        <div className="col-md-3 mt-3 grid-margin stretch-card" key={i}>
          <Link to={`/dataFolder/${cardSite?.name}`}>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={folder}
                      className="img-fluid rounded-start"
                      alt="..."
                      width="70"
                    />
                  </div>
                  <div className="col-md-6">
                    <p className="card-title">{cardSite.name}</p>
                    <p>{cardSite.date}</p>
                    <p>{cardSite.file}</p>
                  </div>
                  <div className="col-md-2 mb-1 p-1">
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn"
                        id="dropdownMenuIconButton3"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src={action} alt="..." width="5" />
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuIconButton3"
                      >
                        <a className="dropdown-item" href="#">
                          Download
                        </a>
                        <a className="dropdown-item text-danger" href="#">
                          Hapus
                        </a>
                      </div>
                    </div>                
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default CardFolder;
