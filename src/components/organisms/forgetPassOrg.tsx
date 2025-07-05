import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Heading } from "../atoms/Heading";
import { FormElement } from "../molecules/FormElements";
import { Button } from "../atoms/Button";
import { PasswordValidate } from "../hooks/helpers";
import { Link } from "react-router-dom";

type formData = {
  password: string;
  confirmPassword: string;
};

type formDataError = {
  password?: string;
  confirmPassword?: string;
};

function ForgetPassOrg() {
  const [userData, setUserData] = useState<formData>({
    password: "",
    confirmPassword: "",
  });

  const [userDataError, setUserDataError] = useState<formDataError>({});

  const handleForgetPass = () => {
    const error: formDataError = {};

    if (!userData.password.trim()) {
      error.password = "Password is required";
    } else {
      const passwordError = PasswordValidate(userData.password);
      if (passwordError) error.password = passwordError;
    }

    if (!userData.confirmPassword) {
      error.confirmPassword = "Confirm password is required";
    } else if (userData.confirmPassword !== userData.password) {
      error.confirmPassword = "Passwords do not match";
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
        <Heading title="Forget Password" />

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

        <div className="d-flex justify-content-center align-items-center my-3">
          <p>
            Back to<Link to="/" className="ms-2">Sign In</Link>
          </p>
        </div>

        <Button
          type="button"
          variant="primary"
          onClick={handleForgetPass}
          buttonname="Submit"
        />
      </Form>
    </>
  );
}

export default ForgetPassOrg;
