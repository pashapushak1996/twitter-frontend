import React from "react";
import { Button, TextField } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";

export const SignInUserForm = ({ classes }) => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={ handleSubmit(onSubmit) } className={ classes.formControl }>
            <Controller name={ 'email' }
                        control={ control }
                        render={ ({ field }) => <TextField
                            className={ classes.loginField }
                            variant={ 'outlined' }
                            label={ 'E-mail' }
                            autoFocus
                            fullWidth
                            { ...field }/> }/>

            <Controller
                name={ 'password' }
                control={ control }
                render={ ({ field }) => <TextField
                    className={ classes.loginField }
                    variant={ 'outlined' }
                    label={ 'Пароль' }
                    type={ 'password' }
                    fullWidth
                    { ...field }/> }/>
            <Button variant={ 'contained' } type={ 'submit' } fullWidth>Войти</Button>
        </form>
    );
}


