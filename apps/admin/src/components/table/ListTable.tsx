import Dropdown from '@/components/button/Dropdown';
import Filter from '@/components/table/Filter';
import Pagination from '@/components/table/Pagination';
import Search from '@/components/table/Search';
import TableBody from '@/components/table/TableBody';
import TableHeader from '@/components/table/TableHeader';
import { ReactNode, useState } from 'react';

interface ListTableProps<T extends object> {
  title: string;
  data: T[];
  filterBody: { title: string; content: ReactNode }[];
  refetchData: (value?: string) => void;
  renderHeader: (key: keyof T) => ReactNode;
  renderCell: (row: T, key: keyof T) => ReactNode;
}

export default function ListTable<T extends object>({
  title,
  data,
  filterBody,
  refetchData,
  renderHeader,
  renderCell,
}: ListTableProps<T>) {
  const PAGE_SIZE_LIST = [30, 50, 100];
  const [pageSize, setPageSize] = useState<number>(50);
  const [selectPage, setSelectPage] = useState<number>(1);

  if (data.length < 1)
    return (
      <div className='mt-8 flex flex-1 items-center justify-center'>
        <p>데이터가 없습니다.</p>
      </div>
    );

  return (
    <div className='mt-8 flex flex-1 flex-col'>
      <div className='flex flex-wrap justify-between text-left'>
        <p className='text-24 leading-32 font-700'>{title}</p>
        <div className='flex gap-2'>
          <Search refetchData={refetchData} />
          <Filter filterBody={filterBody} refetchData={refetchData} />
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='mb-5 flex items-center gap-1'>
          <div className='w-20'>
            <Dropdown
              value={pageSize}
              valueList={PAGE_SIZE_LIST}
              onClick={(value) => {
                refetchData();
                setPageSize(value);
              }}
              size='s'
            />
          </div>
          <p>개 씩</p>
        </div>
      </div>

      <div
        className='border-grey-300 overflow-y-auto border'
        style={{ maxHeight: `calc(100vh - 480px)` }}
      >
        <table className='w-full px-1 text-left'>
          <TableHeader data={data} renderHeader={renderHeader} />
          <TableBody data={data} renderCell={renderCell} />
        </table>
      </div>

      <Pagination selectPage={selectPage} setSelectPage={setSelectPage} totalPages={1} />
    </div>
  );
}
