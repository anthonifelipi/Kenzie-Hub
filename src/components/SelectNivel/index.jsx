import { Container, ContainerSelect } from "./styles";

const SelectNivel = ({ label, register, name, ...rest }) => {
  return (
    <Container>
      <p>{label}</p>
      <ContainerSelect >
        <select {...register(name)}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediario">Intermediario</option>
          <option value="Avançado">Avançado</option>
        </select>
      </ContainerSelect>
    </Container>
  );
};
export default SelectNivel;
