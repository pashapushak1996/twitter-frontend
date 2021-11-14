import React from "react";
import PropTypes from 'prop-types';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    makeStyles,
    Typography
} from "@material-ui/core";
import { Close, Twitter } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    popupHeader: {
        display: 'flex',
        alignItems: 'center',
        columnGap: theme.spacing(30)
    }
}));

export const Popup = ({ open, handleCloseDialog, children, title, buttonText }) => {
    const classes = useStyles();
    return (
        <Dialog open={ open } onClose={ handleCloseDialog } fullWidth>
            <div className={ classes.popupHeader }>
                <IconButton>
                    <Close color={ 'secondary' }/>
                </IconButton>
                <Twitter style={ { fontSize: '38px' } } color={ 'primary' }/>
            </div>
            <DialogTitle>
                <Typography style={ { fontSize: '20px', fontWeight: 700 } }>
                    { title }
                </Typography>
            </DialogTitle>
            <DialogContent>
                { children }
            </DialogContent>
            <DialogActions>
                <Button variant={ 'contained' } fullWidth>{ buttonText }</Button>
            </DialogActions>
        </Dialog>
    );
};

Popup.propTypes = {
    open: PropTypes.bool,// TODO PropType isRequired,
    handleCloseDialog: PropTypes.func
};



