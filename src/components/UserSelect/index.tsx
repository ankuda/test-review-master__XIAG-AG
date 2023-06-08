import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './UserSelect.module.css';

const UserSelect: React.FC<UserSelectProps> = ({ idx, user }) => {
    const dispatch = useDispatch();
    const todos = useSelector((state: AppState) => state.list.todos);

    const [options, setOptions] = useState([]);

    useEffect(() => {
        console.log('userSelect');
        fetch('https://jsonplaceholder.typicode.com/users/').then(
            (users) => users.json(),
        ).then(users => setOptions(users))
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const changedTodos = todos.map((t, index) => {
            const res = { ...t }
            if (index === idx) {
                console.log('props.user', user);
                res.user = e.target.value;
            }
            return res;
        });

        dispatch({type: 'CHANGE_TODO', payload: changedTodos})
    };

    return (
        <select name="user" className={styles.user} onChange={handleChange}>
            {options.map((user: any) => <option key={user.id} value={user.id}>{user.name}</option>)}
        </select>
    );
};

export default UserSelect;
