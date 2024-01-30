import React, { useEffect, useState } from 'react';
import { ListCardType } from '../helpers/formatted';
import { Alert } from 'react-native';
import { api } from '../server/api';

export const useFetchTransactions = () => {

    const [transactions, setTransactions] = useState<ListCardType[]>();
    const [loading, setLoading] = useState(false);

    async function fetchTransactions(){
        try{
          setLoading(true);
          const { data } = await api.get('/transactions');
          setTransactions(data);
    
        }catch(error){
          Alert.alert('Erro no servidor, tente novamente mais tarde.')
        }finally{
          setLoading(false);
        }
      }
    
      useEffect(() => {
        fetchTransactions();
      }, [])

      return { transactions, loading, fetchTransactions }
}