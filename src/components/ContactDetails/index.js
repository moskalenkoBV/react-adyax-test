import React from 'react'
import PropTypes from 'prop-types'
import { Translate, I18n } from 'react-redux-i18n'
import { connect } from 'react-redux'
import ContactForm from '../Forms/ContactForm'
import UserInformation from '../UserInformation'

const contactSteps = {
  0: <ContactForm />,
  1: <UserInformation />,
  2: <ContactForm />
}

const ContactDetails = ({contactCurrentStep}) => (
  <div className="contact-details">
    <h2 className="section-title"><Translate value="steps.1" /></h2>
    <div className="contact-details__form">
      { contactSteps[contactCurrentStep] }
    </div>
  </div>
)

export default connect(
  (state) => ({
    contactCurrentStep: state.stepsReducer.contactCurrentStep
  })
)(ContactDetails)