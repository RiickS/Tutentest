import { useStyles } from './styles';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import clsx from 'clsx';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';


export const MySnackError = ({ message, open, handleClose }: any) => {

    function Alert(props: AlertProps) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const classes = useStyles();
    return (
        <Snackbar open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }}
            autoHideDuration={5000}>
            <Alert severity="error" action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon className={classes.icon} />
                </IconButton>
            ]}>
                <span id="client-snackbar" className={classes.message}>
                    <ErrorIcon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            </Alert>
        </Snackbar>
    );
};