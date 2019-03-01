import React from 'react';
import { Redirect } from 'react-router-dom';

const CheckLogin = (props) => {
  if (localStorage.getItem('token')) {
    return props.component;
  } else {
    return <Redirect to="/login" />
  }
}

export default CheckLogin;
