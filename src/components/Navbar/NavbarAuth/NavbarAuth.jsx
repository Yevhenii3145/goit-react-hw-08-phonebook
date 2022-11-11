import { NavLink } from "react-router-dom"
import styles from '../navbar.module.scss'

export default function NavbarAuth({trowStyle}) {
  return (
    <div>
        <NavLink className={trowStyle} to="/register">Register</NavLink>
        <NavLink className={trowStyle} to="/login">Login</NavLink>
    </div>
  )
}
