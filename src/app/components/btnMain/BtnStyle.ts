import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface btnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    bgColor?: string;
    border?: string;
    color?: string
}

const BtnStyle = styled.button<btnProps>`
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 8px;

    background-color: ${({ bgColor }) => bgColor || 'transparent'}; // fallback azul
    border: ${({ border }) => border || '1px solid #FCFCFC'};
    color: ${({color}) => color || '#FCFCFC'};
`

export default BtnStyle 