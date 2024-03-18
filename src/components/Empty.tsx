import { ClipboardText } from "@phosphor-icons/react"
import styles from "./Empty.module.css"

export function Empty() {
  return (
    <div className={styles.empty}>
        <ClipboardText size={56} />
        <p>
          <span>Você ainda não tem tarefas cadastradas</span>
          Crie tarefas e organize seus itens a fazer
        </p>
    </div>
  )
}