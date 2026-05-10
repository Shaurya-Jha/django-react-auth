import "../index.css";
import Box from "@mui/material/Box";
import FormTextField from "./forms/FormTextField";
import FormPasswordField from "./forms/FormPasswordField";
import FormButton from "./forms/FormButton";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import AxiosInstance from "./axiosInstance";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Register() {
  const navigate = useNavigate();

  const schema = yup.object({
    email: yup
      .string()
      .email("Field expects email address")
      .required("Email is a required field"),
    password: yup
      .string()
      .required("Password is a required field")
      .min(4, "Password must be at least 4 characters"),
    // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    // .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    // .matches(/[0-9]/, 'Password must contain at least one number')
    // .matches(/[!@#$%^&*(),.?":;{}|<>+]/, 'Password must contain at least one special character'),
    password2: yup
      .string()
      .required("Password confirmation is a required field")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  // form
  const { handleSubmit, control } = useForm({ resolver: yupResolver(schema) });

  const submission = (data) => {
    AxiosInstance.post("register", {
      email: data.email,
      password: data.password,
    })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="myBackground">
      <form onSubmit={handleSubmit(submission)}>
        <Box className="whiteBox">
          <Box className="itemBox">
            <Box className="title">Login</Box>
          </Box>

          <Box className="itemBox">
            <FormTextField
              name={"email"}
              control={control}
              label={"Form email"}
            />
          </Box>

          <Box className="itemBox">
            <FormPasswordField
              name={"password"}
              control={control}
              label={"Password"}
            />
          </Box>

          <Box className="itemBox">
            <FormPasswordField
              name={"password2"}
              control={control}
              label={"Confirm password"}
            />
          </Box>

          <Box className="itemBox">
            <FormButton type={"submit"} label={"Register"} />
          </Box>

          <Box className="itemBox">
            <Link to="/">Already have an account? Please login</Link>
          </Box>
        </Box>
      </form>
    </div>
  );
}

export default Register;
