import "../index.css";
import Box from "@mui/material/Box";
import FormButton from "./forms/FormButton";
import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import AxiosInstance from "./axiosInstance";
import { useState } from "react";
import Message from "./Message";
import FormPasswordField from "./forms/FormPasswordField";

function PasswordReset() {
  // state management
  const [showMessage, setShowMessage] = useState(false);

  const navigate = useNavigate();
  const { token } = useParams();

  const { handleSubmit, control } = useForm();

  const submitForm = (data) => {
    AxiosInstance.post("api/password_reset/confirm/", {
      password: data.password,
      token: token,
    })
      .then(() => {
        setShowMessage(true);

        setTimeout(() => {
          navigate("/");
        }, 5000);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="myBackground">
      {showMessage ? (
        <Message
          color={"#69C9AB"}
          text={
            "Your password reset was successfull. You will be redirected to login page shortly."
          }
        />
      ) : null}
      <form onSubmit={handleSubmit(submitForm)}>
        <Box className="whiteBox">
          <Box className="itemBox">
            <Box className="title">Reset Password</Box>
          </Box>

          <Box className="itemBox">
            <FormPasswordField
              name="password"
              label="Password"
              control={control}
            />
          </Box>

          <Box className="itemBox">
            <FormPasswordField
              name="confirmPassword"
              label="Confirm password"
              control={control}
            />
          </Box>

          <Box className="itemBox">
            <FormButton type={"submit"} label={"Reset Password"} />
          </Box>
        </Box>
      </form>
    </div>
  );
}

export default PasswordReset;
