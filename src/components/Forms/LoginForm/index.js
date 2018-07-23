import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { Translate, I18n } from 'react-redux-i18n'
import RenderedField from '../FormElements/RenderedField'
import SubmitButton from '../FormElements/SubmitButton'
import * as yup from 'yup'
import api from '../../../api'
import { connect } from 'react-redux'
import signIn from '../../../actions/signIn'
import toggleLoginForm from '../../../actions/toggleLoginForm'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.validation = {
      email: yup.string().trim().required(I18n.t('errors.email')),
      password: yup.string().trim().required(I18n.t('errors.password'))
    }
  }
  submit = values => {
    const errors = {}
    return yup.object({...this.validation})
      .validate(values, {abortEarly: false}).then(() => {
        return api.users.login(values).then(res => {
          (async () => {
            await this.props.signIn(res.user.token)
            await this.props.toggleLoginForm()
          })()
        })
        .catch(err => {
          throw { inner: [{path: '_error', message: err.response.data.error}] }
        })
      })
      .catch(err => {
        err.inner.map(item => {
          errors[item.path] = item.message
        })
        throw new SubmissionError(errors)
      })
  }

  render() {
    return (
      <form id="loginForm" className="form login-form" onSubmit={this.props.handleSubmit(this.submit)}>
        <h3 className="login-form__title"><Translate value="loginForm.title" /></h3>
        <div className="form__row">
          <Field 
            placeholder={I18n.t('loginForm.emailPlaceholder')}
            name="email" 
            component={RenderedField} 
            type="email" 
          />
        </div>
        <div className="form__row">
          <Field 
            placeholder={I18n.t('loginForm.passwordPlaceholder')}
            name="password" 
            component={RenderedField} 
            type="password" 
          />
        </div>
        <SubmitButton text={I18n.t('loginForm.submitButtonText')} />
        { this.props.error && <span className="form__error-message">{this.props.error}</span>}
      </form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  error: PropTypes.string,
  signIn: PropTypes.func
}

LoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm)

export default connect(
  null,
  { signIn, toggleLoginForm }
)(LoginForm)