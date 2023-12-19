import { useState } from "react";
import "./App.css";
import { list, list2 } from "./assets/cards-list";
import MobileSearchBar from "./components/MobileSearchBar";
import Header from "./components/Header/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListOfHouses from "./components/ListOfHouses";
import OnwerForm from "./components/OnwerForm";
import Login from "./components/Login";
import BottomNav from "./components/footer";
import CreateHouse from "./components/CreateHouse";
import CreateUser from "./components/CreateUser";
import Houses from "./components/Houses";
import OwnerContacts from "./components/OwnerContacts";
import errorPage from "./components/error";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <div className="App">
      <Router>
        <Header />
        <hr />
        <MobileSearchBar />

        <Routes>
          {/* Route for the home page */}
          <Route
            path="/"
            element={
              <div>
                <ListOfHouses
                  selectedFilter={selectedFilter}
                  list={list}
                  list2={list2}
                />
                <Houses />
              </div>
            }
          />
          {/* <Route path="/house/creation" element={<CreateHouse />} /> */}
          {/* Route for owner registration */}
          <Route exact path="/owner/registerOwner" element={<OnwerForm />} />
          <Route exact path="/owner/login" element={<Login />} />
          <Route exact path="/user/registerUser" element={<CreateUser />} />
          <Route exact path="/owner/addHouse" element={<CreateHouse />} />

          <Route exact path="/house/owner" element={<OwnerContacts />} />
          <Route path="*" element={<emptyPage />} />
        </Routes>
        <BottomNav />
        {/* Place the BottomNavigation outside the Routes */}
      </Router>
    </div>
  );
}

export default App;
