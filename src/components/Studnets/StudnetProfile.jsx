const StudentProfile = ({ student }) => {
  if (!student) return null;

  return (
    <div className="bg-white shadow p-5 rounded mt-5">
      <h2 className="text-2xl font-bold">
        Student Details
      </h2>

      <div className="space-y-2 mt-4">
        <p>
          <strong>Name:</strong>
          {student.name}
        </p>

        <p>
          <strong>Class:</strong>
          {student.class}
        </p>

        <p>
          <strong>Roll:</strong>
          {student.roll}
        </p>

        <p>
          <strong>Guardian:</strong>
          {student.guardian}
        </p>

        <p>
          <strong>Phone:</strong>
          {student.phone}
        </p>
      </div>
    </div>
  );
};

export default StudentProfile;