import React from 'react';

// Завдання 1: Відображення динамчного контенту

function App() {
  return (
    <div>
      <UserCard name="Andrey" age="32" />
      <StyledText />
      <ShowList />
    </div>
  );
}

function UserCard(props) {
  return <p>
          Ім'я користувача: {props.name},
          <br/>
          {props.age}
         </p>;
}

// Завдання 2: Додавання стилів
function StyledText() {
  const styles = {
    color: 'blue',
    fontsize: '20px'
  };

  return <p style={styles}>COLOR!</p>;
}

// Завдання 3: Відображення списку
function ShowList() {
  const items = ['1', '2', '3'];

  const list = (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return list;
}

export default App;
