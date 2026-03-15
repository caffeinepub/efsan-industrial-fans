import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import type { Page } from "../App";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const currentYear = new Date().getFullYear();
const hostname = typeof window !== "undefined" ? window.location.hostname : "";
const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

const socialLinks = [
  { Icon: SiFacebook, label: "Facebook", href: "https://facebook.com" },
  { Icon: SiInstagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: SiYoutube, label: "YouTube", href: "https://youtube.com" },
  { Icon: SiLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer({ onNavigate }: FooterProps) {
  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Engineering", page: "services" as Page },
        { label: "Maintenance", page: "services" as Page },
        { label: "Assembly", page: "services" as Page },
        { label: "Test & Measurement", page: "services" as Page },
        { label: "Spare Parts", page: "services" as Page },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "MVR Fan Systems", page: "products" as Page },
        { label: "Radial Fans", page: "products" as Page },
        { label: "Axial Fans", page: "products" as Page },
        { label: "Ex-Proof Fans", page: "products" as Page },
        { label: "Turbo Compressors", page: "products" as Page },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Oil & Gas", page: "solutions" as Page },
        { label: "Chemical Industry", page: "solutions" as Page },
        { label: "Cement Factories", page: "solutions" as Page },
        { label: "Food Sector", page: "solutions" as Page },
        { label: "Power Plants", page: "solutions" as Page },
      ],
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="font-display font-bold text-3xl tracking-widest text-foreground mb-1">
              EFSAN
            </div>
            <div className="text-xs font-body text-primary tracking-widest uppercase mb-4">
              Industrial Fans
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              25 Years of Experience and Engineering to Manage the Air.
              Industrial Fans and Fan Systems.
            </p>

            <div className="space-y-2 text-xs font-body text-muted-foreground">
              <div>Topraklik Mah. Kayalık Cad. No:41/1</div>
              <div>Inci Plaza Kat:6 D:11, Pamukkale / Denizli</div>
              <div className="text-primary">info@efsan.com</div>
              <div>+90 258 264 00 76</div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-bold text-sm uppercase tracking-widest text-foreground mb-5">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => onNavigate(link.page)}
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-150 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-muted-foreground">
            © 2012–{currentYear} EFSAN MAKİNA SAN. and TİC. LTD. ŞTİ. All Rights
            Reserved
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
