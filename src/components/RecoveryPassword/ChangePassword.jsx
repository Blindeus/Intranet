import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Changepassword.scss';
import { useParams } from 'react-router';
import { useForm } from '../../hooks/useForm';

import Swal from 'sweetalert2';

const ChangePassword = () => {
  const { token } = useParams();

  console.log(token);

  const [formValues, handleInputChange] = useForm({
    password: '',
    repeatPassword: '',
  });

  const { password, repeatPassword } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === '' || repeatPassword === '') {
      Swal.fire({
        icon: 'error',
        title: 'Ups...',
        text: 'Por favor, rellena todos los campos',
      });
    } else if (password !== repeatPassword) {
      console.log('Las contraseñas no coinciden');
      Swal.fire({
        icon: 'error',
        title: 'Ups...',
        text: 'Las contraseñas no coinciden',
      });
    } else {
      const data = {
        password,
      };

      const response = await fetch(
        `http://localhost:4000/user/change-password/${token}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const dataResponse = await response.json();

      console.log(dataResponse);
    }
  };

  return (
    <>
      <div className="changepassword-container-main">
        <Form className="changepassword-form" onSubmit={handleSubmit}>
          <div className="changepassword-form-container">
            <FormGroup className="form-text-changepassword">
              <Label className="changepassword-text">Nueva Contraseña</Label>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              <Label className="changepassword-text">
                Confirmar Contraseña
              </Label>
              <Input
                type="password"
                name="repeatPassword"
                value={repeatPassword}
                onChange={handleInputChange}
              />
            </FormGroup>
            <Button type="submit" color="warning" size="lg">
              Enviar
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
export default ChangePassword;
