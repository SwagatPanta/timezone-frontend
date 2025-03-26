import React from 'react';
import './App.css';
import Header from './components/Header';
import UserCard from './components/UserCard';

function App() {
  const users = [
    { id: 1, name: 'Alice', age: 25, location: 'Kathmandu' },
    { id: 2, name: 'Bob', age: 30, location: 'Pokhara' },
    { id: 3, name: 'Charlie', age: 28, location: 'Lalitpur' },
  ];

  return (
    <div className="App">
      <Header title="User Dashboard" />
      <div className="user-list">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
