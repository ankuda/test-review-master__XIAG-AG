import React, { useState } from 'react';

import styles from './InputNewTodo.module.css';

const InputNewTodo: React.FC<InputNewTodoProps> = ({ todoTitle, onChange, onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    
    setValue(value);
    onChange(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') {
      return;
    }

    event.preventDefault();

    if (value) {
      onSubmit({
        title: value,
        isDone: false,
      });
      onChange('');
      setValue('');
    }
  };

  return (
    <input
      className={styles.newTodo}
      type="text"
      value={todoTitle}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="What needs to be done?"
    />
  );
};

export default InputNewTodo;
