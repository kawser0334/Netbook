const socialItem = [
    {
        socialJoin: "Groups"
    },
    {
        socialJoin: "Messages"
    },
    {
        socialJoin: "Share"
    }
]

function Social() {
    return (
        <section id="social-network">
            <div className="container">
                <div className="social">
                    <div>
                        <h4>Whats Netboks?</h4>
                        <h2>Why Join to Netbook Social Network?</h2>
                        <p>Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</p>
                        <div>
                            {
                                socialItem?.map((a, index) => (
                                    <div><input key={index} type="radio" value="groups" id="groups" name="social" checked /><label for="">{a.socialJoin}</label></div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="social-img">
                        <div>
                            <a href="#"><img src="./images/Image1.png" alt="" /></a>
                        </div>
                        <div className="social-img2">
                            <a href="#"><img src="./images/Image2.png" alt="" /></a>
                            <a href="#"><img src="./images/Image 3.png" alt="" /></a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Social;