import React from 'react';
import { makeStyles, createStyles, Theme, Button } from '@material-ui/core';
import { useFormikContext } from 'formik';

function SubmitButton(props: any) {
    const { children, ...others } = props;
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
    return (
        <Button {...configButton}>
            {children}
        </Button>
    )
}

export default SubmitButton
