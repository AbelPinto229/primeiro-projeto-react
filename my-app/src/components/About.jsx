import { Outlet } from "react-router-dom";

function About() {
    return (
        <div>
            <h1>About us</h1>
            <p>We are students.</p>
            <Outlet />
        </div>
    );
}

export default About;
