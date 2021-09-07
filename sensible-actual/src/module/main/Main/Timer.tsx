import React from 'react';

export const Timer = React.memo(() => {
    const [time, setTime] = React.useState(0);
    React.useEffect(() => {
        const sti = setInterval(() => {
            time < 4 && setTime((t) => t + 1);
        }, 1000);

        return () => {
            clearInterval(sti);
        };
    }, [time]);
    return <div className="time">{time}s</div>;
});
