import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({error,setError,errorMsg, setErrorMsg}) {
    const [open, setOpen] = React.useState(false);

    //   const handleClickOpen = () => {
    //     setOpen(true);
    //   };

    const handleClose = () => {
        setError(false);
        setErrorMsg("");
        setError(false)
    };

    return (
        <div>
          
            <Dialog
                open={error}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Alerte"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                         <span style={{fontSize:'16px', color:'red'}}>{errorMsg}</span>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {/* <Button onClick={handleClose}></Button> */}
                    <Button onClick={handleClose} autoFocus>
                        Fermer
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}