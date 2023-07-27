import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { tw } from 'react-native-tailwindcss';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Função pesquisa quando o usuário clica no ícone de pesquisa ou pressiona "OK" no teclado.
  const handleSearch = () => {
    if (searchText.trim() !== '') {
      onSearch(searchText);
    } else {
      setIsFocused(true);
    }
  };

  //Verificando se o usuario digitou
  const handleInputChange = (text) => {
    setSearchText(text);
    setIsFocused(false);
  };

  //limpando o campo de buscar para retornar a pagina inicial
  const handleClear = () => {
    setSearchText('');
    setIsFocused(true);
    onSearch('');
  };

  //Função de disparada quando usuario aperta ok no teclado
  const handleSearchOnSubmit = () => {
    handleSearch();
  };

  return (
    <View style={tw.mB4}>
      <View style={tw.flexRow}>
        <TextInput
          style={[ tw.flex1, tw.pX4, tw.pY2, tw.textWhite, tw.bgGray800, tw.roundedLg, tw.mR2,
            isFocused && tw.borderPrimary,
          ]}
          placeholder="Qual livro você procura?"
          placeholderTextColor="gray"
          value={searchText}
          onChangeText={handleInputChange}
          onSubmitEditing={handleSearchOnSubmit}
        />
        {searchText !== '' && (
          <TouchableOpacity style={[tw.itemsCenter, tw.justifyCenter, tw.bgPrimary, tw.rounded, tw.p2, tw.mR2]} onPress={handleClear}>
            <FontAwesome name="times" size={18} color="white" />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={[tw.itemsCenter, tw.justifyCenter, tw.bgPrimary, tw.rounded, tw.p2]} onPress={handleSearch}>
          <FontAwesome name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
