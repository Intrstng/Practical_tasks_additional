import React, {FC} from 'react';
import {DataType} from '../App';

type TasksProps = {
    data: DataType
}

export const Tasks: FC<TasksProps> = (props) => {
    return (
        <div>
            <div className={'todo'}>
                <h3>
                    {props.data.title}
                </h3>

                <ul>
                    { props.data.tasks.map((task, idx) => {
                        return (
                            <li key={idx}>
                                <input type='checkbox' checked={task.isDone}/>
                                    <span>{task.title}</span>
                                <button>x</button>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
            <ul>
                {
                    props.data.students.map((student, idx) => {
                        return (
                            <li key={idx}>
                                {student}
                            </li>
                        )
                })
                }
            </ul>
        </div>
    );
};