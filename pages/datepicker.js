import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from 'react';
import { ko } from 'date-fns/esm/locale';

const Calendar = ({onDateChange}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      onDateChange(start, end);
    };
    
    return (
        <>
            <DatePicker
                locale={ ko }
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
            ></DatePicker>
        </>
    );
};

export default Calendar;