import {Dispatch, SetStateAction} from "react";
import ReactPaginate from "react-paginate";

interface Props {
  pageNum: number;
  onPageChange: (pageNum: number) => void | Dispatch<SetStateAction<number>>;
  page_count?: number;
  itemsOnPage: number;
  isLoading?: boolean;
  itemsCount: number;
}

export const Pagination = ({
                             pageNum,
                             onPageChange,
                             itemsOnPage,
                             isLoading = false,
                             itemsCount,
                           }: Props) => {

  const pagesCount = itemsCount > 0 ? Math.ceil(itemsCount / itemsOnPage) : 1;

  if (isLoading || itemsCount <= itemsOnPage) {
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
      pageCount={pagesCount}
      previousLabel="<"
    />
  );
};
