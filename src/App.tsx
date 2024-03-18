import { Empty } from './components/Empty'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

import styles from './App.module.css'
import { List } from './components/List'
import { useState } from 'react'

export interface ITask {
  id: string;
  description: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function handleAddNewTask(description: string) {
    const newTask: ITask = {
      id: new Date().getTime().toString(),
      description,
      isChecked: false
    }

    setTasks([...tasks, newTask])
  }

  function handleCheckedOneTask(id: string) {
    const filterTask = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isChecked: !task.isChecked
        }
      }

      return task
    });

    setTasks(filterTask)
  }

  function handleRemoveOneTask(id: string) {
    const deleteTask = tasks.filter(task => task.id !== id);

    setTasks(deleteTask);
  }

  const numberOfTasksCompleted = tasks.filter(task => task.isChecked === true).length
  const allTasks = tasks.length

  return (
      <div className={styles.app}>
        <Header />
        <NewTask 
          handleAddNewTask={handleAddNewTask}
        />

        <main>
          <div className={styles.info}>
            <p>
              Tarefas criadas <span>{allTasks}</span>
            </p>
            <p>
              Concluídas <span>{numberOfTasksCompleted} de {allTasks}</span>
            </p>
          </div>

          <div className={styles.itens}>
            {
            !tasks.length ? (
              <Empty />
            ) : (
              tasks.map(task => (
                <List 
                  key={task.id}
                  data={task}
                  handleCheckedOneTask={handleCheckedOneTask}
                  handleRemoveOneTask={handleRemoveOneTask}
                />
              ))
            )
            }
          </div>
        </main>

      </div>
  )
}

export default App
