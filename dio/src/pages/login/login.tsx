import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

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
import { IFormData } from './types';


export const Login = () => {

    const schema = yup.object({
        email: yup.string().email('Email não é válido').required('Campo Obrigatório'),
        password: yup.string().min(3, 'No minimo 3 caracteres!').required('Campo Obrigatório'),
    }).required();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>(
        {
            resolver: yupResolver(schema),
            mode: 'onChange'
        });

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
                        <form>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="email" leftIcon={<EmailIcon></EmailIcon>} ></Input>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="senha" type="password" leftIcon={<NoEncryptionIcon></NoEncryptionIcon>} ></Input>
                            <Button title="Entrar" variant="secondary"></Button>
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