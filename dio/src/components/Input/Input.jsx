import { InputContainer, IconContainer, InputText, ErrorText } from './Input.styles'
import { Controller } from 'react-hook-form';

// rest quer dizer o que o componente recebe outras propriedades,
// como placeholder, por exemplo
export const Input = ({ leftIcon, name, control, errorMessage, ...rest }) => {
    return (
        <>
            <InputContainer>
                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <InputText {...field}{...rest}></InputText>}
                >
                </Controller>
            </InputContainer>
            {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    );
}