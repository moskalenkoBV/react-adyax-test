import React from 'react'
import PropTypes from 'prop-types'
import { Translate, I18n } from 'react-redux-i18n'
import { connect } from 'react-redux'
import ContactForm from '../Forms/ContactForm'
import * as yup from 'yup'

class ContactDetails extends React.Component {
  
  schema = yup.object().shape({
    firstName: yup.string().trim().required(I18n.t('errors.firstName')),
    lastName: yup.string().trim().required(I18n.t('errors.lastName')),
    email: yup.string().trim().email(I18n.t('errors.email')).required(I18n.t('errors.email')),
    emailConfirm: yup.string().oneOf([yup.ref('email'), null], I18n.t('errors.emailConfirm')).required(I18n.t('errors.emailConfirm')),
    address: yup.string().trim().required(I18n.t('errors.address'))
  })

  state = {
    errors: false
  }
  onSubmit = (values) => {
    values.preventDefault();
    const data = this.props.contactFormData.values !== undefined ? this.props.contactFormData.values : {}
    this.schema.validate(data, { abortEarly: false }).then(() => { this.setState({errors: false}) }).catch(err => {
      let errors = {}
      err.inner.forEach(item => {
        errors[item.path] = item.message
      })
      this.setState({errors: errors})
    })
  }

  render() {
    return (
      <div className="contact-details">
        <h2 className="section-title"><Translate value="steps.1" /></h2>
        <div className="contact-details__form">
          <ContactForm errors={this.state.errors} submitHandle={this.onSubmit} />
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    contactFormData: state.form.contactForm
  })
)(ContactDetails) 