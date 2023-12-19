import React from "react";
import { useLocation } from "react-router-dom";

const OwnerContacts = (props) => {
  const data = props.data;
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        {data && (
          <div>
            <h4>{data.ownerName}</h4>
            <h4>{data.contactNumber}</h4>
            <h4>{data.email}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnerContacts;
