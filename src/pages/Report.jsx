import React from 'react';
import Navbar from '../components/Navbar'
import './Report.css';

const Report = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.status === 'completed').length;
  const progressPercentage = totalTasks ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="report-container">
      <Navbar/>
      <h1>Report Page</h1>

      <h2>Task Status</h2>
      <div className="progress-section">
        <label>Task Completion Progress: {completedTasks} / {totalTasks} ({progressPercentage.toFixed(1)}%)</label>
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Task List Preview */}
      <div className="task-list">
        <h2>All Tasks</h2>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className={`task-item ${task.status}`}>
              <div className="task-status-indicator"></div>
              <div className="task-details">
                <span className="task-text">{task.text}</span>
                <span className="task-info">Priority: {task.priority}</span>
                <span className="task-info">Due: {task.dueDate || 'N/A'}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default Report;