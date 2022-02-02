
import HeaderLogo from "./Images/CSLogo.png";

function Header() {

    return (
        <nav>
            <img src={HeaderLogo} />
            <span>
                <h1 className="nav--header">Coach Sean's To-Do List</h1>
            </span>
        </nav>
    )
}

export default Header;

