const StudentActions = ({
  student,
  handleEdit,
  handleDelete,
  handleView,
}) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleView(student)}
        className="px-3 py-1 bg-green-600 text-white rounded"
      >
        View
      </button>

      <button
        onClick={() => handleEdit(student)}
        className="px-3 py-1 bg-yellow-500 text-white rounded"
      >
        Edit
      </button>

      <button
        onClick={() => handleDelete(student.id)}
        className="px-3 py-1 bg-red-500 text-white rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default StudentActions;