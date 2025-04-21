'use client'
import BtnStyle from './BtnStyle' 

type Props = {
    bgColor?: string;
    border?: string;
    color?: string;
    txt: string;
    onClick?: () => void;
    clasName?: string;
};

export default function BtnMain ({bgColor, border, color, txt, onClick, clasName}: Props) {
    return(
        <BtnStyle
            bgColor={bgColor}
            border={border}
            color={color}
            onClick={onClick}
            className={`cursor-pointer ${clasName || ""}`}
        >
            {txt}
        </BtnStyle>
    );
};