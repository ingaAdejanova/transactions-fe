import { Select as MuiSelect, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material'

type Option = {
  value: string
  title: string
}

type Props = {
  value: any
  id: string
  onChange?: (event: SelectChangeEvent<string>) => void
  className?: string
  label?: string
  options: Option[]
}

export const Select = ({ id, value, label, onChange, className, options }: Props) => (
  <FormControl className={className} fullWidth>
    <InputLabel id={id}>{label}</InputLabel>
    <MuiSelect labelId={id} value={value} label={label} onChange={onChange}>
      {options.map((item, index) => (
        <MenuItem key={index} value={item.value}>
          {item.title}
        </MenuItem>
      ))}
    </MuiSelect>
  </FormControl>
)
