import { LegalPageLayout, LegalSection, EMAIL, EMAIL_HREF, SITE_URL, BUSINESS_NAME } from '../components/site-chrome'

export default function Privacy() {
  return (
    <LegalPageLayout title="Privacy Policy" updated="July 2026">
      <LegalSection heading="Who we are">
        <p>{BUSINESS_NAME} is a professional pest control company serving London and surrounding areas.</p>
        <p>Website: <a href={SITE_URL} className="font-semibold hover:underline" style={{ color: '#c0392b' }}>{SITE_URL}</a></p>
        <p>Contact: <a href={EMAIL_HREF} className="font-semibold hover:underline" style={{ color: '#c0392b' }}>{EMAIL}</a></p>
      </LegalSection>
      <LegalSection heading="What data we collect">
        <p>Our website does not collect or store any personal data. When you contact us by phone, email or WhatsApp using the links on this site, you share your details directly with us via your own device. nothing is captured or stored by the website itself.</p>
      </LegalSection>
      <LegalSection heading="Why we collect it">
        <p>Any information you share with us directly is used solely to respond to your enquiry. We do not use it for marketing without your consent.</p>
      </LegalSection>
      <LegalSection heading="How it is stored">
        <p>Enquiries you send by email arrive in our inbox. WhatsApp messages remain in WhatsApp. We do not store your information in any database and do not share it with any third party.</p>
      </LegalSection>
      <LegalSection heading="How long we keep it">
        <p>We keep enquiry information for up to 12 months and then delete it.</p>
      </LegalSection>
      <LegalSection heading="Google Maps">
        <p>
          Our website embeds Google Maps which may set its own cookies. Please refer to{' '}
          <a href="https://policies.google.com" target="_blank" rel="noreferrer" className="font-semibold hover:underline" style={{ color: '#c0392b' }}>
            Google's privacy policy
          </a>{' '}
          for more information.
        </p>
      </LegalSection>
      <LegalSection heading="Your rights">
        <p>
          Under UK GDPR you have the right to access, correct or delete your data and complain to the{' '}
          <a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="font-semibold hover:underline" style={{ color: '#c0392b' }}>ICO</a>.
          Contact us at <a href={EMAIL_HREF} className="font-semibold hover:underline" style={{ color: '#c0392b' }}>{EMAIL}</a>.
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}