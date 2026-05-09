import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../index.css';

export default function FormTextField(props) {

    const {label} = props;

  return (
      <TextField id="outlined-basic" label={label} variant="outlined" className='myForm' />
  );
}
