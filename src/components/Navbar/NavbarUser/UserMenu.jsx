//redux
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/auth-operations";

export default function UserMenu() {
    const dispatch = useDispatch();
    
    const onLogout = () => {
        dispatch(logout());
    }
  return (
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}
