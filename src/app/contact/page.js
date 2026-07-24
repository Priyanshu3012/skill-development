import { Icon } from "@iconify/react";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import Card from "@/components/shared/Card";
import ContactForm from "@/components/contact/ContactForm";
import { siteSettings } from "@/constants/content";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Skill Development Sansthan admissions team.",
};

const infoCards = [
  {
    icon: "ph:map-pin-bold",
    title: "Head Office",
    value: siteSettings.address,
  },
  {
    icon: "ph:envelope-simple-bold",
    title: "Email",
    value: siteSettings.email,
  },
  { icon: "ph:phone-bold", title: "Phone No", value: siteSettings.phone },
];

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" description="We'd love to hear from you" />

      <section className="py-14">
        <Container className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {infoCards.map((card) => (
            <Card
              key={card.title}
              className="flex flex-col items-center gap-3 p-8 text-center"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Icon icon={card.icon} className="size-6" />
              </span>
              <h3 className="text-sm font-bold text-slate-900">{card.title}</h3>
              <p className="text-sm text-slate-600">{card.value}</p>
            </Card>
          ))}
        </Container>
      </section>

      <section className="pb-20">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-brand-700 p-8 sm:p-10">
            <p className="text-sm font-semibold text-brand-100">
              Contact with us
            </p>
            <h2 className="mt-1 text-2xl font-bold text-white">Send Message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5097082507496!2d77.23692181455989!3d28.644453140293248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd209356e729%3A0xd611c8d700c440b8!2sKhabas%20Pura%2C%20Daryaganj%2C%20New%20Delhi%2C%20Delhi%20110002!5e0!3m2!1sen!2sin!4v1632500848777!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 460 }}
              allowFullScreen
              loading="lazy"
              title="Skill Development Sansthan location"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
