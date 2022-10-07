function Repo({ name, desc, languages, topics, url }) {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{desc}</p>
                <a href="#" className="card-link">Built using: {languages}</a>
                <br/>
                <a href="#" className="card-link">{topics}</a>
                <br/>
                <a href={url} className="card-link">Visit Repo</a>
            </div>
        </div>
    )
}

export default Repo