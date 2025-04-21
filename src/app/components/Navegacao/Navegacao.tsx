import Link from "next/link";

type Props = {
    caminho: string;
    txt: string;
    className?: string;
}

export default function Navegacao ({caminho, txt, className}: Props) {
    return(
        <Link
           href={caminho} 
           className={`
            text-sm flex justify-center items-center 
            ${className || ''}
            `}
        >
            {txt}
        </Link>
    );
};