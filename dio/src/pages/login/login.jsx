import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <Link to="/">
                <button>Voltar Home</button>
            </Link>
        </>
    );
}
