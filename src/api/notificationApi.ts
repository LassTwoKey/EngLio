import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INotification } from "../types/Notification";
import { BASE_URL } from "./api";

export const notificationApi = createApi({
  reducerPath: "notificationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: builder => ({
    notifications: builder.query<INotification[], void>({
      query: () => "/notifications.json"
    })
  })
});

export const { useNotificationsQuery } = notificationApi;
export default notificationApi;
