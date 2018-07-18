import React from 'react'
import PropTypes from 'prop-types'
import { Translate, I18n } from 'react-redux-i18n'
import { connect } from 'react-redux'
import ContactForm from '../Forms/ContactForm'
import * as yup from 'yup'

class ContactDetails extends React.Component {

  render() {
    return (
      <div className="contact-details">
        <h2 className="section-title"><Translate value="steps.1" /></h2>
        <div className="contact-details__form">
          <ContactForm />
        </div>
      </div>
    )
  }
}

export default ContactDetails