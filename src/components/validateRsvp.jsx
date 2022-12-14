/** @format */

export default function validateRsvp(values) {
  let errors = {};

  // First Name
  if (!values.firstname.trim()) {
    errors.firstname = 'First Name Required';
  }

  // Last Name
  if (!values.lastname.trim()) {
    errors.lastname = 'Last Name Required';
  }

  // Email
  if (!values.email) {
    errors.email = 'Email Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email Address is Invalid';
  }

  // Guest Names
  if (!values.guests.trim()) {
    errors.guests = 'Please Type "None"';
  } else if (!/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(values.guests)) {
      errors.guests = 'Please Enter Names'
  }

    // RSVP Status
    if (!values.coming && !values.notComing) {
      errors.coming = 'Please Select RSVP Status';
    } else if (values.coming && values.notComing) {
      errors.coming = 'Please Only Select One Box'
    }

  return errors;
}
