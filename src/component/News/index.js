function News() {

    const latestNews = [
        {
            img: "./images/news img1.png",
            lineImg: "./images/Line 3.png",
            heading: "It Does Not Matter Hows Slowly go as Long",
            buttonTxt: "Continue Reading",
            arrowImg: "./icons/ArrowRight news.png",
            url: "#"
        },
        {
            img: "./images/news img2.png",
            lineImg: "./images/Line 3.png",
            heading: "Netbook Network Added New Photo Filter",
            buttonTxt: "Continue Reading",
            arrowImg: "./icons/ArrowRight news.png",
            url: "#"
        },
        {
            img: "./images/news img3.png",
            lineImg: "./images/Line 3.png",
            heading: "We Optimised Netbooks Better Navigation",
            buttonTxt: "Continue Reading",
            arrowImg: "./icons/ArrowRight news.png",
            url: "#"
        }
    ]

    return (
        <section id="news">
            <div className="container">
                <div className="news-title">
                    <h4>Get Our Aplication</h4>
                    <h2>Latest News</h2>
                </div>

                <div className="news-main">
                    <div className="pattern">
                        <img className="pattern-1" src="./images/Union.png" alt="" />
                        <img className="pattern-2" src="./images/Union.png" alt="" />
                    </div>
                    {
                        latestNews?.map((newsPost, index) => (
                            <div className="news-card">
                                <img src={newsPost.img} alt="" />
                                <div className="news-card-text">
                                    <div className="line"><img src={newsPost.lineImg} alt="" /></div>
                                    <div>
                                        <h3>{newsPost.heading}</h3>
                                        <div className="arrow">
                                            <a href={newsPost.url}><p>{newsPost.buttonTxt}</p></a>
                                            <a href={newsPost.url}><img src={newsPost.arrowImg} alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default News;