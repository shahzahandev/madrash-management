import { useState } from "react";
import studentsData from "../data/studentsData";
import StudentForm from "../components/Studnets/StudnetForm";
import StudentTable from "../components/Studnets/StudentTable";
import StudentSearch from "../components/Studnets/StudentSearch";
import StudentProfile from "../components/Studnets/StudnetProfile";

const Students = () => {
  const [students, setStudents] = useState(studentsData);

  const [editingStudent, setEditingStudent] = useState(null);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const [search, setSearch] = useState("");

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );

    setEditingStudent(null);
  };

  const handleDelete = (id) => {
    setStudents(
      students.filter((student) => student.id !== id));
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };
// pore add hoichhe---selected korar jonno
  const handleView = (student) => {
    setSelectedStudent(student);
};

  const filteredStudents =
    students.filter((student) =>
      student.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div>
       <h2 className="text-3xl font-bold mb-5">
        Student Management
      </h2>

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
        // pore add hoichhe---selected korar jonno
        handleView={handleView}
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