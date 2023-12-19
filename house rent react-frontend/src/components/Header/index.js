import React, { useState } from "react";

import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./ProfileMenu";
// import SimpleBottomNavigation from "./BottomNav";
// import MobileSearchBar from "../MobileSearchBar";
// import SimpleBottomNavigation from "./BottomNav";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
// import MobileSearchBar from "../MobileSearchBar";
function Header() {
  const [searchFlag, setSearchFlag] = useState(false);
  const handleSearchClick = () => {
    setSearchFlag(true);
    console.log("Search icon clicked!");
  };
  return (
    <div className="navbar">
      <Link to="/">
        <h2>Rent Your Home Today</h2>
      </Link>
      <div className="search-bar" onClick={handleSearchClick}>
        {!searchFlag && (
          <div className="">
            <SearchRoundedIcon className="search-icon" />
          </div>
        )}
        {searchFlag && (
          <div className="">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search this blog"
              />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="profile-container">
        <div className="airbnb-your-home">
          <Link to="/owner/addHouse">Rent Your House</Link>
        </div>
        <div className="airbnb-your-home">
          <LanguageIcon sx={{ fontSize: "1.3rem" }} />
        </div>
        <div className="profile-div">
          <BasicMenu />
        </div>
      </div>
      {/* <MobileSearchBar /> */}
      {/* <SimpleBottomNavigation /> */}
    </div>
  );
}

export default Header;
