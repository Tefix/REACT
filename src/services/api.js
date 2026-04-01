const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWMyNDEyYmU0MmIyZWFkM2I5ZjZiYjdkZmUwODhmMiIsIm5iZiI6MTc3MjEwNjIyMi45Miwic3ViIjoiNjlhMDMxZWU2ZmJhOTIzYTkwYjJmYzg1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.1K6YsWZpCZB3Ecw4P64XQRKsx_1Jgmu2U39ZmCAvXGA";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
