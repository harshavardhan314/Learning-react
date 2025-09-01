import React, { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

function Fetch() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userHandle = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const newData = await response.json();
      setUser(newData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    userHandle();
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {loading && <div>Loading...</div>}

      {!loading && error && <div style={{ color: "red" }}>{error}</div>}

      {!loading &&
        !error &&
        user.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>User ID: {item.id}</h3>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Username: {item.username}</p>
          </div>
        ))}
    </div>
  );
}

export default Fetch;
