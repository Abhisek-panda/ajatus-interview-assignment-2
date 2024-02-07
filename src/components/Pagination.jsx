import { useData } from "../main";

const Pagination = () => {
  const { pageData, setPageData, users } = useData();
  const totalUsers = users.length;
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalUsers / pageData?.usersPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex ">
      {pages.map((page, index) => {
        return (
          <div key={index}>
            <button
              onClick={() => setPageData({ ...pageData, currentPage: page })}
            >
              {page}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
