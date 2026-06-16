import { BackToHome } from '@/components/layout/BackToHome';

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 max-w-3xl mx-auto">
      <BackToHome />

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm">Last Updated: 09-06-2026</p>
      </div>

      <div className="space-y-6 text-white/70 text-sm leading-relaxed">
        <p>
          This Privacy Policy describes how Forte Digital Solutions LLP collects, uses, and shares
          information about you when you use our services.
        </p>

        <section>
          <h2 className="text-white font-bold text-base mb-2">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account,
            make a purchase, or contact us for support — including name, email, phone, payment
            info, usage data, and device information.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-base mb-2">2. How We Use Your Information</h2>
          <p>
            We use the information to provide, maintain, and improve our Service; process
            transactions; send notices; respond to support requests; and personalise content.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-base mb-2">3. Sharing of Information</h2>
          <p>
            We may share information with service providers, in response to legal requests, to
            protect rights and safety, or in connection with a merger or acquisition.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-base mb-2">4. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies. You can instruct your browser to
            refuse all cookies, though some portions of our Service may not function properly.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-base mb-2">5. User-Generated Content</h2>
          <p>
            Our Service may allow you to post content. You are responsible for the content you
            post, including its legality, reliability, and appropriateness.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-base mb-2">6. Links to Other Sites</h2>
          <p>
            Our Service may contain links to third-party sites. We have no control over and assume
            no responsibility for their content or privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-base mb-2">7. Children&apos;s Privacy</h2>
          <p>
            Our Services are not intended for users under the age of 16. We do not knowingly
            collect personal data from children. If you believe a child has submitted personal
            information through our platform, please contact us immediately at{' '}
            <a href="mailto:info@fortedigitalsolutions.com" className="text-primary hover:underline">
              info@fortedigitalsolutions.com
            </a>{' '}
            and we will take prompt steps to delete such information from our records.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-base mb-2">8. Security and Data Retention</h2>
          <p>
            We strive to use commercially acceptable means to protect your data. We retain your
            Personal Data only as long as necessary for the purposes set out in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-base mb-2">9. Your Rights</h2>
          <p>
            You have the right to access, correct, update, or delete the personal information we
            hold about you. Contact us through the information below.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-base mb-2">10. Disclaimer</h2>
          <p>
            The content provided on this OTT and VOD platform, including all movies, series, videos,
            and related streaming materials, is intended for personal entertainment purposes only.
            Viewer discretion is advised where content may include mature themes, violence, or
            strong language. Users are responsible for ensuring that access and viewing comply with
            applicable laws in their region.
          </p>
          <p className="mt-3">
            By streaming content on this platform, you acknowledge that you do so voluntarily and at
            your own discretion. The platform and its content partners shall not be held responsible
            for any technical issues, interruptions, or losses that may occur as a result of using
            this service. Streaming quality and availability may vary based on device, network
            connection, and subscription plan.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-base mb-2">
            11. Governing Law and Jurisdiction
          </h2>
          <p>
            These Terms shall be governed and interpreted in accordance with the laws of India.
            Any disputes arising out of or relating to the use of this website shall be subject to
            the exclusive jurisdiction of the courts located in Gurgaon, Haryana.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-base mb-2">12. Updates to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of changes by
            posting the new policy on this page.
          </p>
        </section>

        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 mt-8">
          <h2 className="text-white font-black text-base mb-3">Contact</h2>
          <p className="text-white/70 text-sm mb-2">
            417, 4th Floor, Tower A, Spaze I Tech Park, Sohna Road, Gurugram, Haryana - 122018
          </p>
          <a
            href="mailto:info@fortedigitalsolutions.com"
            className="text-primary text-sm font-bold hover:underline"
          >
            info@fortedigitalsolutions.com
          </a>
        </div>
      </div>
    </div>
  );
}
