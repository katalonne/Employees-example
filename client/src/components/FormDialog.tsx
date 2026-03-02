import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem'
import { type Status } from '../constants';

interface FormDialogProps {
  open: boolean; // Boolean to control the open state of the dialog
  onClose: React.MouseEventHandler<HTMLButtonElement>; // Function to handle closing, specific to button clicks
  statuses: readonly Status[]; 
}

export const FormDialog: React.FC<FormDialogProps> = ({
  open = false,
  onClose = () => {},
  statuses = [],
}) => {
  return (
    <React.Fragment>
      <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth='xs'>
        <DialogTitle sx={{ borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
          Create New User
        </DialogTitle>
        <DialogContent>
          <form onSubmit={() => {}} id='subscription-form'>
            <TextField
              autoFocus
              required
              margin='dense'
              id='name'
              name='name'
              label='Full Name'
              type='text'
              fullWidth
              variant='standard'
              color='primary'
            />
            <br />
            <br />
            <FormControl variant='standard' sx={{ minWidth: '100%' }}>
              <InputLabel id='demo-simple-select-standard-label'>
                Status
              </InputLabel>
              <Select
                labelId='demo-simple-select-standard-label'
                id='demo-simple-select-standard'
                value={''}
                onChange={() => {}}
                label='Age'
              >
                {statuses.map((option: string) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions
          sx={{ justifyContent: 'flex-start', padding: '20px 24px' }}
        >
          <Button variant='contained' onClick={onClose}>
            Create
          </Button>
          <Button sx={{ color: '#000' }} onClick={onClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
