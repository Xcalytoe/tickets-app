import { RequestService } from "../services/request.service";
import { useMutation } from "react-query";

export const useFetchTickets = () => {
  return useMutation(
    async (): Promise<any> => {
      const response = await RequestService.get("service/tickets.service.json");
      return response;
    }
    // {
    //   onError: () => {
    //     //   const errMsg = error.response.data.message;
    //   },
    //   onSuccess: async (success) => {},
    // }
  );
};
