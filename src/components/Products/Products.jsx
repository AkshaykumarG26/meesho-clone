import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { SingleProduct } from "../SingleProduct/SingleProduct";
import { CustomPagination } from "../Pagination/CustomPagination";
import "./Products.css"

export const Products = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(0);

  const fetchData = async () => {
    const { data } = await axios.get(`https://meesho--backend.herokuapp.com/all?_page=${page}`);
    setContent(data);
    setNumOfPages(content.length/10);
  };
  // console.log(content.length);

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <div className="">
        <div className="trending">
          {content.map((c, i) => (
            <SingleProduct
              key={i}
              name={c.name}
              category={c.category}
              fabric={c.fabric}
              price={c.price}
              ratings={c.ratings}
              delivery_type={c.delivery_type}
              image={c.image}
              size={c.size}
              pattern={c.pattern}
            />
          ))}
        </div>
        <CustomPagination setPage={setPage} />
      </div>
    </>
  );
};
