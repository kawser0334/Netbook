

function Community() {

    const communityCard = [
        {
            icon: "./icons/Icon (1).png",
            title: "Members, Friends",
            text: "Members, Friends Connection ( like followers ), Private Message"
        },
        {
            icon: "./icons/Icon2.png",
            title: "Groups",
            text: "Your users can create groups to let other users to join and talk"
        },
        {
            icon: "./icons/Icon (3).png",
            title: "Forum",
            text: "Forum is ready by BBPress. Your users can make topics and talk."
        },
        {
            icon: "./icons/Icon (4).png",
            title: "Custom Module",
            text: "You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder."
        },
        {
            icon: "./icons/Icon (5).png",
            title: "List Builder",
            text: "Members, Groups list can be modified by drag & drop live builder."
        },
        {
            icon: "./icons/Icon (6).png",
            title: "List Scroll Effects",
            text: "8 different scroll effects are ready. You can always change by your tastes."
        }
    ]

    return (
        <section id="our-community">
            <div className="container">
                <div className="title-com">
                    <h4>Our Community</h4>
                    <h2>Community Main Feature</h2>
                    <p>The wise man therefore always holds in these matters to this principle of selection.</p>
                </div>
                <div className="community">
                    {
                        communityCard.map((singleCard, index) => (<div key={index} className="community-card">
                            <div className="card-com">
                                <img className="icon-1" src={singleCard.icon} alt="" />
                                <div>
                                    <h4>{singleCard.title}</h4>
                                    <p>{singleCard.text}</p>
                                </div>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}
export default Community;