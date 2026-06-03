const StudentTable = ({ students }) => {
  return (
    <div className="overflow-x-auto mt-5">
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-slate-200">
            <th className="p-3">Name</th>
            <th className="p-3">Class</th>
            <th className="p-3">Roll</th>
            <th className="p-3">Guardian</th>
            <th className="p-3">Phone</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">{student.class}</td>
              <td className="border p-2">{student.roll}</td>
              <td className="border p-2">
                {student.guardian}
              </td>
              <td className="border p-2">
                {student.phone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;