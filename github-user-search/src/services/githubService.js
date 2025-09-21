import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) query += `${username}+`;
    if (location) query += `location:${location}+`;
    if (minRepos) query += `repos:>=${minRepos}+`;

    query = query.slice(0, -1);

    const response = await axios.get(`${BASE_URL}${query}`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
