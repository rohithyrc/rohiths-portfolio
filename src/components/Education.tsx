const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Kent State University",
      period: "May 2025",
      location: "USA",
      gpa: "3.88",
      details: "Specializing in Machine Learning and Data Science"
    },
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      school: "Vellore Institute of Technology",
      period: "May 2023",
      location: "India", 
      gpa: "3.4",
      details: "Focus on Algorithms, Data Structures, and Software Engineering"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-16">Education</h2>
        
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-border pl-8 relative">
              <div className="absolute -left-2 top-0 w-3 h-3 bg-foreground rounded-full"></div>
              
              <div className="mb-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-1">
                  {edu.degree}
                </h3>
                <div className="text-section-text mb-1">{edu.school}</div>
                <div className="text-sm text-nav-text mb-2">
                  {edu.period} | {edu.location}
                </div>
                <div className="text-sm text-nav-text mb-3">
                  GPA: {edu.gpa}
                </div>
                <p className="text-section-text">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;