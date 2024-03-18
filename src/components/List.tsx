import { ITask } from "../App";
import styles from "./List.module.css"
import { Check, Trash } from "@phosphor-icons/react";

interface ListProps {
  data: ITask;
  handleRemoveOneTask: (id: string) => void;
  handleCheckedOneTask: (id: string) => void;
}

export function List({
  data, 
  handleRemoveOneTask, 
  handleCheckedOneTask 
}: ListProps) {
  const checkboxCheckedClassname = data.isChecked
  ? styles['checkbox-checked']
  : styles['checkbox-unchecked']

  const paragraphCheckedClassname = data.isChecked
  ? styles['paragraph-checked']
  : ''

  function handleRemove() {
    handleRemoveOneTask(data.id)
  }
  function handleChecked() {
    handleCheckedOneTask(data.id)
  }

  return (
    <div className={styles.task}>
      <div>
        <label onClick={handleChecked} htmlFor="checkbox">
          <input 
            readOnly
            type="checkbox" 
            checked={data.isChecked}
          />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {data.isChecked &&  <Check size={12} />}
          </span>

          <p className={`${paragraphCheckedClassname}`}>
            {data.description}
          </p>
        </label>
      </div>

      <button
        onClick={handleRemove}
        title="Excluir tarefa"
      >
        <Trash size={24} />
      </button>
  </div>

  )
}