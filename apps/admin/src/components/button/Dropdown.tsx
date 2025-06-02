'use client';

import useClickOutside from '@/hooks/useClickOutside';
import { useColorByTheme } from '@/hooks/useColorByTheme';
import { useRef, useState } from 'react';
import { CgChevronDown, CgChevronUp } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa6';
interface DropdownProps<T> {
  value: T; // 선택된 값
  valueList: T[]; // 선택지 목록
  onClick: (value: T) => void; // 선택된 값 변경 핸들러
  style?: 'default' | 'blue' | 'ghost'; // 색상 스타일
  size?: 'm' | 's';
}

export default function Dropdown<T>({
  value,
  valueList,
  onClick,
  style = 'default',
  size = 'm',
}: DropdownProps<T>) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const grey300 = useColorByTheme('grey-300');
  const grey500 = useColorByTheme('grey-500');
  const grey900 = useColorByTheme('grey-900');

  const variantStyle = {
    default: {
      wrapper: isOpen
        ? 'cursor-pointer border-grey-400 bg-grey-0'
        : 'cursor-pointer border-grey-200 bg-grey-50',
      input: 'cursor-pointer placeholder:text-grey-500 text-grey-950',
      iconColor: isOpen ? grey900 : grey500,
      button: 'text-primary-500 hover:text-primary-600',
    },
    blue: {
      wrapper: isOpen
        ? 'cursor-pointer border-grey-400 bg-grey-0'
        : 'cursor-pointer border-grey-200 bg-grey-50',
      input: 'cursor-pointer placeholder:text-blue-300 text-blue-500',
      iconColor: isOpen ? grey900 : grey500,
      button: 'text-blue-500',
    },
    ghost: {
      wrapper: isOpen
        ? 'cursor-pointer border-grey-400 bg-grey-0'
        : 'cursor-pointer border-grey-100 bg-grey-100',
      input: 'cursor-pointer placeholder:text-grey-500 text-grey-700',
      iconColor: isOpen ? grey300 : grey300,
      button: 'text-primary-500 hover:text-primary-600',
    },
  };
  const sizeStyle = {
    m: { inputWrapper: 'h-12 px-4 py-3', dropButton: 'px-4 py-2' },
    s: { inputWrapper: 'h-9 px-3 py-1.5', dropButton: 'px-3 py-1' },
  };

  const handleClickInput = () => {
    setIsOpen(!isOpen);
  };
  const handleClickButton = (item: T) => {
    onClick(item);
    setIsOpen(false);
  };

  useClickOutside({ ref: dropdownRef, onClick: () => setIsOpen(false) });

  return (
    <div className='relative flex flex-1 flex-col gap-1' ref={dropdownRef}>
      <div
        className={`border-1 flex items-center rounded-sm ${variantStyle[style].wrapper} ${sizeStyle[size].inputWrapper}`}
      >
        <input
          className={`text-16 flex min-w-0 flex-1 outline-0 ${variantStyle[style].input}`}
          value={String(value)}
          onClick={handleClickInput}
          readOnly
        />
        {isOpen ? (
          <CgChevronUp size={20} onClick={handleClickInput} />
        ) : (
          <CgChevronDown size={20} onClick={handleClickInput} />
        )}
      </div>

      {isOpen && (
        <div
          className='border-grey-300 bg-grey-0 shadow-strong absolute left-0 z-10 max-h-48 w-[100%] overflow-auto rounded-sm border p-1'
          style={{ top: `calc(100% + 4px)` }}
        >
          <ul className='animate-fade-in flex flex-1 flex-col gap-1'>
            {valueList.map((item) => (
              <button
                key={String(item)}
                className={`hover:bg-grey-950/4 flex flex-1 cursor-pointer items-center justify-between gap-1 text-left ${item === value && variantStyle[style].button} ${sizeStyle[size].dropButton}`}
                onClick={() => {
                  handleClickButton(item);
                }}
              >
                <p>{String(item)}</p>
                {item === value && <FaCheck size={16} />}
              </button>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
