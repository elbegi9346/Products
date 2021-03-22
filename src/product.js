import React from "react";
import "./product.css";

function Products(props) {
  return(
    <div className="main">
      <div className="image">
        <img src={props.data.img} width="100%" height="100%"/>
      </div>
      <div className="details">
        <div className="detail-top">
          <h2 className="detail-title">{props.data.title}</h2>
          <button className="detail-btn_add">ADD</button>
        </div>
        <div className="detail-bottom">
          <div className="detail-data">
            <p className="data-title">UOM</p>
            <span className="data-value">{props.data.uom}</span>
          </div>
          <div className="detail-data">
            <p className="data-title">Pack Size</p>
            <span className="data-value">{props.data.size}</span>
          </div>
          <div className="detail-data">
            <p className="data-title">Per Unit</p>
            <span className="data-value">{props.data.unit}</span>
          </div>
          <div className="detail-data">
            <p className="data-title">Total</p>
            <span className="data-value">{props.data.total}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;