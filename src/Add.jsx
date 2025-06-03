import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddItem = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const navigate = useNavigate();

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    addTodo(newTodo);
    navigate('/');
  };

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      maxWidth: '600px',
      margin: '40px auto',
      padding: '25px',
      backgroundColor: '#FFF9C4',
      borderRadius: '12px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      color: '#333',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      paddingBottom: '15px',
      borderBottom: '1px solid #eee',
    },
    appTitle: {
      fontSize: '2em',
      color: 'black',
      marginBottom: '8px',
    },
    addTodoSection: {
      display: 'flex',
      marginBottom: '30px',
      gap: '10px',
    },
    addTodoInput: {
      flexGrow: 1,
      padding: '12px 15px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '1em',
      outline: 'none',
      transition: 'border-color 0.3s ease',
    },
    addButton: {
      padding: '12px 25px',
      backgroundColor: '#FFFD75',
      color: '#yellow',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1em',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.appTitle}>Add New Task</h1>
      </header>
      
      <div style={styles.addTodoSection}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
          style={styles.addTodoInput}
        />
        <button onClick={handleAddTodo} style={styles.addButton}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddItem;