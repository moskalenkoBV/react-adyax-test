import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { Translate, I18n } from 'react-redux-i18n'
import Select from 'react-select'
import RenderedField from '../FormElements/RenderedField'
import RenderedSelect from '../FormElements/RenderedSelect'
import { connect } from 'react-redux'
import * as yup from 'yup'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.validationMain = {
      firstName: yup.string().trim().required(I18n.t('errors.firstName')),
      lastName: yup.string().trim().required(I18n.t('errors.lastName')),
      email: yup.string().trim().email(I18n.t('errors.email')).required(I18n.t('errors.email')),
      emailConfirm: yup.string().trim().oneOf([yup.ref('email'), null], I18n.t('errors.emailConfirm')).required(I18n.t('errors.emailConfirm')),
      address: yup.string().trim().required(I18n.t('errors.address')),
      country: yup.string().required(I18n.t('errors.country')),
      nationality: yup.string().required(I18n.t('errors.nationality'))
    }
    this.validationSecondary = {
      countryAdditional: yup.string().required(I18n.t('errors.country')),
      addressAdditional: yup.string().required(I18n.t('errors.address'))
    }
    this.isActiveExtraSection = true
  }

  changeProductState = isChecked => {
    this.isActiveExtraSection = isChecked ? true : false
  }

  validations = values => {
    const errors = {}
    const validObject = this.isActiveExtraSection ? {...this.validationMain, ...this.validationSecondary} : {...this.validationMain}
    return yup.object(validObject)
      .validate(values, {abortEarly: false}).catch(err => {
        err.inner.map(item => {
          errors[item.path] = item.message
        })
        throw new SubmissionError(errors)
      })
  }

  render() {
    return (
      <form noValidate className="contact-form form" onSubmit={this.props.handleSubmit(this.validations)}>
        <div className="contact-form__main">
          <h3><Translate value="contactForm.mainSection" /></h3>
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
            <Field 
              name="nationality"
              component={RenderedSelect} 
              label={I18n.t('contactForm.nationality')} 
              options={Object.values(I18n.t('contactForm.nationalities'))} 
            />
          </div>
        </div>
        <div className="contact-form__additional">
          <h3><Translate value="contactForm.additionalSection" /></h3>
          <div className="form__row">
            <Field
              label={I18n.t('contactForm.address')} 
              name="addressAdditional" 
              component={RenderedField} 
              type="text" 
            />
          </div>
          <div className="form__row">
            <Field 
              name="countryAdditional"
              component={RenderedSelect} 
              label={I18n.t('contactForm.country')} 
              options={Object.values(I18n.t('contactForm.countries'))} 
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

ContactForm = reduxForm({
  form: 'contactForm'
})(ContactForm)

export default ContactForm