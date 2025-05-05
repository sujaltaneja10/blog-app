export default function SubmitButton({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) {
  return (
    <button
      onClick={onClick}
      className={
        'p-2.5 rounded-xl flex items-center justify-center box-border cursor-pointer dark:text-light-900 body-medium w-full bg-[linear-gradient(93.22deg,_#FF7000_-13.95%,_#E2985E_99.53%,_#E2995F_99.54%)]'
      }
    >
      <div>{text}</div>
    </button>
  );
}
