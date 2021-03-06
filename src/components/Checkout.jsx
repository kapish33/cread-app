import React from "react";

const Checkout = () => {
  // get product array form local storage
  //   const [products, setProducts] = React.useState([]);
  //   useEffect(() => {
  //     // get product array form local storage
  //     const localProducts = JSON.parse(localStorage.getItem("products"));
  //     // set the products array to the products state
  //     setProducts(localProducts);
  //   }, []);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    phone: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.name.length === 0) {
      alert("Please enter your name");
    }
    if (form.email.length === 0) {
      alert("Please enter your email");
    }
    if (form.address.length === 0) {
      alert("Please enter your address");
    }
    if (form.city.length === 0) {
      alert("Please enter your city");
    }
    if (form.zip.length === 0) {
      alert("Please enter your zip");
    }
    if (form.country.length === 0) {
      alert("Please enter your country");
    }
    if (form.phone.length === 0) {
      alert("Please enter your phone");
    }
    alert(`Your order has been placed. Thank you ${form.name} for your order.`);
    // clear all input fields
    setForm({
      name: "",
      email: "",
      address: "",
      city: "",
      zip: "",
      country: "",
      phone: "",
    });
  };

  return (
    <div className="keep">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={form.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={form.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip</label>
          <input
            type="text"
            name="zip"
            id="zip"
            value={form.zip}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            value={form.country}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <button className="mybtm" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Checkout;
