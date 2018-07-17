import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Translate, I18n } from 'react-redux-i18n'
import Select from 'react-select'
import RenderedField from '../FormElements/RenderedField'
import RenderedSelect from '../FormElements/RenderedSelect'

const submit = (values) => {
  console.log(values);
}

let ContactForm = ({ handleSubmit }) => (
  <form noValidate className="contact-form form" onSubmit={handleSubmit(submit)}>
    <div className="contact-form__main">
      <div className="form__row">
        <Field 
          label={I18n.t('contactForm.firstName')} 
          name="firstName" 
          component={RenderedField} 
          type="text" 
        />
        <Field 
          label={I18n.t('contactForm.lastName')}
          name="lastName" 
          component={RenderedField}
          type="text" 
        />
      </div>
      <div className="form__row">
        <Field 
          label={I18n.t('contactForm.email')} 
          name="email" component={RenderedField} 
          type="email" 
        />
        <Field 
          label={I18n.t('contactForm.emailConfirm')} 
          name="emailConfirm" 
          component={RenderedField} 
          type="email" 
        />
      </div>
      <div className="form__row">
        <Field
          label={I18n.t('contactForm.address')} 
          name="address" 
          component={RenderedField} 
          type="text" 
        />
      </div>
      <div className="form__row">
        <Field 
          name="country"
          component={RenderedSelect} 
          label={I18n.t('contactForm.country')} 
          options={Object.values(I18n.t('contactForm.countries'))} 
        />
      </div>
    </div>
    <button type="submit">Submit</button>
  </form>
)

ContactForm = reduxForm({
  form: 'contactForm'
})(ContactForm)

export default ContactForm