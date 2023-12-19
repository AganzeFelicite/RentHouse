import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateHouse = () => {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState(["", "", ""]);
  const [amenities, setAmenities] = useState([]);
  const [feature, setFeature] = useState("");
  const [isPending, setIsPending] = useState(false);

  const [house, setHouse] = useState({
    location: "",
    capacity: "",
    pricePerMonth: "",
    houseImageList: [],
    amenities: [],
    owner: {
      id: 8,
      ownerName: "Aganze",
      contactNumber: "064345789",
      email: "aganzefelicir@gmail.com",
      password: "12345",
      listOfHouses: [],
      ownerProfileUrl: "aucalogo.png",
    },
  });
  //   useEffect(() => {
  //     console.log(house); // This will be called whenever house is updated
  //   }, [house]);

  const handleImageChange = (e, index) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file) {
      setSelectedImages((prevSelectedImages) => {
        const newSelectedImages = [...prevSelectedImages];
        newSelectedImages[index] = file;
        return newSelectedImages;
      });
    }
  };

  const handleAmenities = (e) => {
    e.preventDefault();
    setAmenities([feature, ...amenities]);
    e.target.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData();

    selectedImages.forEach((image, index) => {
      formData.append("houseImages", image);
    });
    fetch("http://localhost:3001/houseImages", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to upload house images, status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("House images uploaded successfully", data);
        const imageUrls = selectedImages.map((image) => image.name);
        setHouse((prevHouse) => ({
          ...prevHouse,
          houseImageList: imageUrls,
          amenities,
        }));
        // console.log(house);
      })
      .catch((error) => {
        console.error("Error uploading house images", error);
      });
    setTimeout(() => {
      fetch("http://localhost:8080/api/v1/house/saveHouse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(house),
      }).then((res) => {
        console.log(res);
        setIsPending(false);
        navigate("/");
      });
    }, 3000);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <h2>New House</h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-outline">
          <input
            type="text"
            className="form-control m-3"
            placeholder="Location"
            value={house.location}
            onChange={(e) =>
              setHouse((prevHouse) => ({
                ...prevHouse,
                location: e.target.value,
              }))
            }
          />

          <input
            type="text"
            className="form-control m-3"
            placeholder="Capacity"
            value={house.capacity}
            onChange={(e) =>
              setHouse((prevHouse) => ({
                ...prevHouse,
                capacity: e.target.value,
              }))
            }
          />
          <input
            type="text"
            className="form-control m-3"
            placeholder="Price per month"
            value={house.pricePerMonth}
            onChange={(e) =>
              setHouse((prevHouse) => ({
                ...prevHouse,
                pricePerMonth: e.target.value,
              }))
            }
          />
          <div className="row m-3">
            {selectedImages.map((selectedImage, index) => (
              <div className="col-md-4" key={index}>
                <div className="form-group">
                  <label htmlFor={`houseImage${index + 1}`}>House Image</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id={`houseImage${index + 1}`}
                    onChange={(e) => handleImageChange(e, index)}
                  />
                  {selectedImage && (
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt={`House Image ${index + 1}`}
                      className="img-fluid"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="form-group">
            <label htmlFor="amenities" className="m-3">
              Amenities
            </label>
            <input
              type="text"
              className="form-control m-3"
              id="amenities"
              placeholder="Enter amenity"
              value={feature}
              onChange={(e) => setFeature(e.target.value)}
            />
            <button
              type="button"
              className=" btn btn-dark  m-3"
              onClick={handleAmenities}
            >
              Add Amenity
            </button>
            <ul className="list-group mt-2">
              {amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div>
              {!isPending && (
                <button type="submit" className="btn btn-dark btn-lg">
                  Add a House
                </button>
              )}
              {isPending && (
                <button type="submit" className="btn btn-dark btn-lg" disabled>
                  Saving house...
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CreateHouse;
