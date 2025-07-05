import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Heading } from "../atoms/Heading";
import { FormElement } from "../molecules/FormElements";
import { Button } from "../atoms/Button";
import {
  EmailValidate,
  PasswordValidate,
  NameValidate,
  PhoneValidate,
} from "../hooks/helpers";

type formData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  number: string;
};

type formDataError = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  number?: string;
};

function SignUpFormOrg() {
  const [userData, setUserData] = useState<formData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
  });

  const [userDataError, setUserDataError] = useState<formDataError>({});

  const handleSignUp = () => {
    const error: formDataError = {};
    if (!userData.name.trim()) {
      error.name = "Name is required";
    } else {
      const nameError = NameValidate(userData.name);
      if (nameError) error.name = nameError;
    }

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

    if (!userData.confirmPassword.trim()) {
      error.confirmPassword = "Confirm password is required";
    } else if (userData.confirmPassword !== userData.password) {
      error.confirmPassword = "Passwords do not match";
    }

    if (!userData.number.trim()) {
      error.number = "Phone number is required";
    } else {
      const numberError = PhoneValidate(userData.number);
      if (numberError) error.number = numberError;
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
        <Heading title="Sign Up" />
        <FormElement
          value={userData.name}
          labelname="Name"
          type="text"
          placeholder="Enter your name"
          name="name"
          error={userDataError.name}
          onChange={handleInput}
        />
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
        <FormElement
          value={userData.confirmPassword}
          labelname="Confirm password"
          type="password"
          placeholder="Enter your password"
          name="confirmPassword"
          error={userDataError.confirmPassword}
          onChange={handleInput}
        />
        <FormElement
          value={userData.number}
          labelname="Mobile Number"
          type="number"
          placeholder="Enter your number"
          name="number"
          error={userDataError.number}
          onChange={handleInput}
        />

        <Button
          type="button"
          variant="primary"
          onClick={handleSignUp}
          buttonname="Sign Up"
        />
      </Form>
    </>
  );
}

export default SignUpFormOrg;
