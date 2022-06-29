import styled from "styled-components";

export const ContainerGeral = styled.div`
  display: ${(props) => (props.showModal ? "block" : "none")};
  z-index: auto;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  max-width: 370px;
  max-height: 350px;
  margin: auto;
  background-color: #212529;
  border-radius: 5px;

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    margin: 5px;
  }
  
`;
export const HeaderTec = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 370px;
  height: 50px;
  background-color: #343b41;
  border-radius: 5px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    margin: 5px;
    background-color: #343b41;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  h3 {
    color: #fff;
    margin: 5px;
  }
`;
