import { Link } from "react-router-dom";

import { Button } from '../../components/Button/Button';

export const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Button title="Teste 1"></Button>
            <Button title="Teste 2" variant="seconday">Teste 2</Button>
            <Link to="/login/login.jsx">
                <button>Fazer Login</button>
            </Link>
        </>
    );
}