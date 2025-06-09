import React, { useState } from 'react';

const MultipleInputHandling = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Your form has been submitted");

    console.log(formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      password: "",
      age: "",
      phone: "",
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          Name:{" "}
          <input
            value={formData.name}
            name="name"
            onChange={onChangeHandler}
            type="text"
          />
        </div>
        <div>
          Email:{" "}
          <input
            value={formData.email}
            name="email"
            onChange={onChangeHandler}
            type="email"
          />
        </div>
        <div>
          Pass:{" "}
          <input
            value={formData.password}
            name="password"
            onChange={onChangeHandler}
            type="password"
          />
        </div>
        <div>
          Age:{" "}
          <input
            value={formData.age}
            name="age"
            onChange={onChangeHandler}
            type="number"
          />
        </div>
        <div>
          Phone:{" "}
          <input
            value={formData.phone}
            name="phone"
            onChange={onChangeHandler}
            type="number"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default MultipleInputHandling;
