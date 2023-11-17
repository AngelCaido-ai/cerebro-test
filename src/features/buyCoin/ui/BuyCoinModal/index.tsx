import {PropsWithChildren, useEffect, useMemo, useRef} from "react";
import {useModal, useModalProps, useModalState} from "react-simple-modal-provider";
import {ModalBase} from "../../../../shared/ui";
import {useCoinPrice, useCoinTransfer} from "../../hooks";
import {useBalance} from "../../../balance/hooks";
import {Form, Formik, FormikProps} from "formik";
import {useTranslation} from "react-i18next";

type BuyCoinFormValues = {
  amount: number;
}

const Content = () => {
  const { t } = useTranslation();

  const modalProps = useModalProps("buy-coin-modal");
  const modal = useModal("buy-coin-modal");

  const {data: balance} = useBalance();
  const {data: price} = useCoinPrice(modalProps.coinId);

  const maxCount = useMemo(() => Math.floor((balance ?? 0) / price), [balance, price])

  const { mutate} = useCoinTransfer();

  const formRef = useRef<FormikProps<BuyCoinFormValues>>(null)

  useEffect(() => {
    if(formRef.current && price && balance) formRef.current.setFieldValue('amount', maxCount)
  }, [price, balance])

  const onSubmit = (values: BuyCoinFormValues) => {
    mutate({id: modalProps.coinId, amount: values.amount})
    modal.close()
  }

  return (
    <>
      <div className="text-2xl text-black">
        {t("buying-a-coin")}
      </div>
      <p className="text-black">{t("price-in-cents")} {price ?? "0"}</p>
      <Formik
        initialValues={{
          amount: 0
        }}
        innerRef={formRef}
        onSubmit={onSubmit}
      >
        <Form>
          <input className="bg-white placeholder:text-black border-black border-[1px] text-black" type="number" name="amount" max={maxCount} min={0}/>
          <button
            className="mt-6 h-12 w-full bg-gray-600"
            type="submit"
          >
            {t("buy")}
          </button>
        </Form>
      </Formik>
    </>
  );
};

export const BuyCoinModal = ({children}: PropsWithChildren) => {
  const [isOpen, setOpen] = useModalState();

  return (
    <ModalBase
      id="buy-coin-modal"
      isOpen={isOpen}
      setOpen={setOpen}
      content={<Content/>}
    >
      {children}
    </ModalBase>
  );
};
