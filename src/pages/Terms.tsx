import {
  LegalPageLayout,
  LegalSection,
  EMAIL,
  EMAIL_HREF,
  PHONE,
  PHONE_HREF,
  BUSINESS_NAME,
} from '../components/site-chrome'

export default function Terms() {
  return (
    <LegalPageLayout title="Terms and Conditions" updated="July 2026">
      <LegalSection heading="About us">
        <p>
          {BUSINESS_NAME} provides professional pest control services across London and surrounding
          areas. By using our website you agree to these terms.
        </p>
      </LegalSection>

      <LegalSection heading="Use of this website">
        <p>
          This website is for information purposes only. We reserve the right to update or remove
          content at any time. We are not liable for any errors or omissions.
        </p>
      </LegalSection>

      <LegalSection heading="Our services">
        <p>
          All services are subject to availability. Prices shown are estimates only and a final
          quote will be provided following inspection. We reserve the right to refuse service at our
          discretion.
        </p>
      </LegalSection>

      <LegalSection heading="Appointments and cancellations">
        <p>
          Appointments can be booked by phone, WhatsApp or email. We require at least 24 hours
          notice to cancel or reschedule. Late cancellations may be subject to a fee at our
          discretion.
        </p>
      </LegalSection>

      <LegalSection heading="Liability">
        <p>
          We carry full public liability insurance. We are not responsible for any pre-existing
          damage to your property. Clients are responsible for preparing the treatment area as
          instructed before our visit. Our liability is limited to the value of the service
          provided.
        </p>
      </LegalSection>

      <LegalSection heading="Third party links">
        <p>
          Our website may link to Google Maps and WhatsApp. We are not responsible for the content
          or privacy practices of those sites.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          All content on this website belongs to {BUSINESS_NAME} and may not be copied or
          reproduced without written permission.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>These terms are governed by the laws of England and Wales.</p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          <a href={EMAIL_HREF} className="text-accent font-semibold hover:underline">
            {EMAIL}
          </a>
          {' | '}
          <a href={PHONE_HREF} className="text-accent font-semibold hover:underline">
            {PHONE}
          </a>
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}
