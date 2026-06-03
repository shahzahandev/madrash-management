import { useState } from "react";

import studentsData from "../data/studentsData";

import StudentForm from "../components/Studnets/StudnetForm";
import StudentSearch from "../components/Studnets/StudentSearch";
import StudentTable from "../components/Studnets/StudentTable";

const Students2 = () => {
  const [students, setStudents] =
    useState(studentsData);

  const [search, setSearch] = useState("");

  const addStudent = (student) => {
    setStudents([...students, student]);
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

      <StudentForm addStudent={addStudent} />

      <StudentSearch
        search={search}
        setSearch={setSearch}
      />

      <StudentTable
        students={filteredStudents}
      />
    </div>
  );
};

export default Students2;