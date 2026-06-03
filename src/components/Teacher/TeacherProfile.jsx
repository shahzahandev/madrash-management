const TeacherProfile = ({
  teacher,
}) => {
  if (!teacher) return null;

  return (
    <div className="bg-white p-5 rounded shadow mt-5">
      <h2 className="text-2xl font-bold mb-4">
        Teacher Profile
      </h2>

      <p>
        <strong>Name:</strong>{" "}
        {teacher.name}
      </p>

      <p>
        <strong>Email:</strong>{" "}
        {teacher.email}
      </p>

      <p>
        <strong>Phone:</strong>{" "}
        {teacher.phone}
      </p>

      <p>
        <strong>Department:</strong>{" "}
        {teacher.department}
      </p>

      <p>
        <strong>Designation:</strong>{" "}
        {teacher.designation}
      </p>

      <p>
        <strong>Salary:</strong>{" "}
        {teacher.salary}
      </p>
    </div>
  );
};

export default TeacherProfile;