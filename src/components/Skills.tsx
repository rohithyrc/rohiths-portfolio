const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "R", "SQL", "JavaScript", "HTML/CSS", "Bash"]
    },
    {
      title: "Libraries & Frameworks", 
      skills: ["Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib", "Plotly", "Flask"]
    },
    {
      title: "Databases & Cloud",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Google Cloud Platform", "AWS S3", "Firebase"]
    },
    {
      title: "Tools",
      skills: ["Tableau", "Power BI", "Jupyter", "VS Code", "Docker", "GitHub", "Excel"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-16">Technical Skills</h2>
        
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-section-text hover:text-foreground transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;