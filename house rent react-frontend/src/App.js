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
              <ListOfHouses
                selectedFilter={selectedFilter}
                list={list}
                list2={list2}
              />
            }
          />

          {/* Route for owner registration */}
          <Route path="/owner/registerOwner" element={<OnwerForm />} />
          <Route path="/owner/login" element={<Login />} />
        </Routes>
        <BottomNav />
        {/* Place the BottomNavigation outside the Routes */}
      </Router>
    </div>
  );
}

export default App;
