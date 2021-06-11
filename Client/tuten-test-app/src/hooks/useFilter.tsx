import { useMemo, useState } from 'react';
import { useInputValue } from './useInputValue';

export const useFilter = (data: any) => {
    const priceComparation = useInputValue(1);
    const price = useInputValue('');
    const query = useInputValue('');
    const [filteredData, setFilteredData] = useState(data);

    useMemo(
        () => {
            let result = [];

            if (query.value == '' && price.value == '') {
                setFilteredData(data);
                return;
            }

            if (query.value && price.value && priceComparation.value == 1) {
                result = data.filter(
                    (elem: any) => elem.bookingId.toString().includes(query.value) && elem.bookingPrice >= price.value
                );
            } else if (query.value && price.value && priceComparation.value == 2) {
                result = data.filter(
                    (elem: any) => elem.bookingId.toString().includes(query.value) && elem.bookingPrice <= price.value
                );
            } else if (query.value) {
                result = data.filter((elem: any) => elem.bookingId.toString().includes(query.value));
            } else if (priceComparation.value == 1) {
                result = data.filter((elem: any) => elem.bookingPrice >= price.value);
            } else {
                result = data.filter((elem: any) => elem.bookingPrice <= price.value);
            }

            setFilteredData(result);
        },
        [data, query.value, priceComparation.value, price.value]
    );

    return { query, priceComparation, price, filteredData };
};
