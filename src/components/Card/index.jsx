import { Container, Tecnologias } from "./styles";
import { FiTrash2 } from "react-icons/fi"

const Card = ({ searchTec, ...rest }) => {
  return (
    <Container>
      <Tecnologias>
        <div>
          <h2>{searchTec.title}</h2>
          <span>{searchTec.status}</span>
          <button type="submit" {...rest}>
            <FiTrash2 />
          </button>
        </div>
      </Tecnologias>
    </Container>
  );
};

export default Card;
