type Props = {
  txt: string;
  onClick?: () => void;
  className?: string;
};

export default function Btn({ txt, onClick, className }: Props) {
  return (
    <button
      className={`
            py-2.5 px-6.5 text-1xl rounded-md font-extralight cursor-pointer bg-transparent border border-solid border-white
            ${className || ` `}
            `}
      onClick={onClick}
    >
      {txt}
    </button>
  );
}
