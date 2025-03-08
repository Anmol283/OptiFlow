import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Calendar.css';

const Calendar = ({ tasks }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Get days in month
    const getDaysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    // Get first day of month (0 = Sunday, 1 = Monday, etc.)
    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    // Generate calendar days
    const generateCalendar = () => {
        const daysInMonth = getDaysInMonth(currentDate);
        const firstDay = getFirstDayOfMonth(currentDate);
        const days = [];
        
        // Add empty cells for days before the 1st
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const dayTasks = tasks.filter(task => task.dueDate === dateStr);
            const taskCount = dayTasks.length; // Count tasks for this day

            days.push(
                <div key={day} className="calendar-day">
                    <span className="day-number">{day}</span>
                    {taskCount > 0 && (
                        <span className="task-count">{taskCount} {taskCount === 1 ? 'task' : 'tasks'}</span>
                    )}
                </div>
            );
        }

        return days;
    };

    // Navigation handlers
    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    return (
        <>
            <Navbar />
            <div className="calendar-container">
                <div className="calendar-header">
                    <button onClick={prevMonth}>←</button>
                    <h1>
                        {currentDate.toLocaleString('default', { month: 'long' })} 
                        {' '}
                        {currentDate.getFullYear()}
                    </h1>
                    <button onClick={nextMonth}>→</button>
                </div>
                <div className="calendar-grid">
                    <div className="calendar-day header">Sun</div>
                    <div className="calendar-day header">Mon</div>
                    <div className="calendar-day header">Tue</div>
                    <div className="calendar-day header">Wed</div>
                    <div className="calendar-day header">Thu</div>
                    <div className="calendar-day header">Fri</div>
                    <div className="calendar-day header">Sat</div>
                    {generateCalendar()}
                </div>
            </div>
        </>
    );
};

export default Calendar;