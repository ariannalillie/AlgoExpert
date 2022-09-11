import { FC } from 'react';
import { useState } from 'react';

interface Props {
    text: string
}

export const TextField: FC<Props> = () => {
    const [count, setCount] = useState<number | null>(5);

    return (
        <div>
            <input />
        </div>
    )
};

interface Props {
    name: string
}

export const NewComponent: FC<Props> = () => {

    return (
        <div>HI</div>
    )
}
