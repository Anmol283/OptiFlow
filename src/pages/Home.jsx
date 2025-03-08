import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = ({ tasks, setTasks }) => {
    const [newTask, setNewTask] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [dueDate, setDueDate] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { text: newTask, priority, dueDate, status: 'todo' }]);
            resetForm();
        }
    };

    const resetForm = () => {
        setNewTask('');
        setPriority('Medium');
        setDueDate('');
        setIsModalOpen(false);
    };

    const changeTaskStatus = (task, newStatus) => {
        const updatedTasks = tasks.map(t => t.text === task.text ? { ...t, status: newStatus } : t);
        setTasks(updatedTasks);
    };

    const renderTasks = (status) => (
        tasks.filter(task => task.status === status).map((task, index) => (
            <li key={index} className={task.priority.toLowerCase()}>
                <span className="task-name">{task.text}</span>
                <span className="task-date">{task.dueDate} </span>
                <div className="status-buttons">
                    {status !== 'todo' && <button className="status-btn todo" onClick={() => changeTaskStatus(task, 'todo')} title="Move to To-Do">●</button>}
                    {status !== 'progress' && <button className="status-btn progress" onClick={() => changeTaskStatus(task, 'progress')} title="Move to In Progress">●</button>}
                    {status !== 'completed' && <button className="status-btn completed" onClick={() => changeTaskStatus(task, 'completed')} title="Move to Completed">●</button>}
                </div>
            </li>
        ))
    );

    return (
        <div className="home-container">
            <Navbar />
            <p className="note">
                Click on the <span className="blue-dot">●</span> to move to In Progress, 
                <span className="grey-dot">●</span> to move to Completed, and 
                <span className="pink-dot">●</span> for To-Do.
            </p>
            <div className="task-container">
                {['todo', 'progress', 'completed'].map(status => (
                    <div key={status} className={`task-column ${status}`}>
                        <h2>{status.charAt(0).toUpperCase() + status.slice(1)}</h2>
                        <ul>{renderTasks(status)}</ul>
                        {status === 'todo' && <button className="add-task-btn" onClick={() => setIsModalOpen(true)}>+</button>}
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Add New Task</h2>
                        <input type="text" placeholder="Task Name" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                        <button className="adding" onClick={addTask}>Add Task</button>
                        <button className="close-btn" onClick={resetForm}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
