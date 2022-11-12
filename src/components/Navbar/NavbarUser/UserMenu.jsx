//redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/auth-operations";
import { getUser } from "redux/auth/auth-selectors";

export default function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    console.log("h[hphphphp",user)

    
    const onLogout = () => {
        dispatch(logout());
    }

  return (
    <div>
      {user && `${user.email} `}
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}
