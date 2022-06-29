import { Container, InputContainer } from "./styles";

const Input = ({ label, register, name, error, ...rest }) => {
  return (
    <>
      <Container>
        <p>
          {label} {!!error && <span> - {error} </span>}
        </p>
        <InputContainer>
          <input {...register(name)} {...rest} />
        </InputContainer>
      </Container>
    </>
  );
};
export default Input;
