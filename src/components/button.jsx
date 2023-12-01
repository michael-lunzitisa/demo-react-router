import { Link } from "react-router-dom";
const Button = ({ linkValue, buttonValue }) => {
    return (
        <button>
            <Link to="{linkValue}">{buttonValue}</Link>
        </button>
    );
};

export default Button;
