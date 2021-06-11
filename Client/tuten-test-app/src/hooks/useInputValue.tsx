import { useState } from 'react'

export const useInputValue = (initialValue: any) => {

    const [value, setValue] = useState(initialValue);

    const onChange = (e: any) => {

        if (!e || !e.target) {
            if (e && e.length >= 1 && e[0] === '') {
                return
            } else {
                setValue(e)
            }
            return;

        }

        if (e.target.value.length >= 1 && e.target.value[0] === " ") {
            return;
        } else {
            setValue(e.target.value)
        }
        return;


    };

    return { value, onChange }
}
