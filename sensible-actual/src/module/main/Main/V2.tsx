import React from 'react';
import { Timer } from './Timer';

export const V2 = React.memo(() => {
    const [show, setShow] = React.useState<'loading' | 'done' | null>(null);

    const toggle = React.useCallback(() => {
        switch (show) {
            case null:
                setShow('loading');
                break;
            case 'loading':
                setShow('done');
                break;
        }
    }, [show]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            toggle();
        }, 2000);

        return () => {
            clearInterval(interval);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps -- didmount
    }, [toggle]);

    return (
        <div id="v2">
            {show !== null && <div className="content"> {show === 'loading' ? 'loading' : <h1>content</h1>}</div>}
            <Timer />
        </div>
    );
});
