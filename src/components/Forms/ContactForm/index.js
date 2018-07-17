import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Translate, I18n } from 'react-redux-i18n'
import Select from 'react-select'
import RenderedField from '../FormElements/RenderedField'

let ContactForm = ({ submitHandle, errors }) => (
  <form noValidate className="contact-form form" onSubmit={submitHandle}>
    <div className="form__row">
      <Field 
        error={errors.firstName} 
        label={I18n.t('contactForm.firstName')} 
        name="firstName" 
        component={RenderedField} 
        type="text" 
      />
      <Field 
        error={errors.lastName} 
        label={I18n.t('contactForm.lastName')}
        name="lastName" 
        component={RenderedField}
        type="text" 
      />
    </div>
    <div className="form__row">
      <Field 
        error={errors.email} 
        label={I18n.t('contactForm.email')} 
        name="email" component={RenderedField} 
        type="email" 
      />
      <Field 
        error={errors.emailConfirm} 
        label={I18n.t('contactForm.emailConfirm')} 
        name="emailConfirm" 
        component={RenderedField} 
        type="email" 
      />
    </div>
    <div className="form__row">
      <Field 
        error={errors.address} 
        label={I18n.t('contactForm.address')} 
        name="address" 
        component={RenderedField} 
        type="text" 
      />
    </div>
    <div className="form__row">
      <div className="form__field">
        <label htmlFor="country"><Translate value="contactForm.country" /></label>
        <Field name="country" component={Select} type="select" />
      </div>
    </div>
    <button type="submit">Submit</button>
  </form>
)

ContactForm = reduxForm({
  form: 'contactForm'
})(ContactForm)

export default ContactForm