function Repo({ topics }) {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some example text. Some example text.</p>
                <a href="#" className="card-link">Card link: {topics}</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    )
}

export default Repo