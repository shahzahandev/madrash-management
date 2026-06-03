import { useState } from "react";
import { registerUser } from "../../services/authService";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser(formData);

      console.log(res);

      alert("Registration Successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-5 rounded shadow">
      <h2 className="text-2xl font-bold mb-5">
        Register
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border p-3 mb-3"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 mb-3"
          onChange={handleChange}
        />

        <select
          name="role"
          className="w-full border p-3 mb-3"
          onChange={handleChange}
        >
          <option value="student">
            Student
          </option>

          <option value="teacher">
            Teacher
          </option>
        </select>

        <button className="w-full bg-blue-500 text-white p-3">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;