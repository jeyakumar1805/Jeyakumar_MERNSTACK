import React, { useState } from "react";
import avatarImg from "./img_processed.png";
import TextChange from "../TextChange";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Phone: ${formData.phone}`);
    setShowForm(false);
    setFormData({ name: "", phone: "" });
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ name: "", phone: "" });
  };

  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          I am a passionate Machine Learning Engineer with a strong foundation
          in programming and problem-solving. I enjoy creating innovative
          solutions using AI and machine learning techniques, and I aim to
          leverage my skills to contribute to cutting-edge projects that make a
          difference.
        </p>
        <button
          className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          onClick={() => setShowForm(true)}
        >
          Contact Me
        </button>
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mt-5 bg-gray-800 p-5 rounded-lg shadow-lg text-black"
          >
            <div className="mb-3">
              <label className="block text-white text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-white text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md"
                required
              />
            </div>
            <div className="flex space-x-3">
              <button
                type="submit"
                className="bg--500 text-white py-2 px-4 rounded-md hover:bg-green-600"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg--500 text-white py-2 px-4 rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
      <div>
        <img className="" src={avatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
