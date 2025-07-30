import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "End-to-End Health Analytics Dashboard",
      year: "2024",
      description: "Full-Stack Health Analytics Platform",
      fullDescription: "Developed an interactive dashboard for visualizing health trends and patient statistics from government healthcare datasets using Python, Pandas, Plotly, seaborn, SQL, Power BI, and Excel.",
      techStack: ["Python", "Pandas", "Plotly", "SQL", "Power BI", "Excel"],
      github: "#",
      demo: "#"
    },
    {
      title: "Insurance Cost Prediction System",
      year: "2023", 
      description: "ML-Powered Insurance Cost Predictor",
      fullDescription: "Applied regression analysis to predict health insurance costs based on factors such as age, BMI, and smoking status. Built and tested multiple regression models to identify the most accurate method for estimating premium costs.",
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      github: "#",
      demo: "#"
    },
    {
      title: "COVID-19 Patient Admittance System",
      year: "2022",
      description: "Healthcare Optimization Algorithm",
      fullDescription: "Developed a system using the Floyd-Warshall algorithm to display the nearest available doctor or hospital for COVID-19 testing. Reduced waiting times by showing real-time hospital availability.",
      techStack: ["Python", "Algorithms", "Data Structures", "Graph Theory"],
      github: "#",
      demo: "#"
    },
    {
      title: "Driver Drowsiness Detection",
      year: "2022",
      description: "Computer Vision Safety System",
      fullDescription: "Developed a real-time driver drowsiness detection system using YOLO, deep learning, and image processing techniques. Implemented facial feature analysis to detect fatigue and alert drivers.",
      techStack: ["YOLO", "TensorFlow", "OpenCV", "Python", "Deep Learning"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-16">Selected Work</h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-border pb-16 last:border-b-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-3">
                  <div className="text-sm text-nav-text mb-2">{project.year}</div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <div className="text-section-text mb-6">{project.description}</div>
                  
                  <div className="flex gap-4 mb-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-foreground text-foreground hover:bg-foreground hover:text-background"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-nav-text hover:text-nav-text-hover"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="lg:col-span-9">
                  <p className="text-section-text leading-relaxed mb-6">
                    {project.fullDescription}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-medium text-nav-text mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-sm text-section-text hover:text-foreground transition-colors duration-200"
                        >
                          {tech}
                          {techIndex < project.techStack.length - 1 && " • "}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;