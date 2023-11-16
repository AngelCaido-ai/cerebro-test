import {useMutation} from "@tanstack/react-query";
import {queryClient, request} from "../../../shared/services";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";

export const useCoinTransfer = () => {
  const { t } = useTranslation();

  return useMutation({
    mutationFn: ({id, amount}) => {
      return request.post(`/coins/${id}/transfer`, {amount})
    },
    onError: () => {
      toast(t("some-error"), {type: "error"})
    },
    onSuccess: () => {
      toast(t("the-coin-is-bought"), {type: "success"})
      queryClient.invalidateQueries(["balance"])
    }
  })
}