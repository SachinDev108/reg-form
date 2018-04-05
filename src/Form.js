import React from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import { Card, CardMedia } from 'material-ui/Card'

import drive from './drive.jpg'
import PersonIcon from './PersonIcon'
import DeleteIcon from './DeleteIcon'

const Header = ({ title }) => {
  const headerStyle = {
    padding: '10px',
    position: 'sticky',
    top: 0,
    zIndex: 2
  }
  return(
    <Paper style={ headerStyle } zDepth={1}>
      <PersonIcon width='30px' height='30px'/>
      <span className='person-title'>{title}</span>
    </Paper>
  )
}

const Media = ({ media, onClose }) => (
  <Card>
    <CardMedia
      overlay={ <DeleteIcon onClick={onClose}/> }
      overlayContentStyle={{ background: 'none', left: '10px', top: 0}}
    >
      <img src={ media } alt='Media' />
    </CardMedia>
  </Card>
)

export default class Form extends React.Component {
  state = {
    dropdownVal1: '',
    dropdownVal2: '',
    dropdownVal3: '',
    email: '',
    firstName: '',
    telephone: '',
    nickname: ''
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  closeCard = () => console.log('card will be closed')

  onSubmit = e => {
    e.preventDefault()
    // this.props.onSubmit(this.state)
    this.setState({
      dropdownVal1: '',
      dropdownVal2: '',
      dropdownVal3: '',
      email: '',
      firstName: '',
      telephone: '',
      nickname: ''
    })
  }

  render() {
    return (
      <form>
        <Media media={drive} onClose={this.onClose}/> 
        <Header title='Jobsandtalent'/>
        <Paper style={{padding: '10px'}}>
          <div>Erhalte mehr infos, indem du deine Daten unten angibst.</div>
          <div className='dropdowns'>
            <SelectField
              floatingLabelText='Wie ist dein Deutsch-Niveau'
              value={this.state.dropdownVal1}
              fullWidth
              onChange={(e, i, v) => this.handleChange('dropdownVal1', v)}
            >
              <MenuItem value='No german' primaryText='No german' />
              <MenuItem value='Basic Niveau' primaryText='Basic Niveau' />
              <MenuItem value='Mittleres Niveau' primaryText='Mittleres Niveau' />
              <MenuItem value='Hohes Niveau' primaryText='Hohes Niveau' />
              <MenuItem value='Muttersprache' primaryText='Muttersprache' />
            </SelectField>
            <SelectField
              fullWidth
              floatingLabelText='Seit wann hast du den Fuhrerschein'
              value={this.state.dropdownVal2}
              onChange={(e, i, v) => this.handleChange('dropdownVal2', v)}
            >
              <MenuItem value='seit weniger als 2 jahre' primaryText='seit weniger als 2 jahre' />
              <MenuItem value='seit genau oder mehr als 2 jahre' primaryText='seit genau oder mehr als 2 jahre' />
            </SelectField>
            <SelectField
              fullWidth
              floatingLabelText='Besitzt einen Person...'
              value={this.state.dropdownVal3}
              onChange={(e, i, v) => this.handleChange('dropdownVal3', v)}
            >
              <MenuItem value='Ja' primaryText='Ja' />
              <MenuItem value='Nein' primaryText='Nein' />
            </SelectField>
          </div>
          <div className='personal-info'>
            <TextField
              fullWidth
              name='email'
              hintText='name@email.com'
              floatingLabelText='E-Mail-Adresse'
              floatingLabelFocusStyle={{ color: 'rgba(0, 0, 0, 0.4)' }}
              value={this.state.email}
              onChange={(e, v) => this.handleChange('email', v)}
            />
            <TextField
              fullWidth
              name='firstName'
              hintText='Vorname'
              floatingLabelText='Vorname'
              floatingLabelFocusStyle={{ color: 'rgba(0, 0, 0, 0.4)' }}
              value={this.state.firstName}
              onChange={(e, v) => this.handleChange('firstName', v)}
            />
            <TextField
              fullWidth
              name='telephone'
              hintText='+49177332228'
              floatingLabelText='Telefonnumer'
              floatingLabelFocusStyle={{ color: 'rgba(0, 0, 0, 0.4)' }}
              value={this.state.username}
              onChange={(e, v) => this.handleChange('telephone', v)}
            />
            <TextField
              fullWidth
              name='nickname'
              hintText='Nachname'
              floatingLabelText='Nachname'
              floatingLabelFocusStyle={{ color: 'rgba(0, 0, 0, 0.4)' }}
              value={this.state.nickname}
              onChange={(e, v) => this.handleChange('nickname', v)}
            />
          </div>
          <div className='submit'>
            <RaisedButton
              primary
              fullWidth
              label='Senden'
              onClick={this.onSubmit}
            />
          </div>  
        </Paper>  
      </form>
    )
  }
}