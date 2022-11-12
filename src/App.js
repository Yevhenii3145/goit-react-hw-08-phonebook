import { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { current } from "redux/auth/auth-operations"; 
import { getLoadingUserStatus } from "redux/auth/auth-selectors";

import Navbar from "./components/Navbar/Navbar"
import UserRoutes from "./UserRoutes";

export default function App() {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(getLoadingUserStatus);

  useEffect(() => {
    dispatch(current());
  }, [dispatch])

  return (
      <div>
        {isLoadingUser ? <p>loading...</p> : (
          <>
            <Navbar />
            <UserRoutes />
          </>
        )}
      </div>
  );
}
