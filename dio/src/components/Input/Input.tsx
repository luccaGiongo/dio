import { InputContainer, IconContainer, InputText, ErrorText } from './Input.styles'
import { Controller } from 'react-hook-form';
import { IInput } from './types';

// rest quer dizer o que o componente recebe outras propriedades,
// como placeholder, por exemplo
export const Input = ({ leftIcon, name, control, errorMessage, ...rest }: IInput) => {
    return (
        <>
            <InputContainer>
                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => <InputText value={value} onChange={onChange} {...rest}></InputText>}
                />
            </InputContainer>
            {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    );
}