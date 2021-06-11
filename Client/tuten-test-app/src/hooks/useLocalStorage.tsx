import { useState } from 'react';

export function useLocalStorage(key: string, initialValue: any) {
    const [storedValue, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item !== null ? JSON.parse(item) : initialValue;
        } catch (e) {
            return initialValue;
        }
    });

    const setLocalStorage = (value: any) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            setValue(value);
        } catch (e) {
            console.error(e);
        }
    };

    return [storedValue, setLocalStorage];
}
