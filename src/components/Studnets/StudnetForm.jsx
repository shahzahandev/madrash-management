import { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    roll: "",
    guardian: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addStudent({
      id: Date.now(),
      ...formData,
    });

    setFormData({
      name: "",
      class: "",
      roll: "",
      guardian: "",
      phone: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-4 mb-5"
    >
      <input
        type="text"
        placeholder="Student Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
        className="border p-3"
      />

      <input
        type="text"
        placeholder="Class"
        value={formData.class}
        onChange={(e) =>
          setFormData({
            ...formData,
            class: e.target.value,
          })
        }
        className="border p-3"
      />

      <input
        type="text"
        placeholder="Roll"
        value={formData.roll}
        onChange={(e) =>
          setFormData({
            ...formData,
            roll: e.target.value,
          })
        }
        className="border p-3"
      />

      <input
        type="text"
        placeholder="Guardian"
        value={formData.guardian}
        onChange={(e) =>
          setFormData({
            ...formData,
            guardian: e.target.value,
          })
        }
        className="border p-3"
      />

      <input
        type="text"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) =>
          setFormData({
            ...formData,
            phone: e.target.value,
          })
        }
        className="border p-3"
      />

      <button
        className="bg-blue-500 text-white p-3 rounded"
      >
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;