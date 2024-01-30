import React from "react";
import { TextInputProps } from "react-native";
import { Container } from "./styles";
import { Controller, Control } from "react-hook-form";

interface Props extends TextInputProps {
    name: string;
    control: Control
}

export function Input({name, control, ...rest}: Props){
    return (
        <Controller
            control={control}
            render={({field: {onChange, value}}) => (
                <Container
                    onChangeText={onChange}
                    value={value} 
                    {...rest} 
                />
            )}
            name={name}
        />
       
    )
}