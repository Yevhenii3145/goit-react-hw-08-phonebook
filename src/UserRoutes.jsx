import { lazy, Suspense } from "react";
import {Routes, Route} from "react-router-dom";
// import RegisterPage from "./pages/RegisterPage/RegisterPage"
// import LoginPage from "./pages/LoginPage/LoginPage"
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"

const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'))
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
const MyContactsPage = lazy(() => import('./pages/MyContactsPage/MyContactsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))
 
const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Load page</p>}>
            <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<MyContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;