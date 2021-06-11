import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    from: {
        display: 'grid',
        maxWidth: 400,
        margin: '0 auto',
        '& .MuiInput-formControl': {
            color: '#fff',
            width: 240,
            fontSize: 20,
        },
        '& .MuiFormLabel-filled': {
            color: '#dc3545',
            width: 240,
            fontSize: 15,
        },
        '& .MuiInput-underline:after': {
            borderBottom: '2px solid #dc3545 !important',
        },
        '& .MuiIconButton-root': {
            color: '#dc3545',
        },
        '& .MuiInputLabel-animated': {
            color: '#dc3545',
        },
    },
    input: {
        textAlign: 'left',
        marginBottom: theme.spacing(6)
    },
    button: {
        marginTop: theme.spacing(2)
    },
    grid: {
        flexGrow: 1,
        '& .MuiGrid-item': {
            margin: 'auto'
        }
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    menu: {
        width: 200,
        '& .MuiInputBase-formControl.MuiInput-formControl': {
            color: '#fff !important',
        },
    },
    item: {
        textAlign: 'left'
    },
    itemSpecial: {
        marginLeft: theme.spacing(2),
        textAlign: 'left',
        '& .MuiInputBase-formControl.MuiInput-formControl': {
            color: '#fff !important',
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: '#dc3545 !important',
        }, '& .MuiInputLabel-animated': {
            color: '#dc3545 !important',
        }, '& MuiFormControl-root': {
            color: '#dc3545 !important',
        },
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        '& .MuiInputBase-formControl.MuiInput-formControl': {
            color: '#fff !important',
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: '#dc3545 !important',
        }, '& .MuiInputLabel-animated': {
            color: '#dc3545 !important',
        },
        '& .MuiInputLabel-formControl-animated': {
            color: '#dc3545 !important',
        },
    },
    '.makeStyles-container-9': {
        justifyContent: 'space-between'
    },
}));