import * as React from 'react'
import { makeStyles } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Paper from '@material-ui/core/Paper'
import Grow from '@material-ui/core/Grow'
import Popper from '@material-ui/core/Popper'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  button: {
    textTransform: 'none',
    fontFamily: 'Alata !important',
    fontStyle: 'normal !important',
    fontWeight: 400,
    lineHeight: '17px !important',
    letterSpacing: 'normal !important',
    fontStretch: 'normal !important',
    textAlign: 'left',
    color: '#000000 !important',
    height: '62px !important',
    paddingRight: '24px !important',
    paddingLeft: '24px !important',
    '&:hover': {
      backgroundColor: '#00000 !important'
    }
  },
  menuList: {
    background: '#2dc455 !important',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.15)'
  },
  menuListScroll: {
    background: '#ffffff !important',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.15)',
    overflowY: 'scroll',
    maxHeight: '480px !important'
  },
  selected: {
    textTransform: 'none',
    fontFamily: 'Alata !important',
    fontStyle: 'normal !important',
    fontWeight: 500,
    lineHeight: '17px !important',
    letterSpacing: 'normal !important',
    fontStretch: 'normal !important',
    color: '#000000 !important',
    textAlign: 'left',
    height: '63px !important',
    paddingLeft: '22px !important',
    paddingRight: '22px !important',
    borderBottomColor: '#000000 !important',
    borderBottomWidth: '2px !important',
    borderBottomStyle: 'solid',
    borderBottomLeftRadius: '0px !important',
    borderBottomRightRadius: '0px !important',
    '&:hover': {
      backgroundColor: '#00000 !important'
    }
  },
  menuItem: {
    color: '#2E2E2E !important',
    width: 'auto',
    overflow: 'hidden',
    fontSize: '14px !important',
    boxSizing: 'border-box',
    minHeight: '48px !important',
    fontFamily: 'Alata !important',
    fontWeight: 400,
    lineHeight: 1.5,
    paddingTop: '6px !important',
    whiteSpace: 'nowrap',
    paddingBottom: '6px !important'
  }
}))

export interface DropdownProps {
  readonly buttonText: string
  readonly onClickItem?: (param: string) => void
  readonly onClickMenu?: () => void
  readonly dropup?: boolean
  readonly left?: boolean
  readonly dropdownList: string[]
  readonly name: string
  readonly nameSelected: string
}

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const [anchor, setAnchor] = React.useState<null | HTMLElement | null>(null)
  const classes = useStyles()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (anchor && anchor.contains(e.currentTarget)) setAnchor(null)
    else setAnchor(e.currentTarget)
    if (props && props.onClickMenu) props.onClickMenu()
  }

  const handleClose = (param: string) => {
    setAnchor(null)
    if (props && props.onClickItem) props.onClickItem(param)
  }

  const handleCloseAway = (e: React.MouseEvent<Document, MouseEvent>) => {
    if (anchor && anchor.contains(e.target as HTMLButtonElement)) return
    setAnchor(null)
  }

  return (
    <div>
      <div>
        <Button
          aria-owns={anchor ? 'menu-list' : undefined}
          aria-haspopup='true'
          onClick={handleClick}
          className={
            props.name === props.nameSelected
              ? classes.selected
              : classes.button
          }
        >
          {props.buttonText}
        </Button>
      </div>
      <Popper
        open={Boolean(anchor)}
        anchorEl={anchor}
        transition
        disablePortal
        placement={
          props.dropup
            ? props.left
              ? 'top-start'
              : 'top'
            : props.left
            ? 'bottom-start'
            : 'bottom'
        }
      >
        {() => (
          <Grow
            in={Boolean(anchor)}
            style={
              props.dropup
                ? { transformOrigin: '0 100% 0' }
                : { transformOrigin: '0 0 0' }
            }
          >
            <Paper elevation={0}>
              <ClickAwayListener onClickAway={handleCloseAway}>
                <MenuList
                  role='menu'
                  id='menu-list'
                  className={
                    props.dropdownList.length < 10
                      ? classes.menuList
                      : classes.menuListScroll
                  }
                >
                  {props.dropdownList.map((prop: string, key: number) => {
                    return (
                      <MenuItem
                        divider
                        className={classes.menuItem}
                        key={key}
                        onClick={() => handleClose(prop)}
                      >
                        {prop}
                      </MenuItem>
                    )
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}