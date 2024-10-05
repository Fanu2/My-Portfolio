// utils/github.js

export const fetchRepositories = async () => {
  const response = await fetch('https://api.github.com/users/Fanu2/repos');
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  const data = await response.json();
  return data;
};
