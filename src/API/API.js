import axios from 'axios';

axios.defaults.baseURL = 'https://64c92ca3b2980cec85c201d7.mockapi.io/';

const limit = 6;

export const getAllUsers = (page = 1) => {
  try {
    const searchParams = new URLSearchParams({
      limit,
    });
    return axios.get(`/users?${searchParams}&page=${page}`);
  } catch (error) {
    return error.message;
  }
};

export const getFileredUsers = (page = 1, filter) => {
  try {
    const searchParams = new URLSearchParams({
      isFollowing: filter,
      limit,
    });
    return axios.get(`/users?${searchParams}&page=${page}`);
  } catch (error) {
    return error.message;
  }
};

export const getUsers = () => {
  try {
    return axios.get(`/users`);
  } catch (error) {
    return error.message;
  }
};

export const updateUserById = (id, data) => {
  try {
    return axios.put(`/users/${id}`, data);
  } catch (error) {
    return error.message;
  }
};

export const getAllFileredUsers = filter => {
  try {
    const searchParams = new URLSearchParams({
      isFollowing: filter,
    });
    return axios.get(`/users?${searchParams}`);
  } catch (error) {
    return error.message;
  }
};
