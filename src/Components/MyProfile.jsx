import React, { useState } from "react";
function MyProfile() {
  const [form, setform] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    number: "",
    address: "",
  });
  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    e.preventdefault(e);
    console.log("Form submitted", form);
  };
  return (
    <>
      <div className="mt-10  rounded-lg h-full w-[800px] border-2 border-black  bg-slate-100 ml-[400px]">
        <div>
          <h1 className="text-black text-4xl text-center font-bold mb-8 pt-5">
            Personal Information
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center"></div>
          <input
            className="m-8 ml-5mr-8 pl-2 bg-slate-300 text-[25px] rounded-xl h-11 text-black text-center"
            type="text"
            placeholder="Firstname"
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
          />
          <input
            className="pl-2 text-[25px] bg-slate-300 text-black rounded-xl h-11 text-center"
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={form.lastname}
            onChange={handleChange}
          />
          <h1 className="text-black text-[30px] ml-10">Your Gender</h1>
          <label className="mt-3 m-5 mb-0 text-[23px]">
            Male{" "}
            <input
              className="m-1"
              type="radio"
              name="gender"
              value="Male"
              checked={form.gender === "Male"}
              onChange={handleChange}
            />
          </label>

          <label className="mt-3 m-5 mb-0 text-[23px]">
            Female{" "}
            <input
              className="m-1"
              type="radio"
              name="gender"
              value="Female"
              checked={form.gender === "Female"}
              onChange={handleChange}
            />
          </label>
          <label className="mt-3  mb-0 text-[23px]">
            Transgender
            <input
              className="m-1"
              type="radio"
              name="gender"
              value="Transgender"
              checked={form.gender === "Transgender"}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="text-black text-[30px] ml-10  ">
            Email Address
          </label>
          <br />
          <input
            className="pl-2 ml-5 mt-2 text-[25px] bg-slate-300 text-black rounded-xl h-11 w-[600px] "
            type="email"
            placeholder="Your Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <br />
          <label className="text-black text-[30px] ml-10  ">
            {" "}
            Phone Number{" "}
          </label>
          <br />
          <input
            className="pl-2 ml-5 mt-2 text-[25px] bg-slate-300 text-black rounded-xl  "
            type="number"
            placeholder="Your Number"
            name="number"
            value={form.number}
            onChange={handleChange}
          />
          <br />
          <label className="text-black text-[30px] ml-10  ">Address</label>
          <br />
          <textarea
            className="pl-2 ml-5 mt-2 text-[25px] bg-slate-300 text-black rounded-xl h-[150px] w-[600px] "
            type="text"
            placeholder="Your Address"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="text-black bg-blue-700 text-4xl p-2 rounded-xl text-center m-[300px] w-[160px] mb-4"
          >
            Submit{" "}
          </button>
        </form>
      </div>
    </>
  );
}
export default MyProfile;
