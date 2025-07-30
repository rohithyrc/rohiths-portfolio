import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-4">
          Rohith Yalamanchili
          <div className="w-20 h-px bg-foreground mx-auto mt-4"></div>
        </h1>
        
        <h2 className="text-xl lg:text-2xl text-hero-subtitle mb-8">
          Data Scientist & ML Engineer
        </h2>
        
        <p className="text-base lg:text-lg text-section-text max-w-3xl mx-auto mb-12 leading-relaxed">
          Motivated and results-driven Computer Science graduate student with hands-on experience as a Data Science Intern. 
          Possess 3+ years of expertise in machine learning, predictive modeling, and AI-driven solutions. 
          Seeking to contribute by designing and deploying impactful AI/ML solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Work
          </Button>
          <a 
  href="/Rohith-Yalamanchili-Resume-20250716.pdf" 
  download 
  className="text-nav-text hover:text-nav-text-hover"
>
  <Button 
    variant="ghost" 
    size="lg"
    className="text-nav-text hover:text-nav-text-hover flex items-center gap-2"
  >
    <Download className="w-4 h-4" />
    Download Resume
  </Button>
</a>
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/rohithyrc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nav-text hover:text-nav-text-hover transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/rohith-yalamanchili-a92b209b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nav-text hover:text-nav-text-hover transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:rohithyrc@gmail.com"
            className="text-nav-text hover:text-nav-text-hover transition-colors duration-200"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;