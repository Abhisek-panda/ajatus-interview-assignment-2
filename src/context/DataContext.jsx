import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    sorting: "",
    search: "",
  });
  const [pageData, setPageData] = useState({
    currentPage: 1,
    usersPerPage: 5,
  });

  const lastUserIndex = pageData?.currentPage * pageData?.usersPerPage;
  const firstUserIndex = lastUserIndex - pageData?.usersPerPage;
  const currentUsers = users?.slice(firstUserIndex, lastUserIndex);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/users");
        setUsers(res?.data?.users);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        console.error(error.message);
      }
    };
    getData();
  }, []);

  const filteredUsers = () => {
    const newUsers = [...currentUsers];

    const searchData =
      filters?.search !== ""
        ? [...newUsers]?.filter(
            (user) =>
              user?.university
                ?.toLowerCase()
                .includes(filters?.search?.toLowerCase()) ||
              user?.firstName
                ?.toLowerCase()
                .includes(filters?.search?.toLowerCase()) ||
              user?.lastName
                ?.toLowerCase()
                .includes(filters?.search?.toLowerCase()) ||
              user?.email
                ?.toLowerCase()
                .includes(filters?.search?.toLowerCase())
          )
        : newUsers;

    const sortedData = filters?.sorting
      ? filters?.sorting === "name"
        ? [...searchData].sort((a, b) =>
            a?.firstName?.localeCompare(b?.firstName)
          )
        : filters?.sorting === "age"
        ? [...searchData].sort((a, b) => a?.age - b?.age)
        : filters?.sorting === "university"
        ? [...searchData].sort((a, b) =>
            a?.university?.localeCompare(b?.university)
          )
        : filters?.sorting === "weight"
        ? [...searchData].sort((a, b) => a?.weight - b?.weight)
        : filters?.sorting === "email"
        ? [...searchData].sort((a, b) => a?.email?.localeCompare(b?.email))
        : [...searchData].sort((a, b) => a?.height - b?.height)
      : searchData;

    return sortedData;
  };

  return (
    <DataContext.Provider
      value={{
        users,
        setUsers,
        filters,
        setFilters,
        loading,
        setLoading,
        filteredUsers,
        pageData,
        setPageData,
        currentUsers,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
