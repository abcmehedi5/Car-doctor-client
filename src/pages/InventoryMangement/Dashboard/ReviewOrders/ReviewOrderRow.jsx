import React from "react";
import { sweetSuccess } from "../../../Shared/SweetAlert";

const ReviewOrderRow = ({ book, handleOrderDelete }) => {
  const { email, img, name, phone, price, date, service, status, _id } = book;
  return (
    <tr>
      <td>{service}</td>
      <td>$ {price}</td>
      <td>{date}</td>
      <td>{phone}</td>
      <td>
        {/* <select className="select  select-primary max-w-md rounded-lg"> */}
        <select
          onChange={(e) => {
            const newStatus = e.target.value;
            fetch(`http://localhost:5000/orderStatus/${_id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ status: newStatus }),
            })
              .then((response) => response.json())
              .then((data) => {
                // handle successful update
                sweetSuccess("Status update successfull");
              })
              .catch((error) => {
                console.error(error);
                // handle error
              });
          }}
          className={`${
            status == "pending"
              ? "bg-red-600"
              : status == "cancel"
              ? "bg-yellow-600"
              : "bg-success"
          }  rounded-lg text-white select  select-primary max-w-md`}
        >
          <option disabled selected>
            {status}
          </option>
          <option value={"approved"}>approved</option>
          <option value={"pending"}>pending</option>
          <option value={"cancel"}>cancel</option>
        </select>
      </td>
      <td>
        <button
          className="btn btn-circle btn-sm btn-outline"
          onClick={() => {
            handleOrderDelete(_id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default ReviewOrderRow;
