import styled from 'styled-components'
import { Typography } from '../../components/core/Typography'

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
`

const StyledTypography = styled(Typography)`
  && {
    margin: 10px 0 20px;
  }
`

const NotFoundPage = () => (
  <NotFoundPageWrapper>
    <Typography variant="h2">404</Typography>
    <StyledTypography variant="h6">Page Not Found</StyledTypography>
    <Typography variant="body1">
      The page you are looking for might have been removed had its name changed
      or is temporarily unavailable.
    </Typography>
  </NotFoundPageWrapper>
)

export default NotFoundPage
