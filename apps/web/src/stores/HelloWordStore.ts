import create from "zustand";
import { devtools } from "zustand/middleware";
import {
  ApiResultType,
  GetHelloRequestType,
  GetHelloResultDataSchema,
  GetHelloResultDataType,
} from "types-api";
import axios from "axios";

interface HelloWordState {
  message: string;
  fetchMessage: (sub: string) => void;
}

export const useHelloWordStore = create<HelloWordState>()(
  devtools(
    (set) => ({
      message: "",
      fetchMessage: async (sub: string) => {
        const helloReqData: GetHelloRequestType = {
          sub: sub,
        };

        const res = await axios.post(
          "http://localhost:5001/hello",
          helloReqData
        );
        const helloResult: ApiResultType<GetHelloResultDataType> = res.data;

        const helloData = GetHelloResultDataSchema.safeParse(helloResult.data);

        if (helloData.success) {
          set(() => ({ message: helloData.data.msg }));
        }
      },
    }),
    {
      name: "helloWordState",
    }
  )
);
