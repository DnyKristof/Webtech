import axios from "axios";

let baseURL = "https://myscopes.org/api/";

export function isLoggedIn() {
  return localStorage.getItem("user") !== null;
}

export function getLoggedInUser() {
  return localStorage.getItem('user');
}

async function getUsers(endpoint) {
  try {
    const response = await axios.get(endpoint);
    return response.data;

  }
  catch (error) {
    console.log(response);
  }
}

export default async function doLogin(username, password) {
  const endpoint = baseURL + 'User/login';

  const payload = {
    name: username,
    password: password,
  };

  try {
    const response = await axios.post(endpoint, payload);

    if (response.status === 200) {
      localStorage.setItem('user', response.data.name);
      localStorage.setItem('role', response.data.role);
      window.location.reload(false);
      window.location.href = '/';
    }

    return response.status;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
}

export async function doRegister(username, password, email) {
  const endpoint = baseURL + "User/register"
  const payload = {
    name: username,
    password: password,
    email: email
  }
  try {
    const response = await axios.post(endpoint, payload);

    if (response.status === 200) {
      window.location.href = '/login';
    }

    return response.status;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }

}

export async function getPosts() {
  const endpoint = baseURL + "Post";

  try {
    const response = await axios.get(endpoint);
    return response.data;
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function postPost(title, subtitle, content) {
  const endpoint = baseURL + "Post";

  const currentDate = new Date();
  const date = currentDate.toISOString().split('T')[0];
  const time = currentDate.toISOString().split('T')[1].split('.')[0];

  const payload = {
    title: title,
    subtitle: subtitle,
    content: content,
    author: getLoggedInUser(),
    date: date + ' ' + time
  }
  try {
    const response = await axios.post(endpoint, payload);

    if (response.status === 200) {
      window.location.reload(false);
      window.location.href = '/blog';
    }

    return response.status;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }

}

export async function getDictionaries() {
  const endpoint = baseURL + "Dictionary";

  try {
    const response = await axios.get(endpoint);
    return response.data;
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function postDictionary(english, hungarian, field) {
  const endpoint = baseURL + "Dictionary";

  const payload = {
    field: field,
    english: english,
    hungarian: hungarian,
    author: getLoggedInUser(),

  }

  try {
    const response = await axios.post(endpoint, payload);

    if (response.status === 200) {
      window.location.reload(false);
      window.location.href = '/dictionary';
    }

    return response.status;
  } catch (error) {
    console.error('Error posting:', error);
    throw error;
  }
}

let baseURL2 = "https://myscopes.org/api2/";

export async function getFyralath() {
  const endpoint = baseURL2 + "axe";

  try {
    const response = await axios.get(endpoint);
    return response.data;
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function getFyralathChart() {
  const endpoint = baseURL2 + "/axe/chart";

  try {
    const response = await axios.get(endpoint);
    return response.data;
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}