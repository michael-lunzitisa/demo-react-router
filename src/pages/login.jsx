import { Link } from "react-router-dom";
import Button from "../components/button";
const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <Button linkValue="/home" buttonValue="Connexion" />
        </>
    );
};

export default Login;
