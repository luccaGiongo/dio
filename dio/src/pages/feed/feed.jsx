import banner from '../../assets/banner.png'

import {
    Container,
    Column,
    Title,
    TitleHighlight,
} from './feed.styles'

import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Card } from '../../components/Card/Card';
import { UserInfo } from '../../components/UserInfo/UserInfo';


export const Feed = () => {
    return (
        <>
            <Header autenticado={true}></Header>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </Column>
                <Column flex={1}>
                    <TitleHighlight>#Ranking 5 Top da Semana</TitleHighlight>
                    <UserInfo percentual={75} name="Lucca Giongo" image="https://avatars.githubusercontent.com/u/49788942?s=400&u=12c0530b89c5fd4bed42db07ff729eb40aab06b5&v=4"></UserInfo>
                    <UserInfo percentual={55} name="Lucca Giongo" image="https://avatars.githubusercontent.com/u/49788942?s=400&u=12c0530b89c5fd4bed42db07ff729eb40aab06b5&v=4"></UserInfo>
                    <UserInfo percentual={47} name="Lucca Giongo" image="https://avatars.githubusercontent.com/u/49788942?s=400&u=12c0530b89c5fd4bed42db07ff729eb40aab06b5&v=4"></UserInfo>
                    <UserInfo percentual={40} name="Lucca Giongo" image="https://avatars.githubusercontent.com/u/49788942?s=400&u=12c0530b89c5fd4bed42db07ff729eb40aab06b5&v=4"></UserInfo>
                    <UserInfo percentual={25} name="Lucca Giongo" image="https://avatars.githubusercontent.com/u/49788942?s=400&u=12c0530b89c5fd4bed42db07ff729eb40aab06b5&v=4"></UserInfo>
                </Column>
            </Container>
        </>
    );
}