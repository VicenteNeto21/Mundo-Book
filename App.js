import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Container, Header, Body, Title } from 'native-base';
import ViewsBookList from './ViewsBookList';
import SearchBar from './SearchBar';
import { fetchBooks } from './api';
import { tw } from 'react-native-tailwindcss';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchInitialBooks = async () => {
      try {
        const booksData = await fetchBooks('JavaScript');
        setBooks(booksData);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
        setIsLoading(false);
      }
    };

    fetchInitialBooks();
  }, []);

  const handleSearch = async (searchKey) => {
    setIsLoading(true);
    try {
      const booksData = await fetchBooks(searchKey);
      setBooks(booksData);
      setIsLoading(false);
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
      setIsLoading(false);
    }
  };

  return (
    <Container style={tw.flex1}>
      <Header style={tw.bgPrimary}>
        <Body>
          <Title style={[tw.textWhite, tw.fontBold]}>Mundo Book - Sua Livraria Digital</Title>
        </Body>
      </Header>
      <View style={[tw.flex1, tw.p4]}>
        <SearchBar onSearch={handleSearch} />
        {isLoading ? (
          <View style={[tw.absolute, tw.top0, tw.left0, tw.right0, tw.bottom0, tw.justifyCenter, tw.itemsCenter, tw.bgWhiteOpacity50]}>
            <ActivityIndicator size="large" color="#3498db" />
          </View>
        ) : (
          <ViewsBookList books={books} />
        )}
      </View>
    </Container>
  );
}
