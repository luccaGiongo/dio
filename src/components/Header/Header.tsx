import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo-dio.png';

import {
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './Header.styles';

import { Button } from '../Button/Button'
import { IHeader } from './types';

export const Header = ({ autenticado }: IHeader) => {

    const navigate = useNavigate();
    const handleClickCadastro = () => {
        navigate('/cadastro/cadastro.tsx')
    }

    const handleClickLogin = () => {
        navigate('/login/login.tsx')
    }

    const handleClickHome = () => {
        navigate('/')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da Dio" onClick={handleClickHome} />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...'></Input>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/49788942?s=400&u=12c0530b89c5fd4bed42db07ff729eb40aab06b5&v=4"></UserPicture>
                    ) : (
                        <>
                            <MenuRight href='#'>Home</MenuRight>
                            <Button title="Cadastrar" onClick={handleClickCadastro}></Button>
                            <Button title="Entrar" onClick={handleClickLogin}></Button>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    );
};