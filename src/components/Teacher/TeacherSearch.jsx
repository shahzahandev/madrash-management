const TeacherSearch = ({
  search,
  setSearch,
}) => {
  return (
    <input
      type="text"
      placeholder="Search teacher..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="border p-3 w-full mb-5"
    />
  );
};

export default TeacherSearch;