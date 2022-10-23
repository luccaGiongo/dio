import { useNavigate } from 'react-router-dom';

import EmailIcon from '@mui/icons-material/Email';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';

import {
    Container,
    Wrapper,
    Column,
    Row,
    Title,
    TitleLogin,
    SubTitleLogin,
    EsqueciText,
    CriarText
} from './login.styles'

import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';

export const Login = () => {

    const navigate = useNavigate();
    const handleClickSignin = () => {
        navigate('/feed/feed.jsx')
    }

    return (
        <>
            <Header></Header>
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                        <form action="">
                            <Input placeholder="email" leftIcon={<EmailIcon></EmailIcon>} ></Input>
                            <Input placeholder="senha" type="password" leftIcon={<NoEncryptionIcon></NoEncryptionIcon>} ></Input>
                            <Button title="Entrar" variant="secondary" onClick={handleClickSignin} type="button"></Button>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
}