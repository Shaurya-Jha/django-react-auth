import TextField from "@mui/material/TextField";
import "../../index.css";
import { Controller } from "react-hook-form";

export default function FormTextField(props) {
  const { label, name, control } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          id="outlined-basic"
          label={label}
          variant="outlined"
          className="myForm"
          onChange={onChange}
          value={value}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
}
