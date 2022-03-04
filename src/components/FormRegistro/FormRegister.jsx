import { useForm } from '../../hooks/useForm';
import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Col,
  Row,
  Container,
  Card,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './FormRegister.scss';

const FormRegister = () => {
  // Expresiones regulares
  const erEmail =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const erPassword = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const [formValues, handleInputChange] = useForm({
    username: '',
    nombre: '',
    email: '',
    confirmacion_email: '',
    password: '',
    confirmacion_password: '',
  });

  const validarDatos = (e) => {
    if (e.target.value.length > 0) {
      e.target.classList.remove('is-invalid');
      e.target.classList.add('is-valid');
    } else {
      e.target.classList.remove('is-valid');
      e.target.classList.add('is-invalid');
    }
  };

  const validarEmail = (e) => {
    if (e.target.type === 'email') {
      if (erEmail.test(e.target.value)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
      } else {
        e.target.classList.remove('is-valid');
        e.target.classList.add('is-invalid');
      }
    }
  };

  const validarPassword = (e) => {
    if (e.target.type === 'password') {
      if (erPassword.test(e.target.value)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
      } else {
        e.target.classList.remove('is-valid');
        e.target.classList.add('is-invalid');
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formValues.nombre === '' ||
      formValues.apellido === '' ||
      !erEmail.test(formValues.email) ||
      !erPassword.test(formValues.password)
    ) {
      alert('Datos incompletos');
      return;
    } else {
      const data = {
        username: formValues.username,
        name: formValues.nombre,
        email: formValues.email,
        password: formValues.password,
      };
      const response = await fetch('http://localhost:4000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Usuario registrado');
      }
    }
  };

  return (
    <Container>
      <Col xl={12} lg={12}>
        <div className="complement-login-header-tittle">
          <h2>COMPLEMENTO TIENDAS PROPIAS</h2>
          <h2>COMCAIT S.A</h2>
        </div>
        <Card className="container-form-register">
          <h3>Registro de Usuario</h3>
          <Form onSubmit={handleSubmit}>
            <Row className="d-flex justify-content-center">
              <Col lg={12} md={12} sm={12} className="mt-2">
                <FormGroup>
                  <Label className="form-text5" htmlFor="username">
                    Nombre de usuario
                  </Label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    value={formValues.username}
                    autoComplete="off"
                    required
                    onChange={(e) => {
                      handleInputChange(e);
                      validarDatos(e);
                    }}
                  />
                </FormGroup>
              </Col>
              <Col lg={12} md={12} sm={12} className="mt-2">
                <FormGroup>
                  <Label className="form-text5" htmlFor="nombre">
                    Nombre
                  </Label>
                  <Input
                    type="text"
                    id="nombre"
                    name="nombre"
                    autoComplete="off"
                    value={formValues.nombre}
                    required
                    onChange={(e) => {
                      handleInputChange(e);
                      validarDatos(e);
                    }}
                  />
                </FormGroup>
              </Col>

              <Col lg={12} md={12} sm={12} className="mt-2">
                <FormGroup>
                  <Label className="form-text5" htmlFor="email">
                    Correo
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    autoComplete="off"
                    name="email"
                    value={formValues.email}
                    required
                    onChange={(e) => {
                      handleInputChange(e);
                      validarEmail(e);
                    }}
                  />
                </FormGroup>
              </Col>
              <Col lg={12} md={12} sm={12} className="mt-2">
                <FormGroup>
                  <Label className="form-text5" htmlFor="password">
                    Contrase&ntilde;a
                  </Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    required
                    onChange={(e) => {
                      handleInputChange(e);
                      validarPassword(e);
                    }}
                  />
                  <FormFeedback>
                    La contrase&ntilde;a debe tener m&iacute;nimo 6
                    c&aacute;racteres y m&aacute;ximo 16, adem&aacute;s, debe
                    poseer un n&uacute;mero.
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Button type="submit" size="lg">
                Crear Cuenta
              </Button>
              <Link to="/" className="d-flex justify-content-center mt-2">
                ¿Tienes cuenta? <strong>Inicia sesión</strong>
              </Link>
            </Row>
          </Form>
        </Card>
      </Col>
    </Container>
  );
};

export default FormRegister;
