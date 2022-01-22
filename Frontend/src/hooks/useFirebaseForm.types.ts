import {ChangeEvent, HTMLInputTypeAttribute, FormEventHandler} from 'react';

export interface InputProps {
    name: string,
    text: string,
    placeholder?: string,
    type: HTMLInputTypeAttribute,
    onChange: any,
    options?: string[]
}

export interface UseFirebaseForm {
    inputs: InputProps[],
    title: string,
    onSubmit: (values: any, setError: (key: string, value: string) => void) => void
} 