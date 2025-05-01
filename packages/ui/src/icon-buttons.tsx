import Icons, { IconsType } from './icons';

export default function IconButtons({
  icon,
  height,
  onClick,
}: {
  icon: IconsType;
  height: string;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick}>
      <Icons icon={icon} height={height} />
    </button>
  );
}
