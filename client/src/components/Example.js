import {React, useState, useEffect} from 'react';
import '../styles/App.scss';
import axios from "axios";

export default function Example() {
  const [users, setUsers] = useState([]);
  const apiEndPoint = "api/users";
  useEffect(() => {
    const getUsers = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setUsers(res.users);
    };
    getUsers();
  }, []);

  const addUser = async () => {
    const user = { user_name: "New_user", first_name: "New_user", last_name: "New_user", email: "New_user", password: "New_user", profile_img_url: "New_user", age: 28, gender: "New_user", height: 71, weight: 200, country: "New_user", fitness_goal: "New_user", diet_type: "New_user", primary_workout: "New_user", about_me: "New_user", tips: "New_user", future_goals: "New_user" };
    await axios.post(apiEndPoint, user);
    setUsers([user, ...users]);
  };

  const handleUpdate = async (post) => {
    post.first_name = "Updated";
    console.log(post.id);
    await axios.put(apiEndPoint + "/" + post.id, { user_name: "New_user", first_name: "Updated", last_name: "New_user", email: "New_user", password: "New_user", profile_img_url: "New_user", age: 28, gender: "New_user", height: 71, weight: 200, country: "New_user", fitness_goal: "New_user", diet_type: "New_user", primary_workout: "New_user", about_me: "New_user", tips: "New_user", future_goals: "New_user" });
    const postsClone = [...users];
    console.log("postclone:", postsClone);
    const index = postsClone.indexOf(post);
    console.log("index:", index);
    postsClone[index] = { ...post };
    console.log("postsClone[index]:", postsClone[index]);
    setUsers(postsClone);
    console.log("users:", users);
  };

  if (users.length === 0) return <h2> there are no post in the Database </h2>;
  return (
    <>
      <div className="container">
        <h2> there are {users.length} post in the Database </h2>
        <button onClick={addUser} className="btn btn-primary btn-sm">
          Add Post
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {users.map((post) => (
              <tr>
                <td> {post.first_name} </td>
                <td>
                  <button
                    onClick={() => handleUpdate(post)}
                    className="btn btn-info btn-sm"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
