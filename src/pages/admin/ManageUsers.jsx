// src/pages/admin/ManageUsers.jsx
import { useEffect, useState } from 'react';
import { getAllUsers, deleteUser } from '../../services/api';

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers((u) => u.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Users</h1>
      <table className="w-full bg-white rounded-lg shadow">
        <thead>
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="p-4">{u.name}</td>
              <td className="p-4">{u.email}</td>
              <td className="p-4">
                <button
                  onClick={() => handleDelete(u.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}