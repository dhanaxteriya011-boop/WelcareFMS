import PageBanner from '../components/shared/PageBanner'
import ContactForm from '../components/Contact'
import MapSection  from '../components/MapSection'
import ProcessSection from '../components/ProcessSection'

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with Welcare FMS. We respond to all enquiries within 2 hours — call, WhatsApp or email us today."
        breadcrumb="Contact"
        bg="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
        overlay="linear-gradient(135deg, rgba(5,12,35,.92) 0%, rgba(15,37,87,.88) 100%)"
      />
      <ContactForm />
      <MapSection />
      <ProcessSection />
    </>
  )
}
