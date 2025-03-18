import { useState } from "react";
import { Mail, MapPin, Linkedin } from "lucide-react";
import ButtonCustom from "../ui/button-custom";
import SectionHeading from "../common/SectionHeading";
import { cn } from "@/lib/utils";
import { useToast } from "../ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Construct email content
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open mail client with pre-filled email
    const mailtoLink = `mailto:rahulhirani.dev@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Message prepared",
        description: "Your mail client should have opened with the message",
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset the submission status after a delay
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "rahulhirani.dev@gmail.com",
      link: "mailto:rahulhirani.dev@gmail.com",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-primary" />,
      title: "Linkedin",
      value: "linkedin.com/in/rahulhirani24",
      link: "https://www.linkedin.com/in/rahulhirani24/",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      value: "Bengaluru, India",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container px-4 mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" centered />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            {/* <h3 className="text-xl font-semibold mb-4">Let's talk about your project</h3> */}
            <p className="text-muted-foreground mb-6">
              Looking to collaborate or hire me? Feel free to reach out. I'm
              always open to discussing new opportunities and ideas.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="mt-0.5">{info.icon}</div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 shadow-sm border border-border">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                ></textarea>
              </div>

              <ButtonCustom
                type="submit"
                className={cn(
                  "w-full",
                  isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                )}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Preparing Email..."
                  : submitted
                  ? "Email Prepared!"
                  : "Send Message"}
              </ButtonCustom>

              {submitted && (
                <p className="text-sm text-green-600 font-medium text-center">
                  Your message has been prepared to send via your email client!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
