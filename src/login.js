import React, { useState } from 'react';
import { navigate } from '@reach/router';

const appStyles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '5rem',
};

function Login() {
  const [name, setName] = useState(undefined);

  function isValidUserName(name) {
    return name === 'bruce wayne'
  }

  function handleLogin() {
    if (isValidUserName(name)) {
      navigate("category", { state: { isAuth: true } });
    }
  }

  return (
    <div style={appStyles}>
      <form
        style={{
          height: 'fit-content',
          border: '1px solid black',
          padding: '2rem',
        }}
        onSubmit={e => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <h1>
          login
        </h1>
        <p>
          <label htmlFor='username'>username</label>

          <input
            id='username'
            onChange={e => {
              setName(e.target.value);
            }}
            style={{
              marginLeft: '1rem',
            }}
          />
        </p>
        <p>
          <button
            onClick={handleLogin}
            style={{
              width: '100%',
            }}
          >
            login
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
