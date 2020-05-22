import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../css/login.css';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
    <div className="container2" >
      <form action="/" onSubmit={onSubmit}>
        <h2 className="card-heading">druggler</h2>

        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div className="field-line">
          <TextField
            floatingLabelText="Name"
            name="name"
            errorText={errors.name}
            onChange={onChange}
            value={user.name}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Email"
            name="email"
            errorText={errors.email}
            onChange={onChange}
            value={user.email}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Password"
            type="password"
            name="password"
            onChange={onChange}
            errorText={errors.password}
            value={user.password}
          />
        </div>

        <div className="button-line">
          <RaisedButton type="submit" label="Create New Account" primary />
        </div>

        <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
      </form>
    </div>
  );

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;