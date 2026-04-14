import { NavLink, Outlet } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout() {
    return (
        <div>
            <nav className="navbar">
                <NavLink to="/" end>Dashboard</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/lazy">Lista (Lazy)</NavLink>
                <NavLink to="/produto/1">Produto 1</NavLink>
            </nav>
            <main className="content">
                <Outlet />
            </main>
        </div>
    );
}