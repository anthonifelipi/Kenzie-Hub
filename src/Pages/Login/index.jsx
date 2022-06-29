import { Container, ContainerGeral } from "./styles";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Login = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("email obrigatorio").email(),
    password: yup
      .string()
      .required("senha obrigatorio")
      .min(6, "a senha deve conter 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
        setAuthenticated(true);
        return history.push("/home");
      })
      .catch((err) => toast.error("e-mail ou senha invalido"));
  };
  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <ContainerGeral>
      <Header />
      <Container>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            register={register}
            type="email"
            label="E-mail"
            placeholder="Digite seu E-mail"
            name="email"
            error={errors.email?.message}
          />
          <Input
            register={register}
            type="password"
            label="Senha"
            placeholder="Digite seu senha"
            name="password"
            error={errors.password?.message}
          />
          <Button type="submit" whiteSchema>
            Entrar
          </Button>
          <span>Ainda nao possui uma conta?</span>
          <Button onClick={() => history.push("/cadastro")}>
            {" "}
            Cadastre-se
          </Button>
        </form>
      </Container>
    </ContainerGeral>
  );
};
export default Login;
