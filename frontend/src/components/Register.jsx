import "../index.css";
import Box from "@mui/material/Box";
import FormTextField from "./forms/FormTextField";
import FormPasswordField from "./forms/FormPasswordField";
import FormButton from "./forms/FormButton";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import AxiosInstance from "./axiosInstance";

function Register() {
  const navigate = useNavigate();

  // form
  const { handleSubmit, control } = useForm();

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

          {/* <Box className="itemBox">
            <FormPasswordField name={'password-2'} control={control} label={"Confirm password"} />
          </Box>*/}

          <Box className="itemBox">
            <FormButton type={'submit'} label={"Register"} />
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
