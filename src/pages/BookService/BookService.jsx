import React from "react";

const BookService = () => {
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
      img: "image",
      service: "title",
      price: "price",
    };

  };
  return (
    <div>
      <h1 className="text-3xl text-center mt-10 mb-10">Book Our service</h1>
      <form
        onSubmit={handleOrderService}
        className="lg:w-3/4 mx-auto mb-5 bg-slate-700 p-10 rounded-lg"
      >
        <div className="form-control">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered rounded-sm mb-3"
          />
        </div>
        <div className="form-control">
          <input
            type="email"
            placeholder="email"
            name="email"
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
