

export default function Resources() {
    return (
        <div className="resources-container">
            <h1 className="resources-header">Useful Resources</h1>
            
            <div className="resources-list">
                <div className="resource-item">
                    <h2 className="resource-title">FreeCodeCamp</h2>
                    <p className="resource-description">An open-source community that offers free coding lessons and resources.</p>
                    <a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer" className="resource-link">Visit FreeCodeCamp</a>
                </div>
                
                <div className="resource-item">
                    <h2 className="resource-title">MDN Web Docs</h2>
                    <p className="resource-description">Comprehensive documentation for web technologies, including HTML, CSS, and JavaScript.</p>
                    <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer" className="resource-link">Visit MDN</a>
                </div>

                <div className="resource-item">
                    <h2 className="resource-title">GitHub</h2>
                    <p className="resource-description">A platform for hosting and collaborating on open-source projects.</p>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="resource-link">Visit GitHub</a>
                </div>

                <div className="resource-item">
                    <h2 className="resource-title">W3Schools</h2>
                    <p className="resource-description">An educational website for learning web technologies online.</p>
                    <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer" className="resource-link">Visit W3Schools</a>
                </div>
            </div>
        </div>
    );
}
