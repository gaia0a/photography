import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="descriptions">
                <p>A visual log.</p>
                <p>A collection of memorable moments.</p>
                <p>All captured & edited by Gai Han.</p>
            </div>

            <Link to="/" className="logo">Some <span>Okay</span> Pictures.</Link>

            <ul>
                <CustomLink to="/About">about</CustomLink>
                <CustomLink to="/Categories">categories</CustomLink>
                <CustomLink to="/Contact">contact</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to) 
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}