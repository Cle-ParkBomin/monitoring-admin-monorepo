import { useRef, useState } from 'react';

import useClickOutside from '@ui/hooks/useClickOutside';
import { FaCheck } from 'react-icons/fa6';

interface DropButtonProps<T> {
  title: string;
  value: T;
  valueList: T[];
  onClick: (value: T) => void;
  size?: 'm' | 's';
}

export default function DropButton<T>({
  title,
  value,
  valueList,
  onClick,
  size = 'm',
}: DropButtonProps<T>) {
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const sizeStyle = {
    m: 'px-4 py-2',
    s: 'px-3 py-1',
  };

  const handleClickButton = () => {
    setIsOpen(true);
  };

  const handleClickOption = (selected: T) => {
    onClick(selected);
    setIsOpen(false);
  };

  useClickOutside({ ref: dropdownRef, onClick: () => setIsOpen(false) });

  return (
    <div className='relative'>
      <button
        className='cursor-pointer text-14 leading-20 whitespace-nowrap text-grey-700 underline'
        onClick={handleClickButton}
      >
        {title}
      </button>

      {/* dropDown */}
      {isOpen && (
        <ul
          className='absolute z-10 flex max-h-48 w-fit flex-col gap-1 overflow-auto rounded-sm border border-grey-300 bg-grey-0 p-1 shadow-strong'
          ref={dropdownRef}
        >
          {valueList.map((item) => (
            <button
              key={String(item)}
              className={`flex flex-1 cursor-pointer items-center gap-1 hover:bg-grey-950/4 ${item === value && 'text-primary-500 hover:text-primary-600'} ${sizeStyle[size]}`}
              onClick={() => handleClickOption(item)}
            >
              <p>{String(item)}</p>
              {item === value && <FaCheck size={16} />}
            </button>
          ))}
        </ul>
      )}
    </div>
  );
}
