const StudentSearch = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search Student..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-3 rounded w-full"
    />
  );
};

export default StudentSearch;