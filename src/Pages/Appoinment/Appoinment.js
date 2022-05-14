import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinments from './AvailableAppoinments';

const Appoinment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppoinmentBanner
                date={date}
                setDate={setDate}
            ></AppoinmentBanner>
            <AvailableAppoinments
                date={date}
                setDate={setDate}
            ></AvailableAppoinments>

        </div>
    );
};

export default Appoinment;