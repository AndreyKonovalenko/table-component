import { nanoid } from 'nanoid';
import * as S from './styles/Select.styled';

const Select = ({ accessor, data, handleFiltering, filter }) => {
  const handleChange = (event) => {
    handleFiltering(accessor, event.target.value);
  };

  const option = data.map((element) => (
    <option key={nanoid()} value={element}>
      {element}
    </option>
  ));
  return (
    <S.Select value={filter} onChange={handleChange}>
      {option}
    </S.Select>
  );
};
export default Select;
