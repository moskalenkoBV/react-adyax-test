import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Translate, I18n } from 'react-redux-i18n'
import UserInformationItem from './UserInformationItem'
import Button from '../Button'
import incContactStep from '../../actions/incContactStep'

const UserInformation = ({ userData, incContactStep }) => (
  <div className="user-information">
    { Object.keys(userData).length > 0 && 
      <Fragment>
        <div className="user-information__section">
          <h3><Translate value="contactForm.userDetails" /></h3>
          <div className="user-information__list">
            <div className="user-information__list-item">
              <UserInformationItem label={I18n.t('contactForm.firstName')} value={userData.firstName} />
            </div>
            <div className="user-information__list-item">
              <UserInformationItem label={I18n.t('contactForm.lastName')} value={userData.lastName} />
            </div>
            <div className="user-information__list-item">
              <UserInformationItem label={I18n.t('contactForm.email')} value={userData.email} />
            </div>
            <div className="user-information__list-item">
              <UserInformationItem label={I18n.t('contactForm.address')} value={userData.address} />
            </div>
            <div className="user-information__list-item">
              <UserInformationItem label={I18n.t('contactForm.country')} value={userData.country.label} />
            </div>
            <div className="user-information__list-item">
              <UserInformationItem label={I18n.t('contactForm.nationality')} value={userData.nationality.label} />
            </div>
          </div>
        </div>
        { userData.addressAdditional && 
          <div className="user-information__section user-information__section--additional">
            <h3><Translate value="contactForm.additionalSection" /></h3>
            <div className="user-information__list">
              <div className="user-information__list-item">
                <UserInformationItem label={I18n.t('contactForm.address')} value={userData.addressAdditional} />
              </div>
              <div className="user-information__list-item">
                <UserInformationItem label={I18n.t('contactForm.country')} value={userData.countryAdditional.label} />
              </div>
            </div>
          </div>
        }
        <div className="user-information__modify">
          <Button text={I18n.t('contactForm.modifyButton')} eventHandle={incContactStep} />
        </div>
      </Fragment>
    }
  </div>
)

UserInformation.propTypes = {
  userData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    emailConfirm: PropTypes.string,
    country: PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    }),
    nationality: PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    }),
    address: PropTypes.string,
    addressAdditional: PropTypes.any,
    countryAdditional: PropTypes.any
  }),
  incContactStep: PropTypes.func
}

export default connect(
  (state) => ({
    userData: state.userReducer.userData
  }),
  { incContactStep }
)(UserInformation)