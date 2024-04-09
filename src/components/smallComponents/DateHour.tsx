import React, { useState } from "react";

const DateHour: React.FC = () => {
    const [dateHour, _setDateHour] = useState<string>(() => {
        const currentDate = new Date();
        return `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear().toString().slice(2)} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;
    });

    return <>
        <div
            style={{
                fontSize: '0.55em'
            }}
        >
            {dateHour}
        </div>
    </>
}

export default DateHour