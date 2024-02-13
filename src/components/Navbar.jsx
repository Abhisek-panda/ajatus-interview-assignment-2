import { useData } from "../main";

const Navbar = () => {
  const { filters, setFilters, pageData, setPageData } = useData();
  const filterRemoval = () => {
    setFilters({ ...filters, search: "", sorting: "" });
    setPageData({ ...pageData, currentPage: 1 });
  };
  return (
    <nav className="flex justify-between items-center gap-4 mt-2">
      <div>
        <h1 className="text-2xl text-sky-700 font-bold ml-10">Student Data</h1>
      </div>
      <div className="flex justify-center gap-10 mr-10 items-center">
        <input
          type="search"
          placeholder="Search With Name,University and Email"
          id=""
          name=""
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="w-96 border-2 border-black rounded-md p-2"
        />
        <select
          name=""
          id=""
          onChange={(e) => setFilters({ ...filters, sorting: e.target.value })}
          className="border-black border-2 p-2 hover:border-sky-700 cursor-pointer hover:bg-sky-700 hover:text-white rounded-md"
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
        <button
          onClick={filterRemoval}
          className="border-sky-700 border-2 p-2 rounded-md hover:bg-sky-700 hover:text-white"
        >
          Clear Filters
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
