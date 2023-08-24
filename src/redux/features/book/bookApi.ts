import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/book/all-books",
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/book/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    createBook: builder.mutation({
      query: (data) => ({
        url: `/book/create-book`,
        method: "POST",
        body: data,
      }),
    }),
    getComment: builder.query({
      query: (id) => `/book/comment/${id}`,
      providesTags: ["comments"],
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useCreateBookMutation,
  useGetCommentQuery,
  usePostCommentMutation,
} = bookApi;
