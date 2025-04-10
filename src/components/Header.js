import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
            <h1>Kathmandu Blog</h1>
            <nav>
                <Link to="/">Home</Link>|<Link to="/add">Add Post</Link>
            </nav>
        </header>
    );
}