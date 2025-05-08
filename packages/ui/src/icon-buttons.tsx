import Icons, { IconsType } from './icons';

export default function IconButtons({
  icon,
  height,
  onClick,
  text,
}: {
  icon: IconsType;
  height: string;
  onClick: () => void;
  text?: string;
}) {
  const textStyles = text ? ' dark:text-light-800 body-medium ' : '';
  const divStyles = text ? ' pl-2 pr-4 w-full ' : ' w-fit ';
  const bgStyles =
    icon === 'northWest'
      ? ' bg-light-800 dark:bg-dark-200 flex gap-2 '
      : ' bg-light-900 dark:bg-dark-400 ';

  return (
    <button
      className={
        divStyles +
        ' rounded-xl flex items-center justify-center box-border cursor-pointer ' +
        bgStyles
      }
      type="button"
      onClick={onClick}
    >
      <Icons icon={icon} height={height} />
      <div className={textStyles}>{text}</div>
    </button>
  );
}
