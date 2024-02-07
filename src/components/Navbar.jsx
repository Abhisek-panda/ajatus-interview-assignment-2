import { useData } from "../main";

const Navbar = () => {
  const { filters, setFilters, pageData, setPageData } = useData();
  const filterRemoval = () => {
    setFilters({ ...filters, search: "", sorting: "" });
    setPageData({ ...pageData, currentPage: 1 });
  };
  return (
    <nav className="flex space-between">
      <h1>Student Data</h1>
      <input
        type="search"
        placeholder="Search With Name,University and Email"
        id=""
        name=""
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />
      <select
        name=""
        id=""
        onChange={(e) => setFilters({ ...filters, sorting: e.target.value })}
      >
        <option value="" hidden>
          Sort By
        </option>
        <option value="name">Name</option>
        <option value="age">Age</option>
        <option value="university">University</option>
        <option value="weight">Weight</option>
        <option value="email">Email</option>
        <option value="height">Height</option>
      </select>
      <button onClick={filterRemoval}>Clear Filters</button>
    </nav>
  );
};

export default Navbar;
