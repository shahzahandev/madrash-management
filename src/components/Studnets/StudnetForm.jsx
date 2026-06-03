// export default StudentForm;
import { useEffect, useState } from "react";

const StudentForm = ({
  addStudent,
  updateStudent,
  editingStudent,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    roll: "",
    guardian: "",
    phone: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingStudent) {
      updateStudent(formData);
    } else {
      addStudent({
        id: Date.now(),
        ...formData,
      });
    }

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
        value={formData.name}
        placeholder="Name"
        className="border p-3"
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
      />

      <input
        value={formData.class}
        placeholder="Class"
        className="border p-3"
        onChange={(e) =>
          setFormData({
            ...formData,
            class: e.target.value,
          })
        }
      />

      <input
        value={formData.roll}
        placeholder="Roll"
        className="border p-3"
        onChange={(e) =>
          setFormData({
            ...formData,
            roll: e.target.value,
          })
        }
      />

      <input
        value={formData.guardian}
        placeholder="Guardian"
        className="border p-3"
        onChange={(e) =>
          setFormData({
            ...formData,
            guardian: e.target.value,
          })
        }
      />

      <input
        value={formData.phone}
        placeholder="Phone"
        className="border p-3"
        onChange={(e) =>
          setFormData({
            ...formData,
            phone: e.target.value,
          })
        }
      />

      <button className="bg-blue-600 text-white p-3 rounded">
        {editingStudent
          ? "Update Student"
          : "Add Student"}
      </button>
    </form>
  );
};

export default StudentForm;