import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import theme from '../../theme';
import { formatedValue, getTotalForTypes } from '../../helpers/formatted';
import { Total } from '../../components/Total';
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { TransactionCard } from '../../components/TransactionCard';
import { useFetchTransactions } from '../../hooks/useFetchTransactions';
import { Container, ContainerBanners, Content, ContainerList } from './styles';


export function Home() {
  const isFocused = useIsFocused();
  const { transactions, loading, fetchTransactions } = useFetchTransactions()
  const { total, totalDown, totalUp } = getTotalForTypes(transactions);
 
  function renderListTransations(){
    return(
      <ContainerList>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => 
          <TransactionCard 
            name={item.name}
            type={item.type}
            value={formatedValue(item.value)}
            category={item.category}
            date={item.date}
          />}
          showsVerticalScrollIndicator={false}
        />
      </ContainerList>
    )
  }

  useEffect(() => {
    fetchTransactions();
  }, [isFocused])

  return (
    <Container>
      <Header isHome type={"up"} screenName="MyMoney"/>

      <Content>
        <Total value={total} />
        <ContainerBanners>
          <Banner title='Entradas' type='up' value={totalUp}/>
          <Banner title='Saída' type='down' value={totalDown}/>
        </ContainerBanners>

        { loading ? <Loading background={theme.COLORS.BACKGROUND} loadColor={theme.COLORS.PRIMARY} /> :  renderListTransations()}
      
      </Content>
    
    </Container>
  );
}