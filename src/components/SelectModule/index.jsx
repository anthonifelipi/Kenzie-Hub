import { Container, ContainerSelect } from "./styles";

const SelectModule = ({ label, register, name, ...rest }) => {
  return (
    <Container>
      <p>{label}</p>
      <ContainerSelect >
        <select {...register(name)}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro modulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo modulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro modulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto modulo
          </option>
        </select>
      </ContainerSelect>
    </Container>
  );
};
export default SelectModule;
