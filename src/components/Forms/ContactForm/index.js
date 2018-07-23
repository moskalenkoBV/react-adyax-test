import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import api from '../../../api'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { Translate, I18n } from 'react-redux-i18n'
import Select from 'react-select'
import Button from '../../Button'
import RenderedField from '../FormElements/RenderedField'
import RenderedSelect from '../FormElements/RenderedSelect'
import { connect } from 'react-redux'
import * as yup from 'yup'
import CustomCheckbox from '../FormElements/CustomCheckbox'
import signIn from '../../../actions/signIn'
import toggleLoginForm from '../../../actions/toggleLoginForm'

class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.validationMain = {
      firstName: yup.string().trim().required(I18n.t('errors.firstName')),
      lastName: yup.string().trim().required(I18n.t('errors.lastName')),
      email: yup.string().trim().email(I18n.t('errors.email')).required(I18n.t('errors.email')),
      emailConfirm: yup.string().trim().oneOf([yup.ref('email'), null], I18n.t('errors.emailConfirm')).required(I18n.t('errors.emailConfirm')),
      address: yup.string().trim().required(I18n.t('errors.address')),
      country: yup.string().required(I18n.t('errors.country')),
      nationality: yup.string().required(I18n.t('errors.nationality')),
      password: yup.string().trim().required(I18n.t('errors.password')),
      passwordConfirm: yup.string().trim().oneOf([yup.ref('password'), null], I18n.t('errors.passwordConfirm')).required(I18n.t('errors.passwordConfirm'))
    }

    this.validationSecondary = {
      countryAdditional: yup.string().required(I18n.t('errors.country')),
      addressAdditional: yup.string().required(I18n.t('errors.address'))
    }
  }

  submit = values => {
    const errors = {}
    const validObject = this.state.isActiveExtraSection ? {...this.validationMain, ...this.validationSecondary} : {...this.validationMain}
    return yup.object(validObject)
      .validate(values, {abortEarly: false}).then(() => {
        return api.users.add({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          address: values.address,
          country: values.country.value,
          nationality: values.nationality.value,
          password: values.password,
          additionalAddress: values.additionalAddressd,
          additionalCountry: values.additionalCountry
        })
        .catch(err => {
          throw { inner: [{path: '_error', message: err.response.data.error.email}] }
        })

      }).catch(err => {
        err.inner.map(item => {
          errors[item.path] = item.message
        })
        throw new SubmissionError(errors)
      })
  }

  state = {
    isActiveExtraSection: false
  }

  changeContactFormAdditional = isChecked => {
    this.setState({isActiveExtraSection: isChecked})
  }

  render() {
    const { handleSubmit, toggleLoginForm, error, isLogged } = this.props
    return (
      <form id="contactForm" noValidate className="contact-form form" onSubmit={handleSubmit(this.submit)}>
        <div className="contact-form__main">
          <div className="contact-form__title-wrapper">
            <h3><Translate value="contactForm.mainSection" /></h3>
            { !isLogged && <Button eventHandle={toggleLoginForm} text={I18n.t('loginForm.loginButton')} /> }
          </div>
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
              label={I18n.t('contactForm.password')} 
              name="password" component={RenderedField} 
              type="password" 
            />
            <Field 
              label={I18n.t('contactForm.passwordConfirm')} 
              name="passwordConfirm" 
              component={RenderedField} 
              type="password" 
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
          <div className="contact-form__title-wrapper">
            <h3><Translate value="contactForm.additionalSection" /></h3>
            <CustomCheckbox onChangeHandle={this.changeContactFormAdditional} />
          </div>
          { this.state.isActiveExtraSection &&
            <Fragment>
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
            </Fragment>
          }
        </div>
        { error && <span className="form__error-message">{error}</span> }
      </form>
    )
  }
}

ContactForm.propTypes = {
  signIn: PropTypes.func,
  toggleLoginForm: PropTypes.func,
  error: PropTypes.string
}

ContactForm = reduxForm({
  form: 'contactForm'
})(ContactForm)

export default connect(
  (state) => ({
    isLogged: !!state.userReducer.token
  }),
  { signIn, toggleLoginForm }
)(ContactForm)