function Footer() {

    const footerMenu = [
        {
            menu: "Home",
            url: "#"
        },
        {
            menu: "Community",
            url: "#"
        },
        {
            menu: "Events",
            url: "#"
        },
        {
            menu: "Contact",
            url: "#"
        }
    ]

    const footerResource = [
        {
            con: "Blog",
            url: "#"
        },
        {
            con: "News",
            url: "#"
        },
        {
            con: "Guides",
            url: "#"
        },
        {
            con: "Help Center",
            url: "#"
        }
    ]

    const footerCommunity = [
        {
            con: "NewsFeed",
            url: "#"
        },
        {
            con: "Profile",
            url: "#"
        },
        {
            con: "Friends",
            url: "#"
        },
        {
            con: "Forums",
            url: "#"
        }
    ]

    const footerLInks = [
        {
            con: "Members",
            url: "#"
        },
        {
            con: "Activity",
            url: "#"
        },
        {
            con: "Groups",
            url: "#"
        },
        {
            con: "Private Group",
            url: "#"
        }
    ]

    const footSocialLink = [
        {
            img: "./icons/Frame.png"
        },
        {
            img: "./icons/Group.png"
        },
        {
            img: "./icons/Frame (1).png"
        },
        {
            img: "./icons/Linkedin.png"
        }
    ]

    return (
        <section id="footer">
            <footer>
                <div className="container">
                    <div className="footer-con">

                        <div className="footer-link">
                            <div>
                                <h4>Home</h4>
                                {
                                    footerMenu?.map((footMenu, index) => (
                                        <ul>
                                            <li key={index}><a href={footMenu.url}>{footMenu.menu}</a></li>
                                        </ul>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="footer-link">
                            <div>
                                <h4>Resources</h4>
                                {
                                    footerResource?.map((footResource, index) => (
                                        <ul>
                                            <li><a href={footResource.url}>{footResource.con}</a></li>
                                        </ul>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="footer-link">
                            <div>
                                <h4>Community</h4>
                                {
                                    footerCommunity?.map((footCommunity, index) => (
                                        <ul>
                                            <li key={index}><a href={footCommunity.url}>{footCommunity.con}</a></li>
                                        </ul>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="footer-link">
                            <div>
                                <h4>Main links</h4>
                                {
                                    footerLInks?.map((footLInks, index) => (
                                        <ul>
                                            <li><a href={footLInks.url}>{footLInks.con}</a></li>
                                        </ul>
                                    ))
                                }
                            </div>
                        </div>


                        <div className="footer-subscribe">
                            <div>
                                <h4>Subscribe Cirkle Newsletter</h4>
                                <p>Subscribe to be the first one to know about updates. Enter your email</p>
                            </div>
                            <div className="subscribe-f">
                                <input type="text" placeholder="Email Address" />
                                <button><a href="#">Subscribe</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="f-bottom-con">
                            <h5><a href="#"> Besnik Creative Agency.</a></h5>
                            <a href="#"><img src="./images/fotter logo.png" alt="" /></a>
                            <div>
                                {
                                    footSocialLink?.map((footSocialIcon, index) => (
                                        <a href={"#"}><img src={footSocialIcon.img} alt="" /></a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}
export default Footer;