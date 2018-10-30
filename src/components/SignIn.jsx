import React from "react";
import { Button, Icon, Input } from "react-materialize";
import Imagen from "../assets/school.png";
// import {Link} from 'react-router-dom'

const SignIn = () => {
  return (
    <React.Fragment>
      <img className="school" src={Imagen} />
      <div className="form">
        <Input className="col s3 offset-s1" type="email" label="Email" />
        <Input className="col s3" type="password" label="password" />
        <Button waves="light">
          Login
        </Button>
        <p>¿Olvidaste tu contraseña?</p>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
