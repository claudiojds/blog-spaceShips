type Props = {
    title: string;
    className?: string;
}

export default function Titulo ({title, className}: Props) {
    return(
        <h1 className={`font-bold ${className || ""}`}>
            {title}
        </h1>
    );
};