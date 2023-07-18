import React, { useState } from "react";
import logo from "../../img/Mesa de trabajo 2.png";

const CheckoutForm = ({ onConfirm }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(formData);
  };

  return (
    <div className="flex flex-col items-center p-16">
      <div className="w-full max-w-md p-4 mb-4 border border-gray rounded shadow-2xl">
        <div className="flex justify-center pb-6">
          <img
            src={logo}
            alt="Empanamia"
            className="rounded-full w-16 h-16 -mt-12"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="font-medium">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-md border-b border-blue outline-none placeholder-gray-300 text-blue"
              placeholder="Pepito de Empanamia"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="font-medium">
              Teléfono:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-md border-b border-blue outline-none placeholder-gray-300 text-blue"
              placeholder="+54 9 341 3 123 123 123"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-md border-b border-blue outline-none placeholder-gray-300 text-blue"
              placeholder="venbailalo@hayvengozalo.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-pink hover:text-white font-semibold rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
          >
            Confirmar Orden
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
