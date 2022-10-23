import { InputContainer, IconContainer, InputText } from './Input.styles'

// rest quer dizer o que o componente recebe outras propriedades,
// como placeholder, por exemplo
export const Input = ({ leftIcon, name, ...rest }) => {
    return (
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <InputText {...rest}></InputText>
        </InputContainer>

    );
}