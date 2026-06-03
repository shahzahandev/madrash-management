import { useEffect, useState } from "react";

import TeacherForm from "../components/Teacher/TeacherForm";
import TeacherTable from "../components/Teacher/TeacherTable";
import TeacherSearch from "../components/Teacher/TeacherSearch";
import TeacherProfile from "../components/Teacher/TeacherProfile";

import {getTeachers, createTeacher, updateTeacher, deleteTeacher,
} from "../services/teacherService";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const [editingTeacher, setEditingTeacher] = useState(null);

  const loadTeachers = async () => {
      const res = await getTeachers();
      setTeachers(res.data);
    };

  useEffect(() => {
    loadTeachers();
  }, []);

  const handleSubmit = async (teacherData) => {
      if (editingTeacher) {
        await updateTeacher(
          editingTeacher._id,
          teacherData
        );

        setEditingTeacher(null);
      } else {
        await createTeacher(
          teacherData
        );
      }

      loadTeachers();
    };

  const handleDelete = async (id) => {
      await deleteTeacher(id);
      loadTeachers();
    };

  const filteredTeachers = teachers.filter((teacher) =>
      teacher.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div>
      <h2 className="text-3xl font-bold mb-5">
        Teacher Management
      </h2>

      <TeacherForm
        onSubmit={handleSubmit}
        editingTeacher={
          editingTeacher
        }
      />

      <TeacherSearch
        search={search} setSearch={setSearch}
      />

      <TeacherTable
        teachers={ filteredTeachers }
        onView={ setSelectedTeacher }
        onEdit={ setEditingTeacher}
        onDelete={handleDelete }
      />

      <TeacherProfile
        teacher={ selectedTeacher}
      />
    </div>
  );
};

export default Teachers;