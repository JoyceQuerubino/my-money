import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto'
import theme from "./src/theme";
import { Loading } from './src/components/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {

  const [ fontsLoaded ] = useFonts({ Roboto_700Bold, Roboto_500Medium, Roboto_400Regular})

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        { fontsLoaded ? <AppRoutes /> : <Loading />}
      </NavigationContainer>
    </ThemeProvider>
  );
}