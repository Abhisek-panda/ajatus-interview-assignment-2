import { useData } from "../main";

const TableData = () => {
  const { filteredUsers, firstUserIndex, lastUserIndex } = useData();
  const usersFiltered = filteredUsers();
  const slicedUsers = usersFiltered.slice(firstUserIndex, lastUserIndex);
  return (
    <>
      {usersFiltered?.length === 0 ? (
        <h1> Nothing to Show</h1>
      ) : (
        <>
          <table className="mx-4">
            <thead className="text-left">
              <tr>
                <th className="">Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>University</th>
                <th>Weight</th>
                <th>Email</th>
                <th>Height</th>
              </tr>
            </thead>
            {slicedUsers?.map((user) => {
              return (
                <tbody key={user?.id}>
                  <tr>
                    <td>{user?.id}</td>
                    <td>
                      {user?.firstName} {user?.lastName}
                    </td>
                    <td>{user?.age}</td>
                    <td>{user?.university}</td>
                    <td>{user?.weight}</td>
                    <td>{user?.email}</td>
                    <td>{user?.height}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </>
      )}
    </>
  );
};

export default TableData;
