import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Card from "../../components/Card";
import Header from "../../components/Header";
import RegisterTec from "../../components/RegisterTec";
import api from "../../Services/api";
import {
  Container,
  ContainerGeral,
  DivTecnologia,
  Tecnologias,
  StyledButton,
} from "./styles";

const Home = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [searchTec, setSearchTec] = useState([]);
  const [name, setName] = useState("");
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const loadTec = () => {
    const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));
    api
      .get(`/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setName(response.data.name);
        setSearchTec(response.data.techs);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (authenticated) {
      loadTec();
    }
  }, []);

  const deleteTec = (id) => {
    const deleteTecId = searchTec.filter((item) => item.id !== id);

    api
      .delete(`users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setSearchTec(deleteTecId));
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setAuthenticated(false);
    return history.push("/");
  };

  const changeModal = () => {
    setShowModal(!showModal);
  };

  if (!authenticated) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <ContainerGeral>
        <Header>
          <button onClick={() => clearLocalStorage()}> Sair </button>
        </Header>
        <Container>
          <h1>Olá, {name}</h1>
          <span>Primeiro modulo(introdução front-end)</span>
        </Container>
        <DivTecnologia>
          <h1>Tecnologia</h1>
          <StyledButton onClick={() => changeModal()}>+</StyledButton>
          <RegisterTec showModal={showModal} onClick={() => changeModal()} />
        </DivTecnologia>
        <Tecnologias>
          {searchTec.map((item) => {
            return (
              <Card
                onClick={() => deleteTec(item.id)}
                key={item.id}
                searchTec={item}
              />
            );
          })}
        </Tecnologias>
      </ContainerGeral>
    </>
  );
};
export default Home;
