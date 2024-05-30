import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert('이메일을 입력하세요.');
      return;
    }

    if (!password.trim()) {
      alert('비밀번호를 입력하세요.');
      return;
    }

    if (password.length < 8) {
      alert('8자 이상 입력해 주세요.');
      return;
    }

    if (password !== passwordConfirm) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    alert(`이메일은 ${email}이고, 비밀번호는 ${password}입니다.`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">이메일: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm">비밀번호 확인: </label>
          <input
            type="password"
            id="passwordConfirm"
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
      <TodoList />
    </div>
  );
}

function TodoList() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '잠자기',
      completed: true,
    },
    {
      id: 2,
      text: '일찍 일어나기',
      completed: false,
    },
  ]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="할 일을 추가하세요."
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
            <button onClick={() => handleToggleTodo(todo.id)}>
              {todo.completed ? '취소' : '완료'}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
