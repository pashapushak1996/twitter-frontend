import React from "react";
import { Button, Select, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";


export const CreateUserForm = ({ classes }) => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: '',
            name: '',
            select: ''
        }
    });

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form className={ classes.formControl } onSubmit={ handleSubmit(onSubmit) }>
            <Controller
                name={ 'email' }
                control={ control }
                render={ ({ field }) =>
                    <TextField
                        className={ classes.registerField }
                        label={ 'E-mail' }
                        variant={ 'outlined' }
                        autoFocus
                        fullWidth
                        { ...field }/> }/>

            <Controller
                name={ 'name' }
                control={ control }
                render={ ({ field }) =>
                    <TextField
                        className={ classes.registerField }
                        label={ 'Имя' }
                        variant={ 'outlined' }
                        fullWidth
                        { ...field }/> }/>

            <Controller
                name={ 'password' }
                control={ control }
                render={ ({ field }) =>
                    <TextField
                        className={ classes.registerField }
                        label={ 'Пароль' }
                        variant={ 'outlined' }
                        fullWidth
                        { ...field }/> }/>

            <Controller
                name="select"
                control={ control }
                render={ ({ field }) => <Select
                    { ...field }
                    options={ [
                        { value: "chocolate", label: "Chocolate" },
                        { value: "strawberry", label: "Strawberry" },
                        { value: "vanilla", label: "Vanilla" }
                    ] }
                /> }
            />

            <Button
                variant={ 'contained' }
                type={ 'submit' }
                fullWidth>Далее</Button>
        </form>
    );
};



