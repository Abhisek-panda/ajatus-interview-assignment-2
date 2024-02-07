import { useData } from "../main";

const TableData = () => {
  const { filteredUsers } = useData();
  const newFilteredUsers = filteredUsers();
  return (
    <>
      {newFilteredUsers?.length === 0 ? (
        <h1> Nothing to Show</h1>
      ) : (
        <>
          <table>
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
            {newFilteredUsers?.map((user) => {
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
