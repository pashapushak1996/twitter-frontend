import { MenuItem, Select } from "@material-ui/core";
import React from "react";

export const CustomSelect = ({ options, value, onChange, ...props }) => {

    const generateSelectOptions = () => {
        return options.map((option) => {
            return <MenuItem key={ `${ option.label }_${ option.value }` } value={ option.value }>
                { null ? '' : option.label }
            </MenuItem>
        });
    };

    return (
        <Select variant={ 'outlined' } onChange={ onChange } value={ value } { ...props } fullWidth>
            { generateSelectOptions() }
        </Select>
    );
}


