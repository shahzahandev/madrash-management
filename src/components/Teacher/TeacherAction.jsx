const TeacherActions = ({
  teacher,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onView(teacher)}
        className="bg-green-600 text-white px-3 py-1 rounded"
      >
        View
      </button>

      <button
        onClick={() => onEdit(teacher)}
        className="bg-yellow-500 text-white px-3 py-1 rounded"
      >
        Edit
      </button>

      <button
        onClick={() =>
          onDelete(teacher._id)
        }
        className="bg-red-600 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default TeacherActions;