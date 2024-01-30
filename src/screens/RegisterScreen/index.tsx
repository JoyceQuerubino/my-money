import React, {useState} from 'react';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import { FieldValues, useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { api } from '../../server/api';
import { Header } from '../../components/Header';
import { SmallButton } from '../../components/SmallButton';
import { Input } from '../../components/Input';
import { CategorySelectButton } from '../../components/CategorySelectButton';
import { SelectModal } from '../SelectModal';
import { 
  Container, 
  Content, 
  FormContainer, 
  Title, 
  ContainerButtons,
  ContentButton, 
  Button,
  ButtonTitle,
} from './styles';

type TypeTransactions = "up" | "down";

type DataType = {
  name: string;
  value: number;
  type: TypeTransactions;
  category?: string;
  date: string;
}

export function RegisterScreen() {

  const [selectType, setSelectType] = useState<TypeTransactions>("up");
  const [category, setCategory] = useState({key: "categoria", name: "Selecione a categoria"})
  const [isOpenModal, setIsOpenModal] = useState(false);

  const {control, handleSubmit, reset} = useForm();

  async function postTransactions(data: DataType){
    try{
      await api.post('/transactions', data)
    }catch(erro){
      Alert.alert("Erro no servidor.")
    }
  }

  function handlePress(type: TypeTransactions){
    setSelectType(type)
  }

  function handleOpenModal () {
    setIsOpenModal(true);
  }

  function handleCloseModal () {
    setIsOpenModal(false);
  }

  function clear(){
    setSelectType("up");
    setCategory({key: "categoria", name: "Selecione a categoria"})

    reset({
      name:'',
      amount: '',
    })
  }

  function handleRegister(form: FieldValues){

    const currentDate = format(new Date(), 'dd/MM/yy')

    const data: DataType = {
      name: form.name,
      value: form.amount,
      type: selectType,
      category: category.key,
      date: currentDate,
    }

    if(category.key !== 'categoria'){
      data.category = category.key
    }

    postTransactions(data)
    clear();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
      <Header isHome={false} type={selectType} screenName="Cadastro de transações"/>

      <Content>
        <FormContainer>
          <Title>Tipo de transação</Title>
          
          <ContainerButtons>
            <SmallButton title="Entrada" type="up" isSelected={selectType === "up"} onPress={() => handlePress("up")} />
            <SmallButton title="Saida" type="down" isSelected={selectType === "down"} onPress={() => handlePress("down")}/>
          </ContainerButtons>

          <Title>Dados da transação</Title>
          <Input 
            name="name" 
            control={control} 
            placeholder='Insira o nome' 
            autoCapitalize='sentences' 
            autoCorrect={false}
          />

          <Input 
            name="amount" 
            control={control} 
            placeholder='Insira o valor'
            keyboardType='numeric'
            />

          {selectType === "down" && <CategorySelectButton title={category.name} onPress={handleOpenModal}/>}

        </FormContainer>

        <ContentButton>
          <Button type={selectType} onPress={handleSubmit(handleRegister)}>
            <ButtonTitle>Confirmar</ButtonTitle>
          </Button>
        </ContentButton>
      </Content>

      <Modal visible={isOpenModal}>
        <SelectModal setCategory={setCategory} close={handleCloseModal} />
      </Modal>
    </Container>
      
    </TouchableWithoutFeedback >
  );
}