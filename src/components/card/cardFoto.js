import React from "react";

function CardsFoto() {
  return (
    <>
      <div className="col-md-3 mt-2 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="container-image" >
            <img src="https://i.pinimg.com/564x/0a/0d/29/0a0d29f3110ee1f2f436646e330ecc2c.jpg" class="card-img-top" alt="..." style={{ objectFit: 'contain', width: '100px', height: '100px' }}/>
            </div>
            <div className="card-text">
                <h5>text</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 mt-2 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
          <div className="container-image">
            <img src="https://i.pinimg.com/236x/c9/54/ac/c954ac41948afec57c1fcb8fbf785c83.jpg" className="card-img-top" alt="..." style={{ objectFit: 'contain', width: '100px', height: '100px' }}/>
            </div>
            <div className="card-text">
                <h5>text</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsFoto;
