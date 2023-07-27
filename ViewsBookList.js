import React from "react";
import { ScrollView, Text } from "react-native";
import BookCard from "./BookCard";
import { tw } from "react-native-tailwindcss"; // Importe a biblioteca react-native-tailwindcss

const BookList = ({ books }) => {
  return (
    <ScrollView contentContainerStyle={tw.pX4}>
      {books.length > 0 ? (
        books.map((book) => (
          <BookCard
            title={book.title}
            author={book.author}
            url={book.url}
            rate={book.rate}
          />
        ))
      ) : (
        <Text style={[tw.textCenter, tw.textXl, tw.mT8]}>
        Ops! Não encontramos nenhum livro com esse título.
        </Text>
      )}
    </ScrollView>
  );
};

export default BookList;
