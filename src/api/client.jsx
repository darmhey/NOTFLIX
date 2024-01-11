import axios from "axios";

const client = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "ce3da44a232edc8e85c7ad3ff7cc1929",
  },
});

export const fetchTrending = async () => {
  try {
    const response = await client.get("/trending/movie/week");
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
export const fetchPopular = async () => {
  try {
    const response = await client.get("/movie/popular");
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

export const fetchUpcoming = async () => {
  try {
    const response = await client.get("/movie/upcoming");
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

export const fetchTopRated = async () => {
  try {
    const response = await client.get("/movie/top_rated");
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
