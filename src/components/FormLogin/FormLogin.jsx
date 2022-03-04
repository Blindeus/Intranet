import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Col,
  Card,
  Row,
} from "reactstrap";
import { useAuthContext } from "../../hooks/auth/useAuthentication";
import { useForm } from "../../hooks/useForm";
import "./FormLogin.scss";

const FormLogin = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [formLogin, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formLogin.email || !formLogin.password) {
      alert("Datos incompletos");
      return;
    }
    try {
      const res = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formLogin),
      });
      const data = await res.json();
    //   console.log(data);
      if (res.status !== 200) {
        alert("email o password incorrectos");
      } else {
        login(data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Col xl={12} lg={12}>
        <div className="complement-login-header-tittle">
          <h2>COMPLEMENTO TIENDAS PROPIAS</h2>
          <h2>COMCAIT S.A</h2>
        </div>
        <Card className="login-form-container">
          <h3>Iniciar sesi&oacute;n</h3>

          <Form onSubmit={handleLogin} className="mt-3">
            <Row className="d-flex justify-content-center">
              <Col lg={12}>
                <FormGroup>
                  <Label className="form-text1" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    value={formLogin.email}
                    required
                    autoComplete="off"
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col lg={12} className="mt-2">
                <FormGroup>
                  <Label className="form-text1" htmlFor="password">
                    Contrase&ntilde;a
                  </Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    value={formLogin.password}
                    required
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>

              <Button type="submit" size="lg">
                Ingresar
              </Button>

              <Link to="/recovery-password" className="olvido-password">
                ¿Olvidaste tu contrase&ntilde;a?
              </Link>
              <Link to="/register" className="crear-cuenta-login">
                ¿No tienes cuenta?
                <strong className="mx-2">¡Crea la tuya ahora!</strong>
              </Link>
            </Row>
          </Form>
        </Card>
      </Col>
    </Container>
  );
};

export default FormLogin;
