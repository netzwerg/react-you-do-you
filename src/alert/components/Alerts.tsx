import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  SxProps,
} from '@mui/material'
import { Alert } from '../alertSlice'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import { useState } from 'react'

const UNREAD_MARKER_SIZE = 10

const sxButton: SxProps = {
  color: 'white',
}

const sxListContainer: SxProps = {
  width: '30vw',
  maxHeight: '30vh',
}

const sxListGutter: SxProps = {
  minWidth: UNREAD_MARKER_SIZE,
  mr: 2,
}

const sxUnreadMarker: SxProps = {
  width: UNREAD_MARKER_SIZE,
  height: UNREAD_MARKER_SIZE,
}

const sxUnreadMarkerError: SxProps = {
  bgcolor: 'error.main',
}

const sxUnreadMarkerWarning: SxProps = {
  bgcolor: 'warning.main',
}

const sxListItemText: SxProps = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

export interface Props {
  readonly alerts: ReadonlyArray<Alert>
  readonly unreadCount: number
  readonly onMarkAlertsRead: () => void
}

export const Alerts = ({ alerts, unreadCount, onMarkAlertsRead }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    onMarkAlertsRead()
  }

  const openPopover = Boolean(anchorEl)
  const id = openPopover ? 'simple-popover' : undefined
  const firstErrorIndex = [...alerts].reverse().findIndex((a) => a.type === 'error')
  const hasUnreadErrors = firstErrorIndex >= 0 && firstErrorIndex < unreadCount
  const badgeColor = hasUnreadErrors ? 'error' : 'warning'

  return (
    <>
      <IconButton sx={sxButton} onClick={handleClick}>
        <Badge color={badgeColor} badgeContent={unreadCount}>
          <NotificationsNoneRoundedIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={openPopover}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={handleClose}
      >
        <Box component={'div'} sx={sxListContainer}>
          <List>
            {alerts.length === 0 && (
              <ListItem>
                <ListItemText primary={'No alerts – Yay! ✨'} />
              </ListItem>
            )}
            {[...alerts].reverse().map((alert, index) => (
              <div key={index}>
                <ListItem>
                  <ListItemAvatar sx={sxListGutter}>
                    {index < unreadCount && (
                      <Avatar
                        sx={[sxUnreadMarker, alert.type === 'error' ? sxUnreadMarkerError : sxUnreadMarkerWarning]}
                      >
                        {''}
                      </Avatar>
                    )}
                  </ListItemAvatar>
                  <ListItemText
                    primary={alert.topic}
                    secondary={
                      <Box component={'span'} sx={sxListItemText}>
                        {alert.message}
                      </Box>
                    }
                  />
                </ListItem>
                {index < alerts.length - 1 && <Divider component="li" />}
              </div>
            ))}
          </List>
        </Box>
      </Popover>
    </>
  )
}
