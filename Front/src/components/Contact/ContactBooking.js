/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import bookingData from 'src/booking';
import ContactBookers from './ContactBookers';
// Styles

/**
 * Code
 */
const ContactBooking = () => (
  <div className="contact-booking">
    <h3 className="contact-bookingTitle">Ou ici :</h3>
    {bookingData.map(booking => (
      <ContactBookers key={booking.contactType} {...booking} />
    ))}
  </div>
);

/**
 * Export
 */
export default ContactBooking;
