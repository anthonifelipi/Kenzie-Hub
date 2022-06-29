import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  max-width: 95%;
  margin: 8px;
  height: 48px;
  background: ${(props) => (props.whiteSchema ? "#FF577F" : "#868E96")};
  color: #fff;
  border-radius: 5px;
  padding: 0px;
`;
