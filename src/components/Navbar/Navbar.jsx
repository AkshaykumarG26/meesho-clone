import { BsCart4 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { CategoryNavbar } from "../Navbar/CategoryNavbar";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <div
      onClick={() => window.scroll(0, 0)}
      style={{
        alignContent: "center",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <nav class="navbar navbar-expand-sm">
        <div
          class="container-fluid collapse navbar-collapse"
          onClick={() => window.scroll(0, 0)}
        >
          {/* <a class="navbar-brand" href="/"></a> */}
          <Link to={"/"}>
            <img
              src="/images/meesho_logo.png"
              style={{ width: "150px" }}
              alt=""
            />
          </Link>
          <div
            style={{
              padding: "10px",
              alignContent: "center",
              display: "flex",
              // justifyContent: "space-between",
            }}
          >
            <form class="d-flex navbar-nav mr-auto" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div
            style={{
              padding: "10px",
              alignContent: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div class="mr-auto navbar-nav" id="navbarSupportedContent">
              <ul class="navbar-nav  me-auto mb-2 mb-lg-0 ">
                <li className="nav-item nav-link ">
                  {/* <a class="nav-link active " aria-current="page" href="/"></a> */}
                  <div className="dropdown">
                    Download App
                    <div className="hover_dropdown">
                      <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow">
                        <img
                          className="imgset"
                          src="https://images.meesho.com/images/pow/playstore-icon-big.png"
                          alt="/"
                        />
                      </a>
                      <a href="https://apps.apple.com/us/app/meesho/id1457958492">
                        <img
                          className="imgset"
                          src="https://images.meesho.com/images/pow/appstore-icon-big.png"
                          alt="/"
                        />
                      </a>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  {/* <a class="nav-link" href="/">
                    Become a Suplier
                  </a> */}
                  <Link
                    className="nav-link"
                    to={"/"}
                    style={{ color: "black" }}
                  >
                    Become a Suplier
                  </Link>
                </li>
                <li class="nav-item">
                  {/* <a class="nav-link" href="/"></a> */}
                  <Link className="nav-link" to={"/"}>
                    <span>
                      <CgProfile color="black" fontSize="25px"></CgProfile>
                      {/* Profile */}
                    </span>
                  </Link>
                </li>
                <li class="nav-item">
                  {/* <a class="nav-link" href="/"></a> */}
                  <Link className="nav-link" to={"/cart"}>
                    <span className="hoverCart">
                      <BsCart4 color="black" fontSize="25px"></BsCart4>
                      {/* cart */}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <CategoryNavbar />
    </div>
  );
};
