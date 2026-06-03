import { useEffect, useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  designation: "",
  department: "",
  salary: "",
};

const TeacherForm = ({
  onSubmit,
  editingTeacher,
}) => {
  const [formData, setFormData] =
    useState(initialState);

  useEffect(() => {
    if (editingTeacher) {
      setFormData(editingTeacher);
    } else {
      setFormData(initialState);
    }
  }, [editingTeacher]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);

    if (!editingTeacher) {
      setFormData(initialState);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-4 mb-6"
    >
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-3"
      />

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-3"
      />

      <input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="border p-3"
      />

      <input
        name="designation"
        placeholder="Designation"
        value={formData.designation}
        onChange={handleChange}
        className="border p-3"
      />

      <input
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
        className="border p-3"
      />

      <input
        name="salary"
        type="number"
        placeholder="Salary"
        value={formData.salary}
        onChange={handleChange}
        className="border p-3"
      />

      <button className="bg-blue-600 text-white p-3 rounded">
        {editingTeacher
          ? "Update Teacher"
          : "Add Teacher"}
      </button>
    </form>
  );
};

export default TeacherForm;