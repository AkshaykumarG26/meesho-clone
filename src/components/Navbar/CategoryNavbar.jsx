import React from "react";
import "./CategoryNavbar.css";
import { useNavigate } from "react-router-dom";

export const  CategoryNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="sub_main">
        <p className="sub_categories">
          Women Ethic
          <div className="displayHover">
            <div className="data_2">
              <h5>All Women Ethic</h5>
              <div
                onClick={() => {
                  navigate("/topwear");
                }}
              >
                <a className="a">View All</a>
              </div>
            </div>
            <div className="data_2">
              <h5>Sarees</h5>
              <div
                onClick={() => {
                  navigate("/bottomwear");
                }}
              >
                <a className="a">Silk Sarees</a>
              </div>
            </div>
          </div>
        </p>
        <p className="sub_categories">
          Women Western
          <div className="displayHover">
            <div className="data_2">
              <h5>Top wear</h5>
              <div
                onClick={() => {
                  navigate("/topwear");
                }}
              >
                <a className="a">Dresses</a>
              </div>
            </div>
            <div className="data_2">
              <h5>Bottom Wear</h5>
              <div
                onClick={() => {
                  navigate("/bottomwear");
                }}
              >
                <a className="a">Jeans</a>
              </div>
            </div>
          </div>
        </p>
        <p className="sub_categories">
          Jewellery & Accessories
          <div className="displayHover">
            <div className="data_2">
              <h5>Jewellery</h5>
              <div
                onClick={() => {
                  navigate("/topwear");
                }}
              >
                <a className="a">Jewellery Set</a>
              </div>
            </div>
            <div className="data_2">
              <h5>Women Accessory</h5>
              <div
                onClick={() => {
                  navigate("/bottomwear");
                }}
              >
                <a className="a">Bags</a>
              </div>
            </div>
          </div>
        </p>
        <p className="sub_categories">
          Men
          <div className="displayHover">
            <div className="data_2">
              <h5>Top wear</h5>
              <div
                onClick={() => {
                  navigate("/topwear");
                }}
              >
                <a className="a">View All</a>
              </div>
            </div>
            <div className="data_2">
              <h5>Bottom Wear</h5>
              <div
                onClick={() => {
                  navigate("/bottomwear");
                }}
              >
                <a className="a">Track Pants</a>
              </div>
            </div>
          </div>
        </p>
        <p className="sub_categories">
          Kids
          <div className="displayHover">
            <div className="data_2">
              <h5>Toys & Accessories</h5>
              <div
                onClick={() => {
                  navigate("/topwear");
                }}
              >
                <a className="a">Soft Toys</a>
              </div>
            </div>
            <div className="data_2">
              <h5>Baby Care</h5>
              <div
                onClick={() => {
                  navigate("/bottomwear");
                }}
              >
                <a className="a">All Baby Care</a>
              </div>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}


