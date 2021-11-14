import React, { useState } from "react";
import { FormControl, FormGroup, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import 'dayjs/locale/ru';
import dayjs from 'dayjs';
import { CustomSelect } from "./CustomSelect";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '12px 36px 32px',
        '& .MuiTextField-root': {
            marginBottom: theme.spacing(2)
        }
    }
}));


export const CreateUserForm = () => {
    const classes = useStyles();
    dayjs.months()

    const maxDate = dayjs().year() - 6;
    const minDate = dayjs().year() - 120;

    const yearsArray = Array
        .apply(null, { length: maxDate + 1 - minDate })
        .map(function (_, idx) {
            return { label: idx + minDate, value: idx + 1 }
        })
        .sort((a, b) => b.label - a.label);

    console.log(yearsArray);

    const selectedDate = dayjs().locale('ru')
        .set('date', 1)
        .set('month', 2)
        .set('year', 1970);


    console.log(selectedDate.format('MMMM D, YYYY'));


    const [month, setMonth] = useState(null);
    const [day, setDay] = useState(null);
    const [year, setYear] = useState(null);

    return (
        <FormControl component={ 'fieldset' } className={ classes.root } fullWidth>
            <FormGroup>
                <TextField variant={ 'outlined' } label={ 'Имя' }/>
                <TextField variant={ 'outlined' } label={ 'Телефон' }/>
                <Typography>
                    Эта информация не будет общедоступной. Подтвердите свой возраст, даже если эта учетная запись
                    предназначена для компании, домашнего животного и т. д.
                </Typography>
                <Grid container spacing={ 3 }>
                    <Grid item xs={ 6 }>
                        <CustomSelect value={ year } onChange={ (e) => setYear(e.target.value) }
                                      options={ yearsArray }/>
                    </Grid>
                    <Grid item xs={ 3 }>
                        <CustomSelect value={ year } onChange={ (e) => setYear(e.target.value) }
                                      options={ yearsArray }/>
                    </Grid>
                    <Grid item xs={ 3 }>
                        <CustomSelect value={ year } onChange={ (e) => setYear(e.target.value) }
                                      options={ yearsArray }/>
                    </Grid>
                </Grid>
            </FormGroup>
        </FormControl>
    );
};



