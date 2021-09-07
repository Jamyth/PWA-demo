import React from 'react';
import { Timer } from './Timer';

export const V1 = React.memo(() => {
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 4000);
    }, []);

    return (
        <div id="v1">
            {show && (
                <div className="content">
                    <h1>content</h1>
                </div>
            )}
            <Timer />
        </div>
    );
});
