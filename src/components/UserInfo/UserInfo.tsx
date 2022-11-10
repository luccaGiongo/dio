import { IUserInfo } from './types';
import {
    Container,
    UserPicture,
    NameText,
    Progress
} from './UserInfo.styles';

export const UserInfo = ({ name, image, percentual }: IUserInfo) => {
    return (
        <Container>
            <UserPicture src={image}></UserPicture>
            <div>
                <NameText>{name}</NameText>
                <Progress percentual={percentual}></Progress>
            </div>


        </Container>
    );
}