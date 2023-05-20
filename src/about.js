export default function About() {
    return (
        <div className="about-this">
            <p>
                My first smartphone was a Samsung Galaxy Note 3, which came out in 2013, and I remember being especially excited about the camera feature. Capturing an instance I found beautiful or deemed valuable for the future was something natural to me ever since. 
            </p>

            <p>
                My editing journey started from applications like VSCO, Snapseed, built-in editors on smartphones, to mainly Adobe Photoshop today. I alternate between capturing moments through my iPhone or my Olympus OM-D E-M10 Mark II. Occasionally, I also enjoy bringing an old photo I took in the past back to life. 
            </p>

            <p>
                I have never had formal training in photography and editing -- for now, I still find joy in unexpectedly encountering a moment I want to capture in my daily life, and polishing those scenes to revive the atmosphere and feelings I personally experienced during the encounter.
            </p>

            <div className="old-imgs">
                <p>
                    Captured & edited on Samsung Galaxy Note 3, 2013
                </p>

                <div className="old-imgs-wrap">
                    <img src="images/old1.jpg" alt="Rainbow 2013" />
                    <img src='images/old2.jpg' alt="Emma 2013" />
                    <img src='images/old3.jpg' alt="Jellyfish 2013" />
                </div>
            </div>
        </div>
    )
}