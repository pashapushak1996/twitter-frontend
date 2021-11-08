import { Grid, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiFormControl-root': {
            width: '100%',
            marginBottom: '20px'
        }
    }
}));


function CreateUserForm() {
    const classes = useStyles();

    return (
        <form className={ classes.root }>
            <Grid container>
                <Grid item xs={ 12 }>
                    <TextField label="Имя" variant="outlined"/>
                </Grid>
                <Grid item xs={ 12 }>
                    <TextField label="Телефон" variant="outlined"/>
                </Grid>
            </Grid>

        </form>
    );
}

export default CreateUserForm;