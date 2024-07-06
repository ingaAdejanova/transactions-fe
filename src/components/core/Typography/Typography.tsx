import { Typography as MuiTypography, TypographyProps } from '@mui/material'

interface Props extends TypographyProps {
  className?: string
}

export const Typography = ({ className, ...rest }: Props) => <MuiTypography className={className} {...rest} />
