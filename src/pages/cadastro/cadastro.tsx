import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import EmailIcon from '@mui/icons-material/Email';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import PersonIcon from '@mui/icons-material/Person';

import {
    Container,
    Wrapper,
    Column,
    Row,
    Title,
    TitleLogin,
    SubTitleLogin,
    CriarText
} from './cadastro.styles'

import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';
import { IFormData } from './types';


export const Cadastro = () => {

    const schema = yup.object({
        nome: yup.string().required('Campo Obrigatório'),
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
                        <TitleLogin>Comece agora Grátis</TitleLogin>
                        <SubTitleLogin>Cria sua Conta e make the change._</SubTitleLogin>
                        <form>
                            <Input name="nome" errorMessage={errors?.nome?.message} control={control} placeholder="Nome completo" leftIcon={<PersonIcon></PersonIcon>} ></Input>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<EmailIcon></EmailIcon>} ></Input>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="password" type="password" leftIcon={<NoEncryptionIcon></NoEncryptionIcon>} ></Input>
                            <Button title="Criar minha conta" variant="secondary"></Button>
                        </form>
                        <Row>
                            <SubTitleLogin>
                                Ao clicar em "criar minha conta grátis",
                                declaro que aceito as Políticas de Privacidade
                                e os Termos de Uso da DIO.
                                <CriarText>Fazer Login</CriarText>
                            </SubTitleLogin>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
}