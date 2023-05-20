export default function Categories() {
    return (
        <div className="category-info">
            <div className="category-txt">
                <p>
                    I go about my life, sometimes find a significant moment, capture it with whatever tool happens to be at hand, and later edit. Since I never intentionally plan to take photographs, I mostly end up capturing inanimate subjects.
                </p>
                <p>
                    Currently, my photographs mainly fall into these subject categories. I am eager to broaden my scope over time by exploring new places and gaining new experiences!
                </p>
            </div>

            <div className="category-imgs">
                <div className="arc"></div>

                <p className="cityscape">Cityscape</p>
                <p className="landscape">Landscape</p>
                <p className="architecture">Architecture</p>
                <p className="nature">Nature</p>
                <p className="people">People</p>

                <p className="blur-txt">Hover over the words!</p>
                
                <img src="images/people.jpg" alt="People" className="img-people" />
                <img src="images/nature.jpg" alt="Nature" className="img-nature" />
                <img src="images/arch.jpg" alt="Architecture" className="img-arch" />
                <img src="images/landscape.jpg" alt="Landscape" className="img-land" />
                <img src="images/city.jpg" alt="Cityscape" className="img-city" />
                <img src="images/blurredbg.jpg" alt="Initial Blurred Background" className="img-blur" /> 

            </div>
        </div>
    )
}