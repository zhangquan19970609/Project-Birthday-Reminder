import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [users, setUsers] = useState(data);

  const handleClear = () => {
    setUsers([]);
  }

  return <List users={users} handleClear={handleClear}/>
}

export default App;
