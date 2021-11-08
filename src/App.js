import {
    Box, Button,
    CssBaseline,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    makeStyles, Typography,
} from "@material-ui/core";
import { Close, Twitter } from "@material-ui/icons";

import SignIn from "./pages/SignIn";
import { useState } from "react";
import CreateUserForm from "./components/CreateUserForm";

const useStyles = makeStyles((theme) => ({
        popup: {
            width: '600px'
        }
    })
);


function App() {

    let [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    const classes = useStyles();

    return (<div>
        <CssBaseline/>
        <SignIn handleOpenDialog={ handleOpenDialog }/>
        <Dialog fullWidth onClose={ handleCloseDialog } open={ openDialog }>
            <Box display={ 'flex' } justifyContent={ 'space-between' } alignItems={ 'center' }>
                <IconButton onClick={ handleOpenDialog } color='secondary'>
                    <Close/>
                </IconButton>
                <Twitter color={ 'primary' }/>
            </Box>
            <DialogTitle>
                <Typography variant={ 'h5' } style={ { fontWeight: 700 } }>
                    Создайте учетную запись
                </Typography>
            </DialogTitle>
            <DialogContent>
                <CreateUserForm/>
            </DialogContent>
            <DialogActions>
                <Button color={ 'primary' } variant={ 'contained' } fullWidth>Далее</Button>
            </DialogActions>
        </Dialog>
    </div>)
}

export default App;
