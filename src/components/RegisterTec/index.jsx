import { useForm, reset } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Services/api";
import { Container, ContainerGeral, HeaderTec } from "./styles";
import { useState } from "react";
import Input from "../Input";
import { toast } from "react-toastify";
import Button from "../Button";
import SelectNivel from "../SelectNivel";

const RegisterTec = ({
  showModal,
  setShowModal,
  searchTec,
  setSearchTec,
  ...rest
}) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token"))
  );
  const schema = yup.object().shape({
    title: yup.string().required(""),
    status: yup.string().required(""),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const createdTec = (x) => {
    api
      .post("/users/techs", x, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => window.location.reload(),
        toast.success("tecnologia cadastrada com sucesso")
      )
      .catch((err) => toast.error("Falha ao cadastrar tecnologia"));
  };
  const onSubmitFunction = (data) => {
    // localStorage.setItem("@KenzieHub:user", JSON.stringify());
    createdTec(data);
  };

  return (
    <ContainerGeral showModal={showModal}>
      <Container>
        <HeaderTec>
          <h3>Tecnologia</h3> <button {...rest}>X</button>
        </HeaderTec>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            register={register}
            label="nome"
            placeholder="Nome da tecnologia"
            name="title"
          />
          <SelectNivel
            label="Selecionar status"
            register={register}
            name="status"
          />
          <Button whiteSchema type="submit">
            Cadastrar tecnologia
          </Button>
        </form>
      </Container>
    </ContainerGeral>
  );
};
export default RegisterTec;
