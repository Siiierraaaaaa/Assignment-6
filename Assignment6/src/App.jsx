

import useLocalStorageState  from './custom-hooks/useLocalStorage';



function App() {

const [username, setUsername] = useLocalStorageState('username', '');




  const handleUsernameChange = (event) => {

    setUsername(event.target.value);

  };



  return (

    <div>

      <h1>Welcome!</h1>

      <InputWithLabel

        id="username"

        value={username}

        onInputChange={handleUsernameChange}

      >

        Username:

      </InputWithLabel>

      <p>Hello, {username || 'Guest'}!</p>

    </div>

  );

}



function InputWithLabel(props) {

  return (

    <>

      <label htmlFor={props.id}>{props.children}</label>

      <input

        id={props.id}

        type="text"

        value={props.value}

        onChange={props.onInputChange}

      />

    </>

  );

}
export default App;