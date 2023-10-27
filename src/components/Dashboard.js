import React from "react";
import folder from "../assets/double folder.png";
import CardFolder from "./card/CardFolder";
import CardFiles from "./card/CardFiles";
import TableBasic from "./table/tableBasic";

function Dashboard() {
  return (
    <>
      <div className="content-wrapper">
        <h3 className="font-weight-bold">Document All Site</h3>
        <div className="row">
          <div class="col-md-12 mt-3 grid-margin">
            <div class="row">
              <div class="col-12 col-xl-8 mb-4 mb-xl-0 d-flex">
                <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                  <button
                    class="btn btn-sm btn-light bg-white dropdown-toggle"
                    type="button"
                    id="dropdownMenuDate2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <i class="mdi mdi-calendar"></i> Today (10 Jan 2021)
                  </button>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownMenuDate2"
                  >
                    <a class="dropdown-item" href="#">
                      January - March
                    </a>
                    <a class="dropdown-item" href="#">
                      March - June
                    </a>
                    <a class="dropdown-item" href="#">
                      June - August
                    </a>
                    <a class="dropdown-item" href="#">
                      August - November
                    </a>
                  </div>
                </div>
                <div class="dropdown flex-md-grow-1 flex-xl-grow-0 mx-3">
                  <button
                    class="btn btn-sm btn-light bg-white dropdown-toggle"
                    type="button"
                    id="dropdownMenuDate2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <i class="mdi mdi-calendar"></i> All
                  </button>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownMenuDate2"
                  >
                    <a class="dropdown-item" href="#">
                      ACP
                    </a>
                    <a class="dropdown-item" href="#">
                      KCP
                    </a>
                    <a class="dropdown-item" href="#">
                      BCP
                    </a>
                    <a class="dropdown-item" href="#">
                      WKP
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="justify-content-end d-flex">
                  <form class="form-inline">
                    <input
                      type="text"
                      class="form-control mb-2 mr-sm-2"
                      id="inlineFormInputName2"
                      placeholder="Search"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-weight-bold">Folder</h3>
        <div className="row">
        <CardFolder />
        </div>
        <h3 className="font-weight-bold">Files</h3>
        {/* <div className="row">
        <CardFiles/>
        </div> */}
        <TableBasic/>
      </div>
    </>
  );
}

export default Dashboard;
