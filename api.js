import axios from 'axios'; //importando os axios para puxar os dados da api

const BASE_URL = 'https://hn.algolia.com/api/v1/search'; //url da api

// Buscar livros na API
export const fetchBooks = async (searchKey) => {
  try {
    // Realiza a requisição GET na API
    const response = await axios.get(`${BASE_URL}?query=${searchKey}`);
    const data = response.data;

    // Pegar os dados da API para exibir na BookList
    const books = data.hits.map((hit) => ({
      title: hit.title || 'Sem título', // Pega o titulo e em caso nao fornece a frase sem titulo
      author: hit.author || 'Autor desconhecido', // Pega o autor e em caso nao fornece a frase Autor Desconhecido
      url: hit.url || '#', //Pega o url e em caso nao fornece a #
    }));

    return books;
  } catch (error) {
    throw error;
  }
};
