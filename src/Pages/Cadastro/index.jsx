import { Container, ContainerGeral } from "./styles";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectModule from "../../components/SelectModule";
import api from "../../Services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Cadastro = ({ authenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("nome obrigatorio"),
    email: yup.string().required("e-mail obrigatorio").email(),
    password: yup
      .string()
      .required("senha obrigatorio")
      .min(6, "a senha deve conter 6 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha imcompativel")
      .required("senha incompativel"),
    bio: yup.string().required("Bio obrigatoria"),
    contact: yup.string().required("Contato obirgatorio"),
    course_module: yup.string().required("a senha nao é compativel"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({
    name,
    email,
    password,
    confirmPassword,
    bio,
    contact,
    course_module,
  }) => {
    const user = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      bio: bio,
      contact: contact,
      course_module: course_module,
    };
    api
      .post("/users", user)
      .then((response) => {
        toast.success("Cadastro realizado com sucesso");
        return history.push("/");
      })
      .catch((err) => toast.error("falha ao cadastrar usuario"));
  };

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <ContainerGeral>
      <Header> <button onClick={() => history.push("/")}>Voltar</button> </Header>
      <Container>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa!</span>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            register={register}
            label="Nome"
            placeholder="Digite seu nome"
            name="name"
            error={errors.name?.message}
          />
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
          <Input
            register={register}
            type="password"
            label="Confirmar senha"
            placeholder="Confirme sua senha"
            name="confirmPassword"
            error={errors.confirmPassword?.message}
          />
          <Input
            register={register}
            label="Bio"
            placeholder="Escreva um pouco sobre você"
            name="bio"
            error={errors.bio?.message}
          />
          <Input
            register={register}
            label="Contato"
            placeholder="Deixe um contato (celular ou email)"
            name="contact"
            error={errors.contact?.message}
          />

          <SelectModule
            label="Selecionar modulo"
            register={register}
            name="course_module"
            error={errors.course_module?.message}
          />

          <Button type="submit" whiteSchema>
            Cadastrar
          </Button>
          <p>
            Ja possui uma conta? <Link to="/"> clique aqui! </Link>
          </p>
        </form>
      </Container>
    </ContainerGeral>
  );
};
export default Cadastro;
