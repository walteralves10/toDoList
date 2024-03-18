import './Header.module.css'
import rocket from '../assets/rocket.svg'

export function Header() {
  return (
    <header>
        <img src={rocket} alt="logotipo RocketSeat" />
        <div>
            <span>to</span>
            <span>do</span>
        </div>
    </header>
  )
}