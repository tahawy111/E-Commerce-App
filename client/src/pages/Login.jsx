import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  @media (max-width: 596px) {
    width: 80%;
    padding: 0 0 0 5px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  background-color: #e9e9e9;
  margin: 10px 0;
  border: none;
  outline: none;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  &:not(:placeholder-shown) {
    outline: 1px solid #e0dede;
  }
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin-left: 5px;
  border: 1px solid teal;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: teal;
  }
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 5px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" type="text" />
          <Input placeholder="Password" type="password" />
          <Button>LOGIN</Button>
        </Form>

        <Link>DO NOT YOU REMEMBER THE PASSWORD? </Link>
        <br />
        <Link>CREATE A NEW ACCOUNT</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
