import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;
    color: #FFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

/* Pegar as Props */
/* Maneira convencional  */
/* recebe "props" e depois chama pelo nome "props.nome" */

/* Maneira de desestruturacao */
    ${({ variant }) => variant !== "primary" && css`
        background: #E4105D;
        min-width: 167px;
        height: 33px;

        &::after{
            content: '',
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`;