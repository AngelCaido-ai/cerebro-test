import { Dispatch, SetStateAction } from "react";
import ReactPaginate from "react-paginate";

interface Props {
  pageNum: number;
  className?: string;
  onPageChange: (pageNum: number) => void | Dispatch<SetStateAction<number>>;
  page_count?: number;
  itemsOnPage: number;
  isLoading?: boolean;
  items: any[];
}

export const Pagination = ({
  pageNum,
  className,
  onPageChange,
  itemsOnPage,
  page_count = 4,
  isLoading = false,
  items = [],
}: Props) => {


  if (isLoading || items.length && page_count > 1) {
    return null;
  }

  return (
    <ReactPaginate
      containerClassName="flex items-center pt-8"
      breakLabel="..."
      nextLabel=">"
      forcePage={pageNum - 1}
      onPageChange={(selectedItem) => onPageChange(selectedItem.selected + 1)}
      pageClassName="px-[13px] py-[6px] rounded-lg"
      activeClassName="text-white"
      previousClassName="font-extrabold mr-[18px]"
      nextClassName="font-extrabold ml-[18px]"
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={page_count}
      previousLabel="<"
    />
  );
};
