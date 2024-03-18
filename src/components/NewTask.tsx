import { PlusCircle } from '@phosphor-icons/react'
import styles from './NewTask.module.css'
import { ChangeEvent, useState } from 'react';

interface NewTaskProps {
  handleAddNewTask: (description: string) => void;
}

export function NewTask({ handleAddNewTask }: NewTaskProps) {
  const [description, setDescription] = useState('')
  
  function handleAdd() {
    setDescription('')
    handleAddNewTask(description)
  }

  function handleDescription(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value)
  }

  return (
    <div className={styles.newTask}>
      <input 
        onChange={handleDescription}
        value={description}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button onClick={handleAdd}>
        Criar
        <PlusCircle size={16} />
      </button>
    </div>
  )
}