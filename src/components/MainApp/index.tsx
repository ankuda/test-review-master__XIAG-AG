import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';

import InputNewTodo from '../InputNewTodo';
import UserSelect from '../UserSelect';

import { addTodo, changeTodos } from '../../store';

import styles from './MainApp.module.css';

const MainApp: React.FC = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: any) => state.list.todos);

    const [todoTitle, setTodoTitle] = useState('');

    const handleTodoTitle = (title: string) => {
        setTodoTitle(title);
    };

    const handleSubmitTodo = (todo: any) => {
        dispatch(addTodo(todo));
    };

    const onChange = (idx: number) => () => {
        const changedTodos = todos.map((t: any, index: number) => {
            if (index === idx) {
                return { ...t, isDone: !t.isDone };
            }

            return t;
        });

        dispatch(changeTodos(changedTodos));
    };

    const allTodosIsDone = todos?.every((t: any) => t.isDone);

    return (
        <div>
            <Form.Check 
                label="all todos is done!" 
                checked={allTodosIsDone} 
            />
            <hr />
            <InputNewTodo 
                todoTitle={todoTitle} 
                onChange={handleTodoTitle} 
                onSubmit={handleSubmitTodo} 
            />
            {todos?.map((t: any, idx: number) => (
                <div key={`${t.title}_${idx}`} className={styles.todo}>
                    {t.title}
                    <UserSelect user={t.user} idx={idx} />
                    <Form.Check
                        className={styles.todoCheckbox}
                        checked={t.isDone}
                        onChange={onChange(idx)}
                    />
                </div>
            ))}
        </div>
    );
};

export default MainApp;
