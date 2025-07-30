import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-16">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4">
            <Mail className="w-5 h-5 text-nav-text mt-1" />
            <div>
              <h3 className="text-sm font-medium text-nav-text mb-1">Email</h3>
              <a
                href="mailto:rohithyrc@gmail.com"
                className="text-foreground hover:text-nav-text-hover transition-colors duration-200"
              >
                rohithyrc@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="w-5 h-5 text-nav-text mt-1" />
            <div>
              <h3 className="text-sm font-medium text-nav-text mb-1">Phone</h3>
              <a
                href="tel:330-396-1425"
                className="text-foreground hover:text-nav-text-hover transition-colors duration-200"
              >
                330-396-1425
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="w-5 h-5 text-nav-text mt-1" />
            <div>
              <h3 className="text-sm font-medium text-nav-text mb-1">
                Location
              </h3>
              <p className="text-foreground">Kent, Ohio</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 mt-16">
          <a
            href="https://linkedin.com/in/rohith-yalamanchili-a92b209b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-nav-text hover:text-nav-text-hover transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/rohithyrc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-nav-text hover:text-nav-text-hover transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-sm text-nav-text">
            © 2025 Rohith Yalamanchili. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
