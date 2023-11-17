import {DefaultError, useMutation} from "@tanstack/react-query";
import {queryClient, request} from "../../../shared/services";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";

export const useCoinTransfer = () => {
  const { t } = useTranslation();

  return useMutation<{}, DefaultError, {id: number; amount: number}>({
    mutationFn: (coinTransferData) => {
      const {id, amount} = coinTransferData;

      return request.post(`/coins/${id}/transfer`, {amount})
    },
    onError: () => {
      toast(t("some-error"), {type: "error"})
    },
    onSuccess: async () => {
      toast(t("the-coin-is-bought"), {type: "success"})
      await queryClient.invalidateQueries({queryKey: ["balance"]})
    }
  })
}