import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { sweetSuccess } from "../../../Shared/SweetAlert";
import OrderRow from "../../../Order/OrderRow";
import Swal from "sweetalert2";
import ReviewOrderRow from "./ReviewOrderRow";

const ReviewOrders = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/bookingAll`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [bookings]);
  const handleOrderDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:5000/booking/" + id, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              const filterBook = bookings.filter(book => book._id !== id)
              setBookings(filterBook)
            }
            sweetSuccess("order delete successfull");
          });
      }
    });
  };

  return (
    <div className=" mt-10 shadow-lg p-5 overflow-x-auto min-h-screen">
      <h1 className="text-2xl  mb-5 font-bold">
        Order reviews ({bookings.length})
      </h1>
      {bookings.length > 0 ? (
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((book) => (
              <ReviewOrderRow
                book={book}
                key={book._id}
                handleOrderDelete={handleOrderDelete}
              ></ReviewOrderRow>
            ))}
          </tbody>
        </table>
      ) : (
        <progress className="progress w-full"></progress>
      )}
    </div>
  );
};

export default ReviewOrders;
