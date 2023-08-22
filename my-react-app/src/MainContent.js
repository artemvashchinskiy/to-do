// import React, { useState, useEffect } from 'react';

// function MainContent() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem('tasks'));
//     if (storedTasks) {
//       setTasks(() => storedTasks);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   const handleAddTask = () => {
//     if (newTask.trim() !== '') {
//       setTasks([...tasks, { text: newTask, completed: false }]);
//       setNewTask('');
//     }
//   };

//   const handleRemoveTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   const handleToggleComplete = (index) => {
//     const updatedTasks = tasks.map((task, i) =>
//       i === index ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(updatedTasks);
//   };

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setNewTask(tasks[index].text);
//   };

//   const handleSave = (index) => {
//     const updatedTasks = tasks.map((task, i) =>
//       i === index ? { ...task, text: newTask } : task
//     );
//     setTasks(updatedTasks);
//     setEditIndex(null);
//     setNewTask('');
//   };

//   return (
//     <main>
//       <h2>To-Do List</h2>
//       <div>
//         <input
//           type="text"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           placeholder="Add a new task"
//         />
//         <button onClick={handleAddTask}>Add</button>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th style={{ width: '60%' }}>Task</th>
//             <th style={{ width: '10%' }}>Completed</th>
//             <th style={{ width: '10%' }}>Edit</th>
//             <th style={{ width: '10%' }}>Remove</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map((task, index) => (
//             <tr key={index} className={task.completed ? 'completed-task' : ''}>
//               <td>
//                 {editIndex === index ? (
//                   <input
//                     type="text"
//                     value={newTask}
//                     onChange={(e) => setNewTask(e.target.value)}
//                   />
//                 ) : (
//                   task.text
//                 )}
//               </td>
//               <td>
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => handleToggleComplete(index)}
//                 />
//               </td>
//               <td>
//                 {editIndex === index ? (
//                   <button onClick={() => handleSave(index)}>Save</button>
//                 ) : (
//                   <button onClick={() => handleEdit(index)}>Edit</button>
//                 )}
//               </td>
//               <td>
//                 <button onClick={() => handleRemoveTask(index)}>Remove</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {tasks.some((task) => task.completed) && (
//         <div>
//           <h2>Completed tasks</h2>
//           <table style={{ marginTop: '50px' }}>
//             <thead>
//               <tr>
//                 <th style={{ width: '60%' }}>Task</th>
//                 <th style={{ width: '10%' }}>Completed</th>
//                 <th style={{ width: '10%' }}>Edit</th>
//                 <th style={{ width: '10%' }}>Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tasks.map((task, index) =>
//                 task.completed && (
//                   <tr
//                     key={index}
//                     className={task.completed ? 'completed-task' : ''}
//                   >
//                     <td>{task.text}</td>
//                     <td>
//                       <input
//                         type="checkbox"
//                         checked={task.completed}
//                         onChange={() => handleToggleComplete(index)}
//                       />
//                     </td>
//                     <td>
//                       <button onClick={() => handleEdit(index)}>Edit</button>
//                     </td>
//                     <td>
//                       <button onClick={() => handleRemoveTask(index)}>
//                         Remove
//                       </button>
//                     </td>
//                   </tr>
//                 )
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </main>
//   );
// }

// export default MainContent;

/*
import React, { useState, useEffect } from 'react';

function MainContent() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editIndexCompleted, setEditIndexCompleted] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (text) => {
    const updatedTasks = tasks.filter((task) => task.text !== text);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (text) => {
    const updatedTasks = tasks.map((task) =>
      task.text === text ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewTask(tasks[index].text);
    setEditIndexCompleted(null);
  };

  const handleEditCompleted = (text) => {
    setEditIndexCompleted(text);
    setNewTask(tasks.find((task) => task.text === text).text);
    setEditIndex(null);
  };

  const handleSave = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newTask } : task
    );
    setTasks(updatedTasks);
    setEditIndex(null);
    setNewTask('');
  };

  const handleSaveCompleted = (text) => {
    const updatedTasks = tasks.map((task) =>
      task.text === text ? { ...task, text: newTask } : task
    );
    setTasks(updatedTasks);
    setEditIndexCompleted(null);
    setNewTask('');
  };

  const uncompletedTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <main>
      <h2>To-Do List</h2>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '60%' }}>Task</th>
            <th style={{ width: '10%' }}>Completed</th>
            <th style={{ width: '10%' }}>Edit</th>
            <th style={{ width: '10%' }}>Remove</th>
          </tr>
        </thead>
        <tbody>
          {uncompletedTasks.map((task, index) => (
            <tr key={task.text} className={task.completed ? 'completed-task' : ''}>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                  />
                ) : (
                  task.text
                )}
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task.text)}
                />
              </td>
              <td>
                {editIndex === index ? (
                  <button onClick={() => handleSave(index)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(index)}>Edit</button>
                )}
              </td>
              <td>
                <button onClick={() => handleRemoveTask(task.text)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {completedTasks.length > 0 && (
        <div>
          <h2>Completed tasks</h2>
          <table style={{ marginTop: '50px' }}>
            <thead>
              <tr>
                <th style={{ width: '60%' }}>Task</th>
                <th style={{ width: '10%' }}>Completed</th>
                <th style={{ width: '10%' }}>Edit</th>
                <th style={{ width: '10%' }}>Remove</th>
              </tr>
            </thead>
            <tbody>
              {completedTasks.map((task) => (
                <tr key={task.text} className="completed-task">
                  <td>
                    {editIndexCompleted === task.text ? (
                      <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                      />
                    ) : (
                      task.text
                    )}
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleComplete(task.text)}
                    />
                  </td>
                  <td>
                    {editIndexCompleted === task.text ? (
                      <button onClick={() => handleSaveCompleted(task.text)}>Save</button>
                    ) : (
                      <button onClick={() => handleEditCompleted(task.text)}>
                        {task.completed ? 'Edit' : 'Save'}
                      </button>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleRemoveTask(task.text)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

export default MainContent;
*/

