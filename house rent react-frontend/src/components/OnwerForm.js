import React from "react";
import { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";

const OnwerForm = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [firstName, setFirstName] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userImage, setUserImage] = useState("");
  const [password, setPassword] = useState("");
  const [comfirm, setComfirm] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isPending, setIsPending] = useState(false);

  const formHandle = (e) => {
    e.preventDefault();
    setIsPending(true);
    const ownerObj = {
      ownerName: firstName,
      contactNumber: phone,
      email,
      password,
      listOfHouses: null,
      ownerProfileUrl: selectedImage.name,
    };

    const formData = new FormData();
    formData.append("image", selectedImage);

    fetch("http://localhost:3001/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Failed to upload image");
        }
      })
      .then((data) => {
        console.log("Image URL:", data.imageUrl);
      })
      .catch((error) => {
        console.error("Error during image upload", error);
      });
    setTimeout(() => {
      fetch("http://localhost:8080/api/v1/owner/saveOwner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ownerObj),
      }).then((res) => {
        console.log(res);
        setIsPending(false);
        navigate("/owner/login");
      });
    }, 2000);
  };
  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(file);
    }
  };
  const handlePasswordChange = (e) => {
    setComfirm(e.target.value);

    // Check for password match
    if (e.target.value !== password) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  return (
    <div className="container ">
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <h2>Create a House Owner Account</h2>
        </div>
      </div>

      <form onSubmit={formHandle}>
        <div className="row mb-4">
          <div className="col">
            <div class="">
              <div class="form-outline">
                <div>
                  {selectedImage && (
                    <div>
                      <p>Selected Image:</p>
                      <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Selected Profile"
                        style={{ maxWidth: "200px", maxHeight: "200px" }}
                      />
                    </div>
                  )}
                  <label>
                    {!selectedImage && <h5>Select profile image</h5>}
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="profileImage"
                    accept="profileImages/*"
                    value={userImage}
                    onChange={handleImageChange}
                  />
                </div>
                <div data-mdb-input-init className="form-outline">
                  <label className="form-label" for="form6Example1">
                    Enter Your names
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div data-mdb-input-init class="form-outline mb-4">
          <input type="text" id="form6Example3" class="form-control" />
          <label class="form-label" for="form6Example3">
            Company name
          </label>
        </div> */}

        {/* <div data-mdb-input-init class="form-outline mb-4">
          <input type="text" id="form6Example4" class="form-control" />
          <label class="form-label" for="form6Example4">
            Address
          </label>
        </div> */}

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" for="form6Example5">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" for="form6Example5">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" for="form6Example5">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form6Example5">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            value={comfirm}
            onChange={handlePasswordChange}
          />

          {!passwordMatch && (
            <p style={{ color: "red" }}>Passwords do not match</p>
          )}
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <div>
            {passwordMatch && !isPending && (
              <button type="submit" className="btn btn-dark btn-lg">
                Create an account
              </button>
            )}
            {isPending && (
              <button type="submit" className="btn btn-dark btn-lg">
                loading ....
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default OnwerForm;
