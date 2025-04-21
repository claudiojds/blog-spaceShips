import { ReactNode } from "react";

type Props = {
    children?: ReactNode;
    className?: string;
}

export default function Banner ({children, className}: Props) {
    return(
        <header
            className={`flex justify-center items-center gap-5 h-18 bg-gray-900 ${className || ""}`}
        >
            {children}
        </header>
    );
};