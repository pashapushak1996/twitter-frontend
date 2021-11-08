import { Button, Link, makeStyles, Typography } from "@material-ui/core";
import { Apple, Twitter } from '@material-ui/icons'

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
        display: 'flex',
        justifyContent: 'center',
        width: '300px',
        marginBottom: '10px',
    },

    buttonText: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    },
    buttonAppleIcon: {
        fontSize: '15px',
        marginRight: '5px'
    },

    loginSideBottomInfo: {
        width: '380px',
        fontSize: '13px',
        color: 'rgb(83, 100, 113)'
    },
    loginSideBottomText: {
        fontSize: '15px',
        marginTop: '20px'
    }
}));

function SignIn({ handleOpenDialog }) {
    const classes = useStyles();


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

                    <Button className={ classes.button } variant={ 'outlined' } fullWidth>
                        <span className={ classes.buttonText }>Регистрация с помощью Google</span>
                    </Button>

                    <Button className={ classes.button } variant={ 'outlined' } fullWidth>
                        <Apple className={ classes.buttonAppleIcon }/>
                        <span className={ classes.buttonText }>Зарегистрироваться с учетной записью Apple</span>
                    </Button>
                    <Button className={ classes.button } variant={ 'outlined' } fullWidth>
                        <span className={ classes.buttonText }>Зарегистрируйтесь с помощью номера телефона или адреса электронной почты</span>
                    </Button>
                    <div className={ classes.loginSideBottomInfo }>
                        Регистрируясь, вы соглашаетесь с Условиями предоставления услуг и Политикой конфиденциальности,
                        а также с Политикой использования файлов cookie.
                    </div>
                    {
                        // TODO Зробити знизу лінк до сторінки логування
                    }
                    <div className={ classes.loginSideBottomText }>
                        Уже зарегистрированы?
                        <Link onClick={ handleOpenDialog } color={ 'primary' }>
                            Войдите
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;