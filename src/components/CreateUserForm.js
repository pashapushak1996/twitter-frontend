import React, { useState } from "react";
import {
    FormControl,
    FormGroup,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '12px 36px 32px',
        '& .MuiTextField-root': {
            marginBottom: theme.spacing(2)
        }
    }
}));

const CreateUserForm = () => {
    const classes = useStyles();

    const [value, setValue] = useState('');

    const months = [
        'Січень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад'
    ];

    const handleOnSelect = (e) => {
        const value = e.target.value;
        setValue(value);
    };

    return (
        <FormControl component={ 'fieldset' } className={ classes.root } fullWidth>
            <FormGroup>
                <TextField variant={ 'outlined' } label={ 'Имя' }/>
                <TextField variant={ 'outlined' } label={ 'Телефон' }/>
                <Typography>
                    Эта информация не будет общедоступной. Подтвердите свой возраст, даже если эта учетная запись
                    предназначена для компании, домашнего животного и т. д.
                </Typography>
                <InputLabel id="month">Месяц</InputLabel>
                <Select
                    variant={
                        'outlined'
                    }
                    labelId="month"
                    id="month"
                    value={ value }
                    label="Місяць"
                    onChange={ handleOnSelect }
                >
                    { months.map((month, index) =>
                        <MenuItem
                            value={ month }
                            key={ index }>
                            { month }
                        </MenuItem>) }
                </Select>
            </FormGroup>
        </FormControl>
    );
};

export default CreateUserForm;


