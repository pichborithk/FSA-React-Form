import { useState } from 'react';
import ReactDOM from 'react-dom';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <div id='container'>
      <div id='navbar'>Form.js</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          name='username'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

ReactDOM.render(<Form />, document.getElementById('app'));
