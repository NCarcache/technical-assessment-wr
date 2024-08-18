const modal = document.querySelector('.DonationModal')
const donateButton = document.querySelector('.Header-button')
const closeButton = document.querySelector('.DonationModal-close')
const donationOptions = document.querySelectorAll('.DonationModalPlan-button')
const amountOptions = document.querySelectorAll('.DonationModalAmount-button')
const monthlySuffix = document.querySelectorAll('.MonthlySuffix')

/* handles the selection of a Donation button */

const handleDonationOptionClick = (event) => {
  donationOptions.forEach((donationOption) =>
    donationOption.classList.remove('selected')
  )

  if (event.target.innerText !== 'Monthly') {
    monthlySuffix.forEach((monthly) => (monthly.style.display = 'none'))
  } else {
    monthlySuffix.forEach((monthly) => (monthly.style.display = 'inline'))
  }

  event.target.classList.add('selected')
}

/* handles the selection of an Amount button */

const handleAmountOptionClick = (event) => {
  amountOptions.forEach((amountOptions) =>
    amountOptions.classList.remove('selected')
  )

  event.target.classList.add('selected')
}

/* Gives the 'Monthly' and 'One Time' buttons the onClick function */

donationOptions.forEach((donationOption) => {
  donationOption.addEventListener('click', handleDonationOptionClick)
})

/* Gives the Amount Options buttons the onClick function */

amountOptions.forEach((amountOption) => {
  amountOption.addEventListener('click', handleAmountOptionClick)
})

/* handles the opening and the closing of the modal */

donateButton.addEventListener('click', () => {
  modal.showModal()
})

closeButton.addEventListener('click', () => {
  modal.close()
})

/* Allows clicking outside the modal to close */

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close()
  }
})
