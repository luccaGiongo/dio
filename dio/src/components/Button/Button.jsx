
import { ButtonContainer } from './Button.styles'
// Componente vai receber alguns parâmetros;
// variant, senão receber nada, vai ser "primary"
export const Button = ({ title, variant = "primary", onClick }) => {
    return (
        <ButtonContainer variant={variant} onClick={onClick}>{title}</ButtonContainer>
    );
}