import { useNavigate } from "react-router-dom";

import banner from '../../assets/banner.png'
import logo from '../../assets/logo-dio.png'

import {
    Container,
    TextContent,
    Title,
    TitleHighlight,
} from './home.styles'

import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header'

export const Home = () => {

    const navigate = useNavigate();
    const handleClickSignin = () => {
        navigate('/login/login.jsx')
    }

    return (
        <>
            <Header></Header>
            <Container>
                <div>
                    <Title>O seu futuro Global agora!
                        <TitleHighlight> Implemente <br /></TitleHighlight>
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras
                        do mundo e escare seu novo desafio profissional, evoluindo em comunidade
                        com os melhores experts.
                    </TextContent>
                    <Button title="Começar agora" variant="secondary" onClick={handleClickSignin} ></Button>
                </div>
                <div>
                    <img src={banner} alt="Imagem Principal" />
                </div>
            </Container>
        </>
    );
}