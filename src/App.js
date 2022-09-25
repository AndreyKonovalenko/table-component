import { ThemeProvider } from 'styled-components';
import GlobalStyles from './componenets/styles/GlobalStyles';
import * as S from './componenets/styles/Layout.styled';
import Table from './componenets/Table';
import theme from './theme/theme';

const columns = [
  {
    label: 'Project',
    accessor: 'poroject',
    sortable: true,
    sortbyOrder: 'desc',
  },
  {
    label: 'Token type',
    accessor: 'token_type',
    sortable: true,
    sortbyOrder: 'desc',
  },
  {
    label: 'Condintions',
    accessor: 'condititions',
    sortable: true,
    sortbyOrder: 'desc',
  },
  { label: 'Volume', accessor: 'volume', sortable: true },
  { label: 'RIO', accessor: 'rio', sortable: false },
  { label: 'Free float', accessor: 'free float', sortable: false },
  { label: 'Insurance hadge', accessor: 'insurance_hadge', sortable: false },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Layout>
        <Table columns={columns} />
      </S.Layout>
    </ThemeProvider>
  );
}

export default App;
