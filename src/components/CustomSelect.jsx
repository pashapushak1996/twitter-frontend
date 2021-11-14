import React from "react";
import { MenuItem, Select } from "@material-ui/core";

export const CustomSelect = ({ options, value, onChange, ...props }) => {

    const generateSelectOptions = () => {
        return options.map((option) => {
            return <MenuItem key={ `${ option.label }_${ option.value }` } value={ option.value }>
                { option.label }
            </MenuItem>
        });
    };

    return (
        <Select variant={ 'outlined' } onChange={ onChange } value={ value } { ...props } fullWidth>
            { generateSelectOptions() || value }
        </Select>
    );
}


