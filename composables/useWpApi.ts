export default () => {
  const config = useRuntimeConfig();
  const wpUri = config.public.wpUri;

  // get--------------------------------------------------------
  const get = async <T>(endpoint: string) =>
    useFetch<T>(`${wpUri}/wp-json/wp/v2/${endpoint}`);

  // get All Single Post-----------------------------------------

  const getPosts = async <T>(
    Categories?: number,
    page: number = 1,
    perPage: number = 9
  ) => {
    let query = `posts?_embed&per_Page=${perPage}&page=${page}`;
    if (Categories) {
      query += `&categories=${Categories}`;
    }
    return get<T>(query);
  };
  // get A Single Post-------------------------------------------
  const getPost = async <T> (slug: string) => get<T>(`posts?slug=${slug}&_embed`);

  // get All Categories------------------------------------------
  const getCategories = async<T> () => get<T>(`categories`);

  // get Al Single  Category------------------------------------------
  const getCategory = async<T> (slug: string) => get<T>(`categories?slug=${slug}`);
  return { get, getPosts, getPost, getCategory, getCategories };
};
