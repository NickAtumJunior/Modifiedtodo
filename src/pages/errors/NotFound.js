import { Paper } from '@mui/material'
import { Grid } from '@mui/material'
import React from 'react'

function NotFound() {
  return (
    <Grid>
        <Stack spacing={3}>
            <Paper>
                <h1>Page Not Found</h1>
                {/* here i'm ghoing to do some fancy thing */}
            </Paper>
        </Stack>
    </Grid>
  )
}

export default NotFound