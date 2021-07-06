import { getMovies, getById, addMovie, deleteMovie } from "./db";

// resolvers는 어떤것이든지 될 수가 있다 다른 API에 갈 수도 있고 DB에 갈 수도 있다
const resolvers = {
  Query: {
    // person: function () {
    //   return jungmin;
    // },
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
