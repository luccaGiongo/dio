import { Link } from 'react-router-dom';
import logo from '../../assets/logo-dio.png'

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

export const Header = ({ autenticado }) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da Dio" />
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
                            <Button title="Cadastrar"></Button>
                            <Button title="Entrar"></Button>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    );
};