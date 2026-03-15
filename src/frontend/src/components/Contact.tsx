import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact } from "@/hooks/useQueries";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { mutate, isPending, isSuccess, isError } = useSubmitContact();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value:
        "Topraklik Mah. Kayalık Cad. No:41/1, Inci Plaza Kat:6 D:11 Pamukkale / Denizli",
    },
    { icon: Mail, label: "Email", value: "info@efsan.com" },
    { icon: Phone, label: "Phone", value: "+90 258 264 00 76" },
    { icon: Clock, label: "Hours", value: "Mon–Fri 08:00–18:00" },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-body text-xs uppercase tracking-widest text-primary">
            Get in Touch
          </span>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mt-2">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Have a project in mind? Our engineering team is ready to provide
              custom fan solutions tailored to your specific industrial
              requirements.
            </p>

            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    {item.label}
                  </div>
                  <div className="font-body text-sm text-foreground">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="name"
                    className="font-body text-xs uppercase tracking-wide text-muted-foreground"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    data-ocid="contact.name_input"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className="bg-secondary border-border focus:border-primary font-body text-sm"
                    placeholder="John Smith"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="font-body text-xs uppercase tracking-wide text-muted-foreground"
                  >
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    data-ocid="contact.email_input"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className="bg-secondary border-border focus:border-primary font-body text-sm"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="phone"
                    className="font-body text-xs uppercase tracking-wide text-muted-foreground"
                  >
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    data-ocid="contact.phone_input"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="bg-secondary border-border focus:border-primary font-body text-sm"
                    placeholder="+1 555 000 0000"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="subject"
                    className="font-body text-xs uppercase tracking-wide text-muted-foreground"
                  >
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    data-ocid="contact.subject_input"
                    required
                    value={form.subject}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, subject: e.target.value }))
                    }
                    className="bg-secondary border-border focus:border-primary font-body text-sm"
                    placeholder="Fan system inquiry"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="message"
                  className="font-body text-xs uppercase tracking-wide text-muted-foreground"
                >
                  Message *
                </Label>
                <Textarea
                  id="message"
                  data-ocid="contact.message_textarea"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  className="bg-secondary border-border focus:border-primary font-body text-sm resize-none"
                  placeholder="Describe your project requirements..."
                />
              </div>

              {isSuccess && (
                <div
                  data-ocid="contact.success_state"
                  className="flex items-center gap-3 p-4 bg-green-900/20 border border-green-500/30 text-green-400 text-sm font-body"
                >
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              {isError && (
                <div
                  data-ocid="contact.error_state"
                  className="flex items-center gap-3 p-4 bg-red-900/20 border border-red-500/30 text-red-400 text-sm font-body"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <Button
                type="submit"
                data-ocid="contact.submit_button"
                disabled={isPending || isSuccess}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold uppercase tracking-widest text-sm py-6"
              >
                {isPending ? (
                  <>
                    <Loader2
                      data-ocid="contact.loading_state"
                      className="w-4 h-4 mr-2 animate-spin"
                    />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
