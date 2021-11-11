import { Button, Link, makeStyles, TextField, Typography } from "@material-ui/core";
import { Apple, Twitter } from '@material-ui/icons'
import Popup from "../components/Popup";
import CreateUserForm from "../components/CreateUserForm";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: "100vh"
    },

    leftBlock: {
        display: 'flex',
        alignItems: 'center',
        flex: '0 0 37%',
        backgroundColor: 'rgb(107, 201, 251)',
        backgroundImage: 'url(https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png)',// TODO download the image
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    leftBlockIcon: {
        height: '450px',
        width: '450px',
        color: '#FFF'
    },

    loginSide: {
        display: 'flex',
        alignItems: 'center',
        flex: '0 0 63%',
        padding: '16px'
    },

    loginSideWrapper: {
        width: '720px',
        padding: '20px',

    },

    loginSideTwitterIcon: { fontSize: '50px' },

    loginSideTitle: {
        margin: '48px 0',
        fontSize: '68px',
        fontWeight: 700,
    },

    loginSideSubtitle: {
        fontSize: '36px',
        fontWeight: 700,
        marginBottom: '32px',
    },
    button: {
        marginBottom: theme.spacing(2),
        width: '380px'
    }
}));

function SignIn() {
    const classes = useStyles();

    let [openDialog, setOpenDialog] = useState(true);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }
    return (
        <div className={ classes.wrapper }>
            <div className={ classes.leftBlock }>
                <Twitter className={ classes.leftBlockIcon }/>
            </div>
            <div className={ classes.loginSide }>
                <div className={ classes.loginSideWrapper }>
                    <Twitter className={ classes.loginSideTwitterIcon } color={ 'primary' }/>
                    <Typography className={ classes.loginSideTitle } variant={ 'h1' }>В курсе происходящего</Typography>
                    <Typography className={ classes.loginSideSubtitle } variant={ 'h4' }>Присоединяйтесь к Твиттеру
                        прямо
                        сейчас!</Typography>
                    <Button className={ classes.button }
                            color={ 'primary' }
                            variant={ 'contained' }
                    >Зарегистрироваться</Button>

                    <Button className={ classes.button }
                            variant={ 'outlined' }
                            color={ 'primary' }
                    >Войти</Button>
                </div>
            </div>
            <Popup open={ openDialog }
                   handleCloseDialog={ handleCloseDialog }
                   title={ 'Создайте учетную запись' }>
                <CreateUserForm/>
            </Popup>
        </div>
    );
}

export default SignIn;