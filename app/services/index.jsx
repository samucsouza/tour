import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});

export const getAllCountries = async () => {
  try {
    const { data } = await api.get('/all');
    return data;
  } catch (error) {
    console.error("Erro ao buscar países:", error.message);
    return [];
  }
};
