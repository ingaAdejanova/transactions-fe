import styled from 'styled-components'
import { TextField as MuiTextField } from '@mui/material'

import theme from '../../../theme'

const StyledTextField = styled(MuiTextField)`
  && {
    background-color: ${theme.colors.white};
    border-radius: 8px;
  }
`

type Props = {
  label: string
  type: string
  value: string
  autoComplete?: string
  onChange: (value: any) => void
  required?: boolean
}

export const TextField = ({ label, type, value, onChange, autoComplete, required }: Props) => (
  <StyledTextField
    label={label}
    type={type}
    value={value}
    autoComplete={autoComplete}
    onChange={onChange}
    required={required}
  />
)
