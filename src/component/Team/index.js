function Team() {

    const teamMember = [
        {
            abstrack: "./images/Abstrack.png",
            img: "./images/Image t1.png",
            name: "Fahim Rahman",
            userName: "@rahman"
        },
        {
            abstrack: "./images/Abstrack.png",
            img: "./images/Image t2.png",
            name: "Kazi Rahman",
            userName: "@Rahman"
        },
        {
            abstrack: "./images/Abstrack.png",
            img: "./images/Image t3.png",
            name: "Masterero Ali",
            userName: "@Master"
        },
        {
            abstrack: "./images/Abstrack.png",
            img: "./images/Image t4.png",
            name: "Alia Karon",
            userName: "@Alia"
        }
    ]

    return (
        <section id="team-member">
            <div class="container">
                <div class="title-com">
                    <h4>Valuable Team</h4>
                    <h2>Our Active Members</h2>
                    <p>when an unknown printer took a galley of type and meeting fari scrambled it.</p>
                </div>
                <div class="team-btn">
                    <button><a href="#">Newst</a></button>
                    <button><a href="#">Popular</a></button>
                    <button class="primary-btn team-btn-3"><a href="#">Active</a></button>
                </div>
                <div class="team-mate">
                    {
                        teamMember?.map((singleProfile, index) => (
                            <div key={index} class="team-people">
                                <div class="team-img">
                                    <img class="img-ellipse" src={singleProfile.abstrack} alt=" " />
                                    <img src={singleProfile.img} alt="" />
                                </div>
                                <div class="team-info">
                                    <h4>{singleProfile.name}</h4>
                                    <p>{singleProfile.userName}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}
export default Team;