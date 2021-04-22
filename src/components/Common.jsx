import React from "react";

const Contact = (props) => {
  return (
    <>
      <div className="container text-center mt-5 mt-lg-2">
        <div className="row">
          <div className="col-12 col-md-6 m-auto">
            <h1 className="display-1 fw-bold text-danger">{props.title}</h1>
            <hr />
            <h3>{props.text}</h3>
          </div>
          <div className="col-12 col-md-6 m-auto mt">
            <img src={props.img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
