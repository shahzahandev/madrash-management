import { useState } from "react";
import studentsData from "../data/studentsData";
import StudentForm from "../components/Studnets/StudnetForm";
import StudentTable from "../components/Studnets/StudentTable";
import StudentSearch from "../components/Studnets/StudentSearch";
import StudentProfile from "../components/Studnets/StudnetProfile";

const Students = () => {
  const [students, setStudents] =
    useState(studentsData);

  const [editingStudent, setEditingStudent] =
    useState(null);

  const [selectedStudent, setSelectedStudent] =
    useState(null);

  const [search, setSearch] = useState("");

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id
          ? updatedStudent
          : student
      )
    );

    setEditingStudent(null);
  };

  const handleDelete = (id) => {
    setStudents(
      students.filter(
        (student) => student.id !== id
      )
    );
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const filteredStudents =
    students.filter((student) =>
      student.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div>
      <StudentForm
        addStudent={addStudent}
        updateStudent={updateStudent}
        editingStudent={editingStudent}
      />

      <StudentSearch
        search={search}
        setSearch={setSearch}
      />

      <StudentTable
        students={filteredStudents}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      <StudentProfile
        student={selectedStudent}
      />
    </div>
  );
};

export default Students;