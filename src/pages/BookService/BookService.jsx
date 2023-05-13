import React, { useContext } from "react";
import { sweetError, sweetSuccess } from "../Shared/SweetAlert";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const BookService = () => {
  const book = useLoaderData();
  console.log(book);
  const { user } = useContext(AuthContext);
  const handleOrderService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    // const email = user?.email;
    const booking = {
      name,
      date,
      email,
      phone,
      message,
      img: book.img,
      service: book.title,
      service_id: book._id,
      price: book.price,
      status: "pending",
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        sweetSuccess("booking submit successfull");
        form.reset()
      })
      .catch((error) => {
        sweetError(error);
        form.reset()
      });
  };
  return (
    <div>
      <h1 className="text-3xl text-center mt-10 mb-10">{book.title} Booking</h1>
      <form
        onSubmit={handleOrderService}
        className="lg:w-3/4 mx-auto mb-5 bg-slate-700 p-10 rounded-lg"
      >
        <div className="form-control">
          <input
            type="text"
            placeholder="Name"
            name="name"
            defaultValue={user?.displayName}
            className="input input-bordered rounded-sm mb-3"
          />
        </div>
        <div className="form-control">
          <input
            type="email"
            placeholder="email"
            name="email"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered rounded-sm mb-3"
          />
        </div>

        <div className="form-control">
          <input
            type="number"
            placeholder="Phone number"
            name="phone"
            className="input input-bordered rounded-sm mb-3"
          />
        </div>
        <div className="form-control">
          <input
            type="date"
            placeholder="Address"
            name="date"
            className="input input-bordered rounded-sm mb-3"
          />
        </div>

        <div className="form-control">
          <textarea
            type="text"
            name="message"
            placeholder="Your Message"
            className="input input-bordered rounded-sm h-32 p-7"
          />
        </div>

        <input
          className="btn btn-primary w-full mt-5 rounded-md bg-red-600 border-none  text-white"
          type="submit"
          value="Order Confirm"
        />
      </form>
    </div>
  );
};

export default BookService;
