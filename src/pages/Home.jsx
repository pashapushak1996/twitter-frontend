import { Button, Divider, Grid, Typography, makeStyles, IconButton } from "@material-ui/core";
import {
    Twitter,
    HomeRounded,
    Search,
    NotificationsNoneOutlined,
    MailOutlineOutlined,
    BookmarkBorderOutlined,
    ListAltOutlined,
    PersonOutlined,
    MoreOutlined
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    sideMenuWrapper: { display: 'flex', justifyContent: 'center' },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 250,
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    sideMenuButton: {
        display: 'flex',
        alignItems: 'center',
        padding: 25,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    },
    sideMenuIcon: {
        fontSize: 32,
        marginRight: theme.spacing(3)
    }
}));


export const Home = () => {
    const classes = useStyles();

    return (
        <Grid container style={ { height: '100vh' } }>
            <Grid className={ classes.sideMenuWrapper } item xs={ 3 }
                  spacing={ 4 }>
                <ul className={ classes.sideMenuList }>
                    <li className={ classes.sideMenuListItem }>
                        <IconButton style={ {
                            marginLeft: 12
                        } } color={ 'primary' }>
                            <Twitter style={ {
                                fontSize: 32,
                            } }/>
                        </IconButton>
                    </li>
                    <li className={ classes.sideMenuListItem }>
                        <Button className={ classes.sideMenuButton }>
                            <HomeRounded className={ classes.sideMenuIcon }/>
                            <Typography variant={ 'h6' }>Головна</Typography>
                        </Button>
                    </li>
                    <li className={ classes.sideMenuListItem }>
                        <Button className={ classes.sideMenuButton }>
                            <Search className={ classes.sideMenuIcon }/>
                            <Typography variant={ 'h6' }>Ознайомлення</Typography>
                        </Button>
                    </li>
                    <li className={ classes.sideMenuListItem }>
                        <Button className={ classes.sideMenuButton }>
                            <NotificationsNoneOutlined className={ classes.sideMenuIcon }/>
                            <Typography variant={ 'h6' }>Сповіщення</Typography>
                        </Button>
                    </li>
                    <li className={ classes.sideMenuListItem }>
                        <Button className={ classes.sideMenuButton }>
                            <MailOutlineOutlined className={ classes.sideMenuIcon }/>
                            <Typography variant={ 'h6' }>Повідомлення</Typography>
                        </Button>
                    </li>
                    <li className={ classes.sideMenuListItem }>
                        <Button className={ classes.sideMenuButton }>
                            <BookmarkBorderOutlined className={ classes.sideMenuIcon }/>
                            <Typography variant={ 'h6' }>Закладки</Typography>
                        </Button>
                    </li>
                    <li className={ classes.sideMenuListItem }>
                        <Button className={ classes.sideMenuButton }>
                            <ListAltOutlined className={ classes.sideMenuIcon }/>
                            <Typography variant={ 'h6' }>Списки</Typography>
                        </Button>
                    </li>
                    <li className={ classes.sideMenuListItem }>
                        <Button className={ classes.sideMenuButton }>
                            <PersonOutlined className={ classes.sideMenuIcon }/>
                            <Typography variant={ 'h6' }>Профіль</Typography>
                        </Button>
                    </li>
                    <li className={ classes.sideMenuListItem }>
                        <Button className={ classes.sideMenuButton }>
                            <MoreOutlined className={ classes.sideMenuIcon }/>
                            <Typography variant={ 'h6' }>Інші дії</Typography>
                        </Button>
                    </li>
                    <li className={ classes.sideMenuListItem }>
                        <Button variant={ 'contained' } color={ 'primary' } style={ { marginTop: 40 } }
                                fullWidth>Твітнути</Button>
                    </li>
                </ul>
            </Grid>
            <Divider orientation="vertical" flexItem style={ { marginRight: "-1px" } }/>
            <Grid item xs={ 5 }>
                asfasf
            </Grid>
            <Grid item xs={ 3 }>
                asfasf
            </Grid>
        </Grid>
    );
}


