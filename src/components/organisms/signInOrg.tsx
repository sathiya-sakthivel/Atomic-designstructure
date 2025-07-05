import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Heading } from "../atoms/Heading";
import { FormElement } from "../molecules/FormElements";
import { Button } from "../atoms/Button";
import { EmailValidate, PasswordValidate } from "../hooks/helpers";
import { Link } from "react-router-dom";

type formData = {
  email: string;
  password: string;
};

type formDataError = {
  email?: string;
  password?: string;
};

function SignInFormOrg() {
  const [userData, setUserData] = useState<formData>({
    email: "",
    password: "",
  });

  const [userDataError, setUserDataError] = useState<formDataError>({});

  const handleSignIn = () => {
    const error: formDataError = {};
    if (!userData.email.trim()) {
      error.email = "Email is required";
    } else {
      const emailError = EmailValidate(userData.email);
      if (emailError) error.email = emailError;
    }

    if (!userData.password.trim()) {
      error.password = "Password is required";
    } else {
      const passwordError = PasswordValidate(userData.password);
      if (passwordError) error.password = passwordError;
    }

    setUserDataError(error);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <Form>
        <Heading title="Sign In" />
        <FormElement
          value={userData.email}
          labelname="Email"
          type="email"
          placeholder="Enter your email"
          name="email"
          error={userDataError.email}
          onChange={handleInput}
        />
        <FormElement
          value={userData.password}
          labelname="Password"
          type="password"
          placeholder="Enter your password"
          name="password"
          error={userDataError.password}
          onChange={handleInput}
        />
        <div className="d-flex justify-content-center align-items-center my-3 " >
          <Link to="/forget-password">Forget Password </Link>
        </div>
        <Button
          type="button"
          variant="primary"
          onClick={handleSignIn}
          buttonname="Sign In"
        />
      </Form>
    </>
  );
}

export default SignInFormOrg;
