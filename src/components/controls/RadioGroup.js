import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from '@material-ui/core'
import React from 'react'

export default function RadioGroup({name, label, value, onChange, items}) {

    return (
    <FormControl>
        <FormLabel>Gender</FormLabel>
        <MuiRadioGroup row
            name={name}
            value={value}
            onChange={onChange}>

                {
                    items.map((item, index) =>(
                        <FormControlLabel value={item.id} control={<Radio />} label={item.title} />
                    ))
                }
        </MuiRadioGroup>
    </FormControl>
    )
}
