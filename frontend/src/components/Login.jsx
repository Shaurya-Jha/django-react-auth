import "../index.css";
import Box from "@mui/material/Box";
import FormTextField from "./forms/FormTextField";

function Login() {
    return (
        <div className="myBackground">
            <Box className="whiteBox">
                <Box className="itemBox">
                    <Box className="title">Login</Box>
                </Box>

                <Box className="itemBox">
                    <FormTextField label={"Form email"} />
                </Box>

                <Box className="itemBox">
                    Form password
                </Box>

                <Box className="itemBox">
                    Button
                </Box>

                <Box className="itemBox">
                    Link to register page
                </Box>
            </Box>
        </div>
    )
};

export default Login;