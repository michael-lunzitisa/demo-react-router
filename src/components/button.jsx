import { useNavigate } from "react-router-dom";

const Button = ({ linkValue, buttonValue }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(linkValue);
    };
    return <button onClick={handleClick}>{buttonValue}</button>;
};

export default Button;
