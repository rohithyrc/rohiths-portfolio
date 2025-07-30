const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Corizo",
      period: "Jan 2023 – Jun 2023",
      location: "India",
      achievements: [
        "Designed and implemented classification and regression models for real-world business problems.",
        "Applied NLP techniques for sentiment analysis using spaCy, NLTK, and custom-trained models.",
        "Built ETL pipelines using Python, Pandas, and SQL for structured and semi-structured data."
      ]
    },
    {
      title: "Data Science Intern",
      company: "Indo Euro Sync. Pvt. Ltd.",
      period: "Mar 2022 – Aug 2022",
      location: "Amaravati, India",
      achievements: [
        "Developed and deployed machine learning models for predictive analysis in public policy planning.",
        "Built interactive dashboards for visualizing health and demographic data using Python (Plotly, Dash) and SQL.",
        "Collaborated with cross-functional teams to translate stakeholder requirements into technical deliverables.",
        "Improved model accuracy by 18% through hyperparameter tuning and feature engineering."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-16">Professional Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-border pl-8 relative">
              <div className="absolute -left-2 top-0 w-3 h-3 bg-foreground rounded-full"></div>
              
              <div className="mb-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-1">
                  {exp.title}
                </h3>
                <div className="text-section-text mb-1">{exp.company}</div>
                <div className="text-sm text-nav-text">
                  {exp.period} | {exp.location}
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="text-section-text leading-relaxed flex items-start"
                  >
                    <span className="text-nav-text mr-3 mt-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;