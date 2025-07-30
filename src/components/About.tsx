const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-16">
          About
        </h2>

        <div className="space-y-8">
          <p className="text-base lg:text-lg text-section-text leading-relaxed">
            I recently completed my Master's in Computer Science at Kent State
            University, graduating with a 3.88 GPA. I enjoy building intelligent
            data-driven solutions and machine learning models that solve
            real-world problems.
          </p>

          <p className="text-base lg:text-lg text-section-text leading-relaxed">
            I have hands-on experience with Python, R, SQL, and various ML
            frameworks including TensorFlow, Scikit-learn, and PyTorch. I'm also
            proficient in data visualization tools like Tableau and Power BI,
            and cloud platforms including GCP and AWS. I'm a fast learner,
            passionate about solving complex problems, and always eager to
            implement cutting-edge AI/ML technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-sm font-medium text-nav-text mb-2">
                Location
              </h3>
              <p className="text-foreground">Kent, Ohio</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-nav-text mb-2">Email</h3>
              <p className="text-foreground">rohithyrc@gmail.com</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-nav-text mb-2">Status</h3>
              <p className="text-foreground">Available for opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
