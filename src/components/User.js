function User({ url, login, repos }) {
    return (
        <div className="card">
            <div className="card-body">
                {/* <h4 className="card-title">{url}</h4> */}
                <img className="avatar" src={url} alt="Avatar" />
                <p className="card-text">Username: {login}</p>
                <p>
                    Repositories: <a href={repos} className="card-link">{repos}</a>
                </p>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    )

}

export default User