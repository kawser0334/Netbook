
const navItems = [
    {
        menu: "Home",
        url: "#"
    },
    {
        menu: "Community",
        url: "#"
    },
    {
        menu: "Blog",
        url: "#"
    },
    {
        menu: "Events",
        url: "#"
    }
]


function HeaderHeroPart() {
    return (
        <section id="header">
            <nav>
                <div className="container">
                    <div className="nav">
                        <div>
                            <div>
                                <a href="#"><img src="./images/logo.png" alt="" /></a>
                            </div>
                            <div>
                                <ul>
                                    {
                                        navItems?.map((a, index) => (
                                            <li key={index}><a href={a.url}>{a.menu}</a></li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className="search-div">

                            <form action="">
                                <button type="submit"><img src="./icons/search.png" alt="" /></button>
                                <input type="text" placeholder="Search Here..." />
                            </form>

                            <div>
                                <button className="log-button"><a href="#">Log in</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section>
                <div className="container">
                    <div className="hero-section">
                        <div>
                            <h4 >Netbook community</h4>
                            <h1>Your Solutions For Community!</h1>
                            <p>More than 2 billion people in over countries use socibook to stay in touch with friends & family.</p>


                            <div>
                                <button className="primary-btn"><a href="#">About More</a></button>
                                <button className="secondary-btn"><a href="#">Invite Friend</a></button>
                            </div>
                        </div>

                        <div>
                            <img src="./images/hero-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </section>
    )
}
export default HeaderHeroPart;