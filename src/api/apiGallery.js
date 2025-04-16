import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiGallery = createApi({
  reducerPath: 'apiGallery',
  baseQuery: fetchBaseQuery({ baseUrl: 'test-front.framework.team/'}),
  endpoints: (builder) => ({
    getPaintings: builder.query({
      query: () => 'paintings',
    })
  })
});

export const {
  useGetPaintingsQuery,
} = apiGallery;
