import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Recoverypassword.scss';
import { useForm } from '../../hooks/useForm';

const RecoveryPassword = () => {
  const [formValues, handleInputChange] = useForm({
    email: '',
  });

  const { email } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== '') {
      const response = await fetch(
        'http://localhost:4000/user/recovery-password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      const data = await response.json();

      console.log(data);
    } else {
      alert('Por favor, rellena todos los campos');
    }
  };
  return (
    <>
      <div className="recoverypassword-containermain">
        <Form className="recoverypassword-formbox" onSubmit={handleSubmit}>
          <div className="container-recovery">
            <FormGroup className="form-text-recoverypassword">
              <Label className="text-recoverypassword">
                Ingresar Correo Electronico
              </Label>
              <div className="container-info-recoverypassword">
                <Label className="info-recoverypassword">
                  Puedes restablecer tu contraseña aqui.
                </Label>
              </div>
              <div className="container-input-box-recoverypassword">
                <div className="recoverypassword-input">
                  <Input
                    value={email}
                    name="email"
                    type="email"
                    autoComplete="off"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <i className="far fa-envelope fa-2x"></i>
              </div>
            </FormGroup>
            <Button type="submit" size="lg">
              Enviar
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default RecoveryPassword;
