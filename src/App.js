import { ThemeProvider } from 'styled-components';
import GlobalStyles from './componenets/styles/GlobalStyles';
import Table from './componenets/Table';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Table />
    </ThemeProvider>
  );
}

export default App;
