import { useState } from 'react';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateRangePicker , LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { LocalizationProvider  } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { TextField } from '@mui/material';

const DateRange = ()=>{

    const [dateRange, setDateRange] = useState([null, null]);

    return(

        <>
            <LocalizationProvider>
                <DemoItem label="Date" component="DateRangePicker">
                    <DateRangePicker
                        startText="Start Date"
                        endText="End Date"
                        value={dateRange}
                        onChange={(newValue) => setDateRange(newValue)}
                        renderInput={(startProps, endProps) => (
                            <>
                              <TextField {...startProps} required className="mb-4" />
                              <TextField {...endProps} required className="mb-4" />
                            </>
                        )}
                    />
                </DemoItem>
            </LocalizationProvider>
        
        {/* <DemoItem label="Date" component="DateRangePicker">
        <DateRangePicker
          startText="Start Date"
          endText="End Date"
          value={dateRange}
          onChange={(newValue) => setDateRange(newValue)}
          renderInput={(startProps, endProps) => (
            <>
              <TextField {...startProps} required className="mb-4" />
              <TextField {...endProps} required className="mb-4" />
            </>
          )}
        />
        </DemoItem> */}
        </>

    )
}



export default DateRange

