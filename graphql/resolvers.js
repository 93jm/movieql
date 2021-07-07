import { getMovies, getMovie, getSuggestions } from "./db";

// resolvers는 어떤것이든지 될 수가 있다 다른 API에 갈 수도 있고 DB에 갈 수도 있다
const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;
