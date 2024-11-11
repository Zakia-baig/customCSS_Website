

export default function Media() {
    return (
        <div className="media-container">
            <h1 className="media-header">Social Media & Featured Media</h1>
            
            <div className="media-list">
                <div className="media-item">
                    <h2 className="media-title">YouTube Channel</h2>
                    <p className="media-description">Subscribe to my YouTube channel for tutorials and project walkthroughs.</p>
                    <a href="https://www.youtube.com/channel/username" target="_blank" rel="noopener noreferrer" className="media-link">Visit Channel</a>
                </div>
                
                <div className="media-item">
                    <h2 className="media-title">Instagram</h2>
                    <p className="media-description">Follow me on Instagram for insights into my latest projects and designs.</p>
                    <a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer" className="media-link">Follow on Instagram</a>
                </div>

                <div className="media-item">
                    <h2 className="media-title">LinkedIn</h2>
                    <p className="media-description">Connect with me on LinkedIn to grow our professional network.</p>
                    <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="media-link">Connect on LinkedIn</a>
                </div>

                <div className="media-item">
                    <h2 className="media-title">Twitter</h2>
                    <p className="media-description">Follow me on Twitter for tech updates and project announcements.</p>
                    <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="media-link">Follow on Twitter</a>
                </div>
            </div>
        </div>
    );
}
