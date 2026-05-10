import "../index.css";
import Box from "@mui/material/Box";
import FormTextField from "./forms/FormTextField";
import FormButton from "./forms/FormButton";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import AxiosInstance from "./axiosInstance";
import { useState } from "react";
import Message from "./Message";

function PasswordResetRequest() {
  // state management
  const [showMessage, setShowMessage] = useState(false);

  const navigate = useNavigate();

  const { handleSubmit, control } = useForm();

  const submitForm = (data) => {
    AxiosInstance.post("api/password_reset/", {
      email: data.email,
    })
      .then((res) => {
        setShowMessage(true);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="myBackground">
      {showMessage ? <Message color={'#69C9AB'} text={'If your email exists you have received an email with instructions for resetting the password'} /> : null}
      <form onSubmit={handleSubmit(submitForm)}>
        <Box className="whiteBox">
          <Box className="itemBox">
            <Box className="title">Request Password Reset</Box>
          </Box>

          <Box className="itemBox">
            <FormTextField name="email" control={control} label={"Email"} />
          </Box>

          <Box className="itemBox">
            <FormButton type={"submit"} label={"Request Password Reset"} />
          </Box>
        </Box>
      </form>
    </div>
  );
}

export default PasswordResetRequest;
