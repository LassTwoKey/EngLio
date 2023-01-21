import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICard } from "../types/Card";
import { BASE_URL } from "./api";

type FlashCards = {
  [key: string]: any;
};

export const flashCardApi = createApi({
  reducerPath: "flashCardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: builder => ({
    flashcards: builder.query<ICard[], string>({
      query: id => `/${id}.json`,
      transformResponse: (response: FlashCards) => {
        const flashcardsData: ICard[] = [];

        for (const key in response) {
          const obj = {
            ...response[`${key}`],
            id: key
          };

          flashcardsData.push(obj);
        }

        return flashcardsData;
      }
    })
  })
});

export const { useFlashcardsQuery } = flashCardApi;
export default flashCardApi;
