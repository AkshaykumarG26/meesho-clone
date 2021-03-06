import { Badge } from "@material-ui/core";
import "./SingleProduct.css";
import {img_300, unavailable} from "../config/config"

export const SingleProduct = ({
  name,
  category,
  fabric,
  price,
  ratings,
  delivery_type,
  image,
  size,
  pattern,
}) => {
  return (
    <>
      <div className="media">
        <Badge badgeContent={ratings} color={"primary"} />
        <img
          className="poster"
          // src={image}
          src={image ? `${image}` : unavailable}
          style={{ width: "auto", height: "300px" }}
          alt={name}
        />
        <p className="title">{name}</p>
        <span className="subTitle">
          {/* <span className="subTitle">{fabric}</span>
          <span className="subTitle">{delivery_type}</span>
          <span className="subTitle">{size}</span>
          <span className="subTitle">{pattern}</span>*/}
          <b className="subTitle">₹{price}</b>
          {/* <span className="subTitle">{category}</span> */}
        </span>
      </div>
    </>
  );
};
