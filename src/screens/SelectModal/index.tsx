import React, {useState} from 'react';
import { FlatList } from 'react-native';
import { categories } from '../../utils/categories';
import { Header } from '../../components/Header';
import { 
  Container,
  Content,
  Category,
  Icon,
  Name,
  Separator,
} from './styles';

type CategoryType = {
  key: string;
  name: string;
}

interface Props {
  setCategory: (item: CategoryType) => void;
  close: () => void;
}

export function SelectModal({setCategory, close}: Props) {

  function handleSelectedCategory(item: CategoryType){
    setCategory(item)
    close();
  }

  return (
    <Container>
        <Header isHome={false} screenName='Selecione a categoria' type="down" />
      <Content>
        <FlatList 
          data={categories} 
          keyExtractor={(item) => item.key}
          style={{flex: 1, width: "100%"}}
          renderItem={({item}) => 
          <Category onPress={() => handleSelectedCategory(item)}>
            <Icon name={item.icon}/>
            <Name>{item.name}</Name>
          </Category>}
          ItemSeparatorComponent={() => <Separator/>}  
        />
      </Content>

    </Container>
  );
}