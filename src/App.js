import React, { useState } from 'react';
import './App.css'

const user = {
  name: 'Ale',
  age: 32,
  sex: 'female',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 180,
};

export default function App() {
  const [count, setCount] = useState(0)
  let isLoggedIn = true;
  let content;
  const arrA = [8, 10, 20];
  if (isLoggedIn) {
    content = <AdminPanel/>;
  }
  else {
    content = <LoginForm />;
  }

  const products = [
    { title: 'Jamon', id: 1},
    { title: 'Queso', id: 2},
    { title: 'Mantequilla', id: 3},
  ];

  const listProductItems = products.map((object) => (
    <li key={object.key}>{object.title}</li>
  ))

  function handleClick() {
    alert('You just clicked me.');
  }

  function handleClickButton() {
    setCount(count + 1);
  }

  return (
    <>
      {/*{content*/}

      {isLoggedIn ? (
        <>
          <AdminPanel/>
        </>
      ) : (
          <>
            <LoginForm/>
          </>
        )
      }
      {arrA.map((number, index) => (
          <li key={number}>something in {index} which contains value: {number}</li>
        ))}
      yap!
      {
        products.map((object) => (
          <li key={object.key}>{object.title}</li>
        ))
      }
      repeating back again...:
      {listProductItems}

      Shopping list;
      <ShoppingList/>

      end of shoppping list

      <h1>Yes {user.sex === 'female' ? 'Lady' : 'Sir'}: {user.name} ({user.age})</h1>
      <img
        className='avatar'
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <button onClick={handleClick} className="avatar">Yep a button</button>
      <MyHelloWorld/>
      <h1>Handle click independently</h1>
      <MyButton/>
      <MyButton/>

      --
      <h1>Handle click from my App</h1>
      <MyButtonHandleIndependently count={count} onClick={handleClickButton}/>
      <MyButtonHandleIndependently count={count} onClick={handleClickButton}/>

    </>
  );
}

export function MyHelloWorld() {
  return (
    <div>yeah</div>
  );
}

export function AdminPanel() {
  return (
    <>
      <h1>Admin Panel</h1>
      <button onClick="alert('User Management')">Manage Users</button>
      <button onClick="alert('Settings')">Settings</button>
    </>
  )
}

export function LoginForm() {
  function handleClick() {
    alert('handleClick on LoginForm')
  }

  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <form action="/login" method="post">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required/>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required/>

          <input onClick={handleClick} type="submit" value="Login"/>
        </form>
      </div>
    </>
  );
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export function MyButton() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>
        The count is {count}
      </button>
    </>
  )
}

export function MyButtonHandleIndependently({count, onClick}) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  )
}