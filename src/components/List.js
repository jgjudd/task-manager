import React from 'react';
import TaskCard from './TaskCard';

const List = ({title}) => {
    return (
        <div style={style.container}>
            <h2>{title}</h2>
            <TaskCard />
        </div>
    );
}

const style = {
    container: {
        backgroundColor: '#eee',
        borderRadius: 3,
        width: 300,
        padding: 8
    }
}

export default List;