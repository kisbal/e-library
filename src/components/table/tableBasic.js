import React from "react";
import "./tableBasic.css";

function TableBasic() {
  const tablesData = [
    {
      nameFiles: "data entry.doc",
      date: "12/10/2023",
      time: "14.20",
      size: "3,28kb",
      uploadBy: {
        foto: "https://i.pinimg.com/564x/24/f3/33/24f333409946b1f676532d7f50c60f61.jpg",
        nama_user: "testing",
      },
    },
    {
      nameFiles: "data entry.doc",
      date: "12/10/2023",
      time: "14.20",
      size: "3,28kb",
      uploadBy: {
        foto: "https://i.pinimg.com/564x/10/4b/45/104b45df03ae503a84237cecb9a8f040.jpg",
        nama_user: "testing",
      },
    },
    {
      nameFiles: "data entry.doc",
      date: "12/10/2023",
      time: "14.20",
      size: "3,28kb",
      uploadBy: {
        foto: "https://i.pinimg.com/564x/48/44/60/4844601ae50c236a3d23e4e0dafbee23.jpg",
        nama_user: "testing",
      },
    },
    {
      nameFiles: "data entry.doc",
      date: "12/10/2023",
      time: "14.20",
      size: "3,28kb",
      uploadBy: {
        foto: "https://i.pinimg.com/564x/36/b4/46/36b446d974d0f62094a107059cf5a61e.jpg",
        nama_user: "testing",
      },
    },
  ];

  return (
    <>
      {/* <div className="mt-2 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Basic Table</h4>
            <p className="card-description">
              Add className <code>.table</code>
            </p>
           
              <div className="table-responsive">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>Name File</th>
                      <th>Date & Time</th>
                      <th>Size</th>
                      <th>Upload By</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                  {tablesData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.nameFiles}</td>
                      <td className="style">
                        {data.date}
                        <p>{data.time}</p>
                      </td>
                      <td>{data.size}</td>
                      <td>
                        <div className="row d-flex">
                          <div className="col-2 py-1">
                            <img src={data.uploadBy.foto} alt="image"/>
                          </div>
                          <div className="col-10">{data.uploadBy.nama_user}</div>
                        </div>
                      </td>
                      <td>
                        <label className="badge badge-danger">Pending</label>
                      </td>
                    </tr>
                  ))}
                </tbody>
                    
                </table>
              </div>
          
          </div>
        </div>
      </div> */}
      {/* <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title">Advanced Table</p>
              <div className="row">
                <div className="col-12">
                  <div className="table-responsive">
                    <table
                      id="example"
                      className="table expandable-table"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr>
                          <th>File Name</th>
                          <th>Date & Time</th>
                          <th>Size</th>
                          <th>Upload By</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tablesData.map((data, index) => (
                          <tr key={index}>
                            <td>{data.nameFiles}</td>
                            <td className="style">
                              {data.date}
                              <p>{data.time}</p>
                            </td>
                            <td>{data.size}</td>
                            <td>
                              <div className="row d-flex">
                                <div className="col-2 py-1">
                                  <img src={data.uploadBy.foto} alt="image" />
                                </div>
                                <div className="col-10">
                                  {data.uploadBy.nama_user}
                                </div>
                              </div>
                            </td>
                            <td>
                             
                              <div className="d-flex gap-3">
                                <button className="btn btn-primary btn-icon-text">
                                  <i classname="mdi mdi-arrow-down-bold-circle"></i>
                                  download
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default TableBasic;
