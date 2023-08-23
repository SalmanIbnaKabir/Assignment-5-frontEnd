import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `/user/login`,
        method: "POST",
        body: data,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: `/user/signup`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = userApi;
