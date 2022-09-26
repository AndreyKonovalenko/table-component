import { ThemeProvider } from 'styled-components';
import GlobalStyles from './componenets/styles/GlobalStyles';
import * as S from './componenets/styles/Layout.styled';
import Table from './componenets/Table';
import theme from './theme/theme';
import { data } from './__mocks__/data';

const columns = [
  {
    label: 'Project',
    accessor: 'name',
    sortable: true,
    sortbyOrder: 'desc',
  },
  {
    label: 'Token type',
    accessor: 'type',
    sortable: true,
    sortbyOrder: 'desc',
  },
  {
    label: 'Conditions',
    accessor: 'conditions',
    sortable: true,
    sortbyOrder: 'desc',
  },
  { label: 'Volume', accessor: 'volume', sortable: true },
  { label: 'ROI', accessor: 'roi', sortable: false },
  { label: 'Free float', accessor: 'free', sortable: false },
  { label: 'Insurance hadge', accessor: 'hedge', sortable: false },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Layout>
        <Table columns={columns} data={data} />
      </S.Layout>
    </ThemeProvider>
  );
}

export default App;
