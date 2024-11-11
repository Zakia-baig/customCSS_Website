

export default function Skills() {
    return (
        <div className="skills-container">
            <h1 className="skills-header">My Skills</h1>

            <div className="skills-content">
                {/* Technical Skills Section */}
                <div className="skill-category">
                    <h2 className="category-header">Technical Skills</h2>
                    <div>
                        <span className="skill-item">HTML</span>
                        <span className="skill-item">CSS</span>
                        <span className="skill-item">JavaScript</span>
                        <span className="skill-item">React</span>
                        <span className="skill-item">Next.js</span>
                        <span className="skill-item">Tailwind CSS</span>
                        <span className="skill-item">SEO</span>
                        <span className="skill-item">Git</span>
                    </div>
                </div>

                {/* Soft Skills Section */}
                <div className="skill-category">
                    <h2 className="category-header">Soft Skills</h2>
                    <div>
                        <span className="skill-item">Problem Solving</span>
                        <span className="skill-item">Communication</span>
                        <span className="skill-item">Team-work</span>
                        <span className="skill-item">Adaptability</span>
                        <span className="skill-item">Time Management</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
