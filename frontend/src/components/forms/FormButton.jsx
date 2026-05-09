import Button from "@mui/material/Button";

export default function FormButton({ label, type }) {
  return (
    <Button type={type} className="myButton" variant={"contained"}>
      {label}
    </Button>
  );
}
