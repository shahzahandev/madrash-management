import TeacherAction from "./TeacherAction.jsx";

const TeacherTable = ({
  teachers,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Designation</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {teachers?.map((teacher) => (
          <tr key={teacher._id}>
            <td>{teacher.name}</td>
            <td>{teacher.email}</td>
            <td>{teacher.phone}</td>
            <td>
              {teacher.designation}
            </td>

            <td>
              <TeacherAction
                teacher={teacher}
                onView={onView}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeacherTable;