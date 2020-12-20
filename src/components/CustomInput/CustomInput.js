import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import RegularButton from 'components/CustomButtons/Button.js'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}))

export default function BasicTextFields (props) {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [website, setWebsite] = useState('')
  const [domain, setDomain] = useState('')

  const addItems = () => {
    console.log("done")
    props.addItem({ name, web_pages: [website], domains: [domain] })
    setName("")
    setWebsite("")
    setDomain("")
  }

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField
        id='standard-basic'
        label='Name'
        variant='outlined'
        value={name}
        onChange={e => {
          setName(e.target.value)
        }}
      />
      <TextField
        id='filled-basic'
        label='Website'
        variant='outlined'
        value={website}
        onChange={e => {
          setWebsite(e.target.value)
        }}
      />
      <TextField
        id='outlined-basic'
        label='Domain'
        variant='outlined'
        value={domain}
        onChange={e => {
          setDomain(e.target.value)
        }}
      />
      <div onClick={addItems}>
        <RegularButton children={'add'} size={'lg'}></RegularButton>
      </div>
    </form>
  )
}
