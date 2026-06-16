import { BackToHome } from '@/components/layout/BackToHome';

const REFUND_GRANTED = [
  {
    title: 'Technical Issues',
    desc: 'Persistent technical issues preventing use of the service.',
  },
  {
    title: 'Billing Error',
    desc: 'Incorrectly charged due to a billing error on our part.',
  },
];

const REFUND_NOT_GRANTED = [
  {
    title: 'Change of Mind',
    desc: 'Customer decides they no longer want the service after the refund eligibility period.',
  },
];

export default function RefundPolicy() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 max-w-3xl mx-auto">
      <BackToHome />

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Refund Policy</h1>
        <p className="text-white/40 text-sm">Last Updated: 09-06-2026</p>
      </div>

      <div className="prose-legal space-y-6 text-white/70 text-sm leading-relaxed">
        <p>
          Thank you for subscribing to Forte Digital Solutions LLP. We hope you are satisfied
          with our services, but if not, we&apos;re here to help.
        </p>

        <section>
          <h2 className="text-white font-bold text-base mb-2">1. Free Trial</h2>
          <p>
            Forte Digital Solutions LLP does not offer a free trial. Users can cancel their
            subscription at any time from their account page.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-base mb-2">2. Cancellation Policy</h2>
          <p>
            Subscribers may cancel their recurring subscription at any time. Upon cancellation,
            access remains active until the end of the current billing cycle.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-base mb-2">3. Refund Eligibility</h2>
          <p>
            To be eligible for a refund, you must submit a request within 2 days of your
            subscription start date. Refunds are granted on a case-by-case basis at the sole
            discretion of Forte Digital Solutions LLP.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-base mb-2">4. Process for Requesting a Refund</h2>
          <p>
            To request a refund, please contact our customer support team at{' '}
            <a href="mailto:info@fortedigitalsolutions.com" className="text-primary hover:underline">
              info@fortedigitalsolutions.com
            </a>
            . Include your account information, subscription details, and a brief explanation.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-base mb-2">5. Refund Processing</h2>
          <p>
            Once your refund request is received and reviewed, we will notify you of approval or
            rejection by email. If approved, your refund will be processed within 7 working days.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-base mb-2">6. Changes to Refund Policy</h2>
          <p>
            Forte Digital Solutions LLP reserves the right to modify this refund policy at any
            time. Changes take effect immediately upon posting on the website.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-base mb-2">7. Contact Us</h2>
          <p>
            If you have any questions about our refund policy, please contact us at{' '}
            <a href="mailto:info@fortedigitalsolutions.com" className="text-primary hover:underline">
              info@fortedigitalsolutions.com
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-10">
        <h2 className="text-white font-black text-lg mb-4">Refund Scenarios</h2>
        <p className="text-white/50 text-xs uppercase tracking-widest mb-3">
          Refunds Would Typically Be Granted
        </p>
        <div className="space-y-3 mb-6">
          {REFUND_GRANTED.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-green-500/20 bg-green-500/5 p-4"
            >
              <p className="text-white font-bold text-sm mb-1">{item.title}</p>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-white/50 text-xs uppercase tracking-widest mb-3">
          Refunds Would Not Typically Be Granted
        </p>
        <div className="space-y-3">
          {REFUND_NOT_GRANTED.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-red-500/20 bg-red-500/5 p-4"
            >
              <p className="text-white font-bold text-sm mb-1">{item.title}</p>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
