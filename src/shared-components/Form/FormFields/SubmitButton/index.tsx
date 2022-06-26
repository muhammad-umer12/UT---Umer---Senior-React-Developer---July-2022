import React from 'react';
import { makeStyles, createStyles, Theme, Button } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function SubmitButton(props: any) {
    const { children,isSubmitDisable, ...others } = props;
    const { submitForm } = useFormikContext();
    const handleSubmit = (e: any) => {
        submitForm()
    }

    const configButton = {
        ...others,
        onClick: () => submitForm(),
        color: 'primary',
        fullWidth: true
    }


    const [disabled,setDisabled] = useState<any>(false)
    useEffect(()=>{
        setDisabled(isSubmitDisable)
    },[isSubmitDisable])
    return (
        <Button disabled={disabled} {...configButton}>
            {children}
        </Button>
    )
}

export default SubmitButton
