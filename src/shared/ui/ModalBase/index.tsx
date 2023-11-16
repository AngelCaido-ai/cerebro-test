import {Dispatch, SetStateAction, useCallback} from "react";
import {FC, ReactNode} from "react";
import Modal from "react-simple-modal-provider";
import {CloseModalIcon} from "../Icons/CloseModalIcon.tsx";

interface Props {
  containerClassName?: string;
  children: ReactNode;
  content?: ReactNode;
  id: string;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalBase: FC<Props> = ({
                                         children,
                                         id,
                                         content,
                                         containerClassName,
                                         isOpen,
                                         setOpen,
                                       }) => {
  const closeModal = () => {
    setOpen(false);
  }

  return (
    <Modal id={id} consumer={children} isOpen={isOpen} setOpen={setOpen}>
      <div
        className="max-w-[486px] rounded-2xl bg-white sm:p-12 pt-[52px] mx-4"
      >
        <button
          type="button"
          className="absolute top-4 right-6 sm:right-8 sm:top-6"
          onClick={closeModal}
        >
          <CloseModalIcon/>
        </button>
        {content}
      </div>
    </Modal>
  );
};
