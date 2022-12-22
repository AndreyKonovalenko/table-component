import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/GlobalStyles";
import * as S from "./components/styles/Layout.styled";
import Table from "./components/Table";
import theme from "./theme/theme";
import { data } from "./__mocks__/data";

const columns = [
  {
    label: "Project",
    accessor: "name",
    sortable: true,
  },
  {
    label: "Token type",
    accessor: "type",
    sortable: false,
  },
  {
    label: "Conditions",
    accessor: "conditions",
    sortable: false,
  },
  { label: "Volume", accessor: "volume", sortable: true },
  { label: "ROI", accessor: "roi", sortable: false },
  { label: "Free float", accessor: "free", sortable: false },
  { label: "Insurance hadge", accessor: "hedge", sortable: false },
  { label: "", accessor: "button", sortable: false },
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
