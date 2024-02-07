import { useData } from "../main";

const Pagination = () => {
  const { pageData, setPageData, users, filteredUsers } = useData();
  const newUsers = filteredUsers();
  const totalUsers = users.length;
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalUsers / pageData?.usersPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex gap-2 mt-4 justify-center items-center ">
      {newUsers?.length === 0 ? (
        ""
      ) : (
        <>
          {pages.map((page, index) => {
            return (
              <div key={index}>
                <button
                  className={`border-2 rounded-sm border-sky-700 px-4 py-1 ${
                    pageData?.currentPage == page ? "bg-sky-700 text-white" : ""
                  }`}
                  onClick={() =>
                    setPageData({ ...pageData, currentPage: page })
                  }
                >
                  {page}
                </button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Pagination;