import React, { useState, useEffect } from 'react';

function MainContent() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editIndexCompleted, setEditIndexCompleted] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (text) => {
    const updatedTasks = tasks.filter((task) => task.text !== text);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (text) => {
    const updatedTasks = tasks.map((task) =>
      task.text === text ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewTask(tasks[index].text);
    setEditIndexCompleted(null);
  };

  const handleEditCompleted = (text) => {
    setEditIndexCompleted(text);
    setNewTask(tasks.find((task) => task.text === text).text);
    setEditIndex(null);
  };

  const handleSave = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newTask } : task
    );
    setTasks(updatedTasks);
    setEditIndex(null);
    setNewTask('');
  };

  const handleSaveCompleted = (text) => {
    const updatedTasks = tasks.map((task) =>
      task.text === text ? { ...task, text: newTask } : task
    );
    setTasks(updatedTasks);
    setEditIndexCompleted(null);
    setNewTask('');
  };

  const uncompletedTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);
  const totalTasks = tasks.length;
  const completedPercentage = (completedTasks.length / totalTasks) * 100;

  return (
    <main>
      <h2>To-Do List</h2>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '60%' }}>Task</th>
            <th style={{ width: '10%' }}>Completed</th>
            <th style={{ width: '10%' }}>Edit</th>
            <th style={{ width: '10%' }}>Remove</th>
          </tr>
        </thead>
        <tbody>
          {uncompletedTasks.map((task, index) => (
            <tr key={task.text} className={task.completed ? 'completed-task' : ''}>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                  />
                ) : (
                  task.text
                )}
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task.text)}
                />
              </td>
              <td>
                {editIndex === index ? (
                  <button onClick={() => handleSave(index)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(index)}>Edit</button>
                )}
              </td>
              <td>
                <button onClick={() => handleRemoveTask(task.text)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      {completedTasks.length > 0 && (
        <div>
          <h2>Completed tasks</h2>
          <table style={{ marginTop: '50px' }}>
            <thead>
              <tr>
                <th style={{ width: '60%' }}>Task</th>
                <th style={{ width: '10%' }}>Completed</th>
                <th style={{ width: '10%' }}>Edit</th>
                <th style={{ width: '10%' }}>Remove</th>
              </tr>
            </thead>
            <tbody>
              {completedTasks.map((task) => (
                <tr key={task.text} className="completed-task">
                  <td>
                    {editIndexCompleted === task.text ? (
                      <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                      />
                    ) : (
                      task.text
                    )}
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleComplete(task.text)}
                    />
                  </td>
                  <td>
                    {editIndexCompleted === task.text ? (
                      <button onClick={() => handleSaveCompleted(task.text)}>Save</button>
                    ) : (
                      <button onClick={() => handleEditCompleted(task.text)}>
                        {task.completed ? 'Edit' : 'Save'}
                      </button>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleRemoveTask(task.text)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '50px',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100px',
            height: '150px',
            backgroundColor: 'black',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <div
            className="sand top"
            style={{
              position: 'absolute',
              bottom: '50%',
              width: '100%',
              height: `${completedPercentage}%`,
              backgroundColor: 'yelloworange',
            }}
          />
          <div
            className="glass"
            style={{
              position: 'absolute',
              width: '80px',
              height: '120px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
            }}
          />
          <div
            className="sand bottom"
            style={{
              position: 'absolute',
              top: '50%',
              width: '100%',
              height: `${100 - completedPercentage}%`,
              backgroundColor: 'black',
            }}
          />
        </div>
        <p style={{ marginTop: '10px', color: 'white' }}>
          {Math.round(completedPercentage)}% of work remains to do...
        </p>
      </div>
    </main>
  );
}

export default MainContent;