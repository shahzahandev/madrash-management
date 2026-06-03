import StudentActions from "./StudentActions";

const StudentTable = ({
  students,
  handleEdit,
  handleDelete,
}) => {
  return (
    <table className="w-full border mt-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Class</th>
          <th>Roll</th>
          <th>Guardian</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.class}</td>
            <td>{student.roll}</td>
            <td>{student.guardian}</td>
            <td>{student.phone}</td>

            <td>
              <StudentActions
                student={student}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;