import capa from '../../assets/capa.jpg';

import {
    CardContainer,
    ImageBackground,
    Content,
    UserInfo,
    UserPicture,
    PostInfo,
    HasInfo
} from './Card.styles';

export const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src={capa}></ImageBackground>
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/49788942?s=400&u=12c0530b89c5fd4bed42db07ff729eb40aab06b5&v=4'></UserPicture>
                    <div>
                        <h4>Lucca Giongo</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito no curso de htmle  css no bootcamp ... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p>
                        icone
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    );
}