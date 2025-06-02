import { MouseEventHandler } from 'react';

export type BadgeColor = 'yellow' | 'blue' | 'green' | 'purple' | 'grey' | 'red' | 'neo-green';

interface BadgeProps {
  value: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: BadgeColor | undefined;
  size?: 'l' | 'm' | 's';
}

export default function Badge({ value, onClick, color = 'grey', size = 'm' }: BadgeProps) {
  const variantStyle = {
    yellow: 'border-yellow-500 bg-yellow-100 text-yellow-950',
    blue: 'border-sky-500 bg-sky-100 text-sky-950',
    green: 'border-green-500 bg-green-100 text-green-950',
    purple: 'border-purple-500 bg-purple-100 text-purple-950',
    grey: 'border-grey-500 bg-grey-50 text-grey-700',
    red: 'border-primary-500 bg-primary-200 text-primary-950',
    'neo-green': 'border-neo-green-500 bg-neo-green-100 text-neo-green-950',
  };

  const sizeStyle = {
    s: 'px-2 py-1 text-12 leading-16',
    m: 'px-3 py-1 text-14 leading-16',
    l: 'px-3 py-1 text-16 leading-24',
  };

  return (
    <button
      className={`text-medium border-1 flex w-fit items-center gap-2 rounded-lg ${variantStyle[color]} ${sizeStyle[size]} ${onClick && 'cursor-pointer'}`}
      onClick={onClick}
    >
      <p className='whitespace-nowrap'>{value}</p>
    </button>
  );
}
