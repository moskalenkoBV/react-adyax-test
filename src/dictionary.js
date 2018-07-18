const dictionary = {
  en: {
    application: {
      title: 'React/redux application'
    },
    steps: [
      'Product list',
      'Contact details',
      'Confirmation'
    ],
    basket: {
      title: 'Basket',
      amount: 'Amount',
      price: 'Price',
      bonus: 'Selected bonus',
      totalPrice: 'Total price',
      emptyMessage: 'You are hungry, but your basket is empty.'
    },
    errors: {
      '503': 'Service is temporarily unavailable',
      firstName: 'Please enter your first name',
      lastName: 'Please enter your last name',
      email: 'Email Address is not correct',
      emailConfirm: 'Actual E-mail does not match',
      address: 'Address field is required',
      country: 'Country field is required',
      nationality: 'Nationality field is required'
    },
    buttons: {
      nextStep: 'Next step' 
    },
    bonuses: {
      placeholder: 'Select bonus...',
      removeBonusText: 'Remove bonus',
      noResultsText: 'No results found',
      items: [
        {
          value: '0.25',
          label: 'Extra Cheese'
        },
        {
          value: '0.5',
          label: 'Extra Bacon'
        },
        {
          value: '0.75',
          label: 'Cheese + Bacon'
        }
      ]
    },
    contactForm: {
      mainSection: 'New account',
      additionalSection: 'Additional address',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email address',
      emailConfirm: 'Confirm email address',
      address: 'Address',
      country: 'Country',
      nationality: 'Nationality',
      countries: [
        {
          label: 'UKR', value: '1'
        },
        {
          label: 'RUS', value: '2'
        },
        {
          label: 'GER', value: '3'
        }
      ],
      nationalities: [
        {
          label: 'Ukrainian', value: '1'
        },
        {
          label: 'Russian', value: '2'
        },
        {
          label: 'British', value: '3'
        }
      ]
    }
  }
}

export default dictionary