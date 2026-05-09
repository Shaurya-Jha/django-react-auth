import "../index.css";
import Box from "@mui/material/Box";
import FormTextField from "./forms/FormTextField";
import FormPasswordField from "./forms/FormPasswordField";
import FormButton from "./forms/FormButton";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import AxiosInstance from "./axiosInstance";

function Login() {

  const navigate = useNavigate();

  const { handleSubmit, control } = useForm();

  const submitForm = (data) => {
    AxiosInstance.post(
      'login', {
        email: data.email,
        password: data.password,
      }
    )
      .then((res) => {
        if (res.status == 200) {
          localStorage.setItem('Token', res.data.token)
        }
        navigate('/home')
      })
      .catch((error) => console.error(error))
  }
  
  return (
    <div className="myBackground">
      <form onSubmit={handleSubmit(submitForm)}>
      <Box className="whiteBox">
        <Box className="itemBox">
          <Box className="title">Login</Box>
        </Box>

        <Box className="itemBox">
          <FormTextField name='email' control={control} label={"Form email"} />
        </Box>

        <Box className="itemBox">
          <FormPasswordField name='password' control={control} label={"Password"} />
        </Box>

        <Box className="itemBox">
          <FormButton type={'submit'} label={"Login"} />
        </Box>

        <Box className="itemBox">
          <Link to="/register">No account yet? Please register</Link>
        </Box>
        </Box>
      </form>
    </div>
  );
}

export default Login;
