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
              <h5 style={{ maeginTop: "2%" }}>Top wear</h5>
              <div
                onClick={() => {
                  navigate("/Topwear");
                }}
              >
                <a className="a-tag">Dresses</a>
              </div>
            </div>
            <div className="data_2">
              <h5>Bottom Wear</h5>
              <div
                onClick={() => {
                  navigate("/Bottomwear");
                }}
              >
                <a className="a-tag">Jeans</a>
              </div>
            </div>
          </div>
        </p>
        <p className="sub_categories">
          Women Western
          <div className="displayHover">
            <div className="data_2">
              <h5 style={{ maeginTop: "2%" }}>Top wear</h5>
              <div
                onClick={() => {
                  navigate("/Topwear");
                }}
              >
                <a className="a-tag">Dresses</a>
              </div>
            </div>
            <div className="data_2">
              <h5>Bottom Wear</h5>
              <div
                onClick={() => {
                  navigate("/Bottomwear");
                }}
              >
                <a className="a-tag">Jeans</a>
              </div>
            </div>
          </div>
        </p>
        <p className="sub_categories">
          Jewellery & Accessories 
          <div className="displayHover">
            <div className="data_2">
              <h5 style={{ maeginTop: "2%" }}>Top wear</h5>
              <div
                onClick={() => {
                  navigate("/Topwear");
                }}
              >
                <a className="a-tag">Dresses</a>
              </div>
            </div>
            <div className="data_2">
              <h5>Bottom Wear</h5>
              <div
                onClick={() => {
                  navigate("/Bottomwear");
                }}
              >
                <a className="a-tag">Jeans</a>
              </div>
            </div>
          </div>
        </p>
        <p className="sub_categories">
          Women Western
          <div className="displayHover">
            <div className="data_2">
              <h5 style={{ maeginTop: "2%" }}>Top wear</h5>
              <div
                onClick={() => {
                  navigate("/Topwear");
                }}
              >
                <a className="a-tag">Dresses</a>
              </div>
            </div>
            <div className="data_2">
              <h5>Bottom Wear</h5>
              <div
                onClick={() => {
                  navigate("/Bottomwear");
                }}
              >
                <a className="a-tag">Jeans</a>
              </div>
            </div>
          </div>
        </p>
        <p className="sub_categories">
          Women Western
          <div className="displayHover">
            <div className="data_2">
              <h5 style={{ maeginTop: "2%" }}>Top wear</h5>
              <div
                onClick={() => {
                  navigate("/Topwear");
                }}
              >
                <a className="a-tag">Dresses</a>
              </div>
            </div>
            <div className="data_2">
              <h5>Bottom Wear</h5>
              <div
                onClick={() => {
                  navigate("/Bottomwear");
                }}
              >
                <a className="a-tag">Jeans</a>
              </div>
            </div>
          </div>
        </p>
        
      </div>
    </div>
  );
}


