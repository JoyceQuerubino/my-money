import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { VictoryPie } from "victory-native";
import { addMonths, format, subMonths } from "date-fns";
import { useFetchTransactions } from "../../hooks/useFetchTransactions";
import { Header } from "../../components/Header";
import { Category } from "../../components/Category";
import { Loading } from "../../components/Loading";
import { ListCardType, formatedValue, getTransactionsByMonth } from "../../helpers/formatted";
import { categories } from "../../utils/categories";
import theme from "../../theme";
import { 
    Container, 
    Content, 
    ChartContainer,
    MonthSelect,
    MonthButton,
    MonthIcon,
    Month,
} from "./styles";


  interface CategoryData {
    key: string;
    name: string;
    color: string;
    total: string;
    percent: string;
    percentFormated: string;
  }

export function ChartScreen(){
    const isFocused = useIsFocused();
    const { transactions, loading, fetchTransactions } = useFetchTransactions()

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [ totalByCategory, setTotalByCategory ] =  useState<CategoryData[]>([]);


    function getTransactionsByCategory(transactions: ListCardType){
        const newTotal: CategoryData[] = []
        if(!transactions) return;

        const transactionsFilterByDate = getTransactionsByMonth(transactions, selectedDate);
        const totalByDate = transactionsFilterByDate.reduce((total, item) => total + parseFloat(item.value), 0)
        
        categories?.forEach((category) => {
            let categorySum = 0;

            transactionsFilterByDate?.forEach((transaction) => {
                if(transaction.category === category.key){
                    categorySum += parseFloat(transaction.value)
                }
            })

            if(categorySum > 0){
                const total = formatedValue(categorySum);
                const percent = Number(categorySum / totalByDate * 100).toFixed(0)

                newTotal.push({
                    key: category.key,
                    name: category.name,
                    color: category.color,
                    total,
                    percent,
                    percentFormated: `${percent}%`
                })
            }
        })
        setTotalByCategory(newTotal)
    }

    function handleDateChange(option: "back" | "next"){
        if(option === "next"){
            const newDate = addMonths(selectedDate, 1);
            setSelectedDate(newDate);
            return;
        }

        const newDate = subMonths(selectedDate, 1);
        setSelectedDate(newDate);
    }

    useEffect(() => {
        fetchTransactions();
      }, [isFocused])
    
    useEffect(() => {

        if( transactions && transactions.length > 0){
            getTransactionsByCategory(transactions);
        }
    }, [transactions, selectedDate])

    return (
        <Container>
            <Header isHome={false} screenName={"Gráfico por categorias"} type={"up"}  />
            <Content showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: useBottomTabBarHeight()}}>
                { loading ? (<Loading background={theme.COLORS.BACKGROUND} loadColor={theme.COLORS.PRIMARY} />) : 
                (
                    <>
                        <MonthSelect>
                            <MonthButton onPress={() => handleDateChange("back")}>
                                <MonthIcon name="chevron-left" />
                            </MonthButton>

                            <Month>{format(selectedDate, "MMM, yyyy")}</Month>

                            <MonthButton onPress={() => handleDateChange("next")}>
                                <MonthIcon  name="chevron-right"/>
                            </MonthButton>
                        </MonthSelect>

                        <ChartContainer>
                            <VictoryPie 
                                data={totalByCategory}
                                x="percentFormated"
                                y="percent"
                                colorScale={ totalByCategory?.map((item) => item.color)}
                                style={{
                                    labels:{
                                        fontSize: 14,
                                        fontWeight: "bold",
                                        fill: theme.COLORS.LIGHT
                                    }
                                }}
                                labelRadius={68}
                            />

                        </ChartContainer>

                        { totalByCategory?.map((totalTransactions) => 
                             <Category 
                                key={totalTransactions.key}
                                title={totalTransactions.name}
                                color={totalTransactions.color}
                                value={totalTransactions.total} 
                            />
                        ) }
                    </>
                ) 
                }
            </Content>
        </Container>
    )
}