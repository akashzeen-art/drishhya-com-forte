import { BackToHome } from '@/components/layout/BackToHome';
import { Mail, Phone } from 'lucide-react';

const OFFERINGS = [
  'Premium OTT and VOD streaming',
  'Unlimited streaming on any device',
  'Expert-curated VOD libraries',
  'Flexible subscription plans',
  'New content added regularly',
];

export default function AboutUs() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 max-w-3xl mx-auto">
      <BackToHome />

      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">About Us</h1>
        <p className="text-primary text-sm font-bold">Forte Digital Solutions LLP</p>
      </div>

      <div className="space-y-6 text-white/70 text-sm leading-relaxed">
        <p>
          Forte Digital Solutions LLP is a premium OTT and VOD streaming platform focused on
          movies, series, and exclusive on-demand content. Our mission is to make premium
          entertainment accessible to everyone through a flexible, subscription-based streaming
          service.
        </p>
        <p>
          Our library covers thrillers, romance, action, documentaries, and exclusive VOD titles
          — with new series added regularly.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
        <h2 className="text-white font-black text-lg mb-4">What We Offer</h2>
        <ul className="space-y-3">
          {OFFERINGS.map((item) => (
            <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
              <span className="text-primary mt-0.5">›</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
        <h2 className="text-white font-black text-lg mb-5">Company Details</h2>
        <div className="space-y-5">
          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
              Registered Name
            </p>
            <p className="text-white text-sm font-bold">Forte Digital Solutions LLP</p>
          </div>
          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Address</p>
            <p className="text-white text-sm">
              417, 4th Floor, Tower A, Spaze I Tech Park, Sohna Road, Gurugram, Haryana - 122018
            </p>
          </div>
          {/* <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Phone</p>
              <a
                href="tel:+918929836907"
                className="text-white text-sm font-bold hover:text-primary transition-colors"
              >
                +91 8929836907
              </a>
            </div>
          </div> */}
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-primary shrink-0" />
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Email</p>
              <a
                href="mailto:info@fortedigitalsolutions.com"
                className="text-white text-sm font-bold hover:text-primary transition-colors"
              >
                info@fortedigitalsolutions.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
