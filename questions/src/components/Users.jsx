import useFetch from "./useFetch";

const Users = () => {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <h2 className="text-2xl">Users</h2> <br/>
      
      {data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}

    </div>
  );
};

export default Users;
