import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const tickImageUrl = 'https://cdn-icons-png.flaticon.com/512/845/845646.png';

const HomePage = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState('');
  const navigate = useNavigate();

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;

    const newId = Math.max(...todos.map(todo => todo.id)) + 1;
    const todoItem = {
      id: newId,
      todo: newTodo,
      completed: false,
      userId: 1,
    };
    setTodos([todoItem, ...todos]);
    setNewTodo('');
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);

  const completedTodos = todos.filter((todo) => todo.completed);
  const incompleteTodos = todos.filter((todo) => !todo.completed);

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.appTitle}>To-Do </h1>
        <p style={styles.date}>{formattedDate}</p>
      </header>

      <div style={styles.taskListContainer}>
        {todos.length === 0 ? (
          <p style={styles.emptyState}>
            You completed! Time to add new tasks.
          </p>
        ) : (
          <>
            {incompleteTodos.length > 0 && (
              <h2 style={styles.sectionTitle}>Tasks </h2>
            )}
            {incompleteTodos.map((todo) => (
              <div key={todo.id} style={styles.todoItem}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                  style={styles.checkbox}
                />
                <span style={styles.todoText}>{todo.todo}</span>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  style={styles.deleteButton}
                  aria-label="Delete todo"
                >
                  &#x2715;
                </button>
              </div>
            ))}

            {completedTodos.length > 0 && (
              <h2 style={styles.sectionTitle}>
                Task Completed ✅ ✅  ✅ ({completedTodos.length})
              
              </h2>
            )}
            {completedTodos.map((todo) => (
              <div
                key={todo.id}
                style={{ ...styles.todoItem, ...styles.completedTodoItem }}
              >
                <img
                  src={tickImageUrl}
                  alt="Completed"
                  style={styles.tickImage}
                  onClick={() => handleToggleComplete(todo.id)}
                  title="Mark as incomplete"
                />
                <span style={{ ...styles.todoText, ...styles.completedTodoText }}>
                  {todo.todo}
                </span>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  style={styles.deleteButton}
                  aria-label="Delete todo"
                >
                  &#x2715;
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: '650px',
    margin: '50px auto',
    padding: '30px 35px',
    backgroundColor: '#FFF9C4',  // light pastel yellow
    borderRadius: '16px',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',  // softer shadow
    color: '#5D4037',  // dark brown for good contrast on yellow
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    borderBottom: '2px solid #FBC02D', // warm yellow border
    paddingBottom: '20px',
  },
  appTitle: {
    fontSize: '3rem',
    fontWeight: '900',
    color: 'black',  // bright yellow
    marginBottom: '8px',
    letterSpacing: '1.2px',
  },
  date: {
    fontSize: '1.1rem',
    color: 'black',  // medium brown for readability
    fontWeight: '600',
  },
  taskListContainer: {
    marginTop: '15px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    color: '#6D4C41',  // dark brown
    marginBottom: '20px',
    borderBottom: '1px solid #FBC02D', // yellow underline
    paddingBottom: '6px',
    marginTop: '40px',
    fontWeight: '700',
  },
  todoItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFEB3B',  // bright yellow box
    padding: '16px 22px',
    borderRadius: '12px',
    marginBottom: '14px',
    boxShadow: '0 6px 12px rgba(255, 235, 59, 0.3)', // subtle yellow shadow
    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
    cursor: 'default',
  },
  todoItemHover: {
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 18px rgba(255, 235, 59, 0.5)', // stronger on hover
  },
  completedTodoItem: {
    backgroundColor: '#FFF59D', // lighter yellow for completed
    boxShadow: '0 4px 10px rgba(251, 192, 45, 0.3)',
    borderLeft: '6px solid #FBC02D',
  },
  checkbox: {
    marginRight: '20px',
    width: '24px',
    height: '24px',
    cursor: 'pointer',
    accentColor: '#FBC02D',
  },
  tickImage: {
    width: '24px',
    height: '24px',
    marginRight: '20px',
    cursor: 'pointer',
    filter: 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.15))',
    transition: 'transform 0.2s ease',
  },
  todoText: {
    flexGrow: 1,
    fontSize: '1.25rem',
    wordBreak: 'break-word',
    color: 'black',  // dark brown text for readability
  },
  completedTodoText: {
    textDecoration: 'line-through',
    color: '#8D6E63',  // lighter brown for completed tasks
    fontStyle: 'italic',
  },
  deleteButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#D32F2F',  // a strong red that contrasts well
    fontSize: '1.5rem',
    cursor: 'pointer',
    marginLeft: '20px',
    padding: '5px 8px',
    borderRadius: '50%',
    transition: 'color 0.2s ease, background-color 0.2s ease',
  },
  deleteButtonHover: {
    color: '#B71C1C',
    backgroundColor: '#FFEBEE',
  },
  emptyState: {
    textAlign: 'center',
    color: '#000000', // medium brown
    fontSize: '1.3rem',
    marginTop: '70px',
    padding: '30px',
    backgroundColor: '#FFFDE7', // pale yellow
    borderRadius: '14px',
    fontWeight: '600',
  },
};


export default HomePage;
