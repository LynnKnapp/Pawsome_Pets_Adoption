import React from 'react'
import Carousel from './Carousel'


const Home = () => {
    return (
        <div className="homeMain">
        <h3>Our Mission Statement</h3>
        <p>To provide no-kill solutions to reduce the number of homeless cats and dogs in Salt Lake County through education, rehabilitation, and re-homing with the support and cooperation of our community.</p>
            <Carousel />

            <section className="whoWeAre">
                <h2>Who We Are</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde assumenda at tempora, asperiores fugit perspiciatis officiis soluta, nisi ducimus et hic ad, enim sequi ut harum est repudiandae. Iure, ea.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aperiam ducimus esse odio animi voluptate dignissimos dicta sint dolore ipsam eveniet officiis, eaque, cupiditate obcaecati deleniti modi, reprehenderit consequuntur vero.</p>
            </section>

            <div className="testimony">
                <section>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque odio reiciendis et magnam consequuntur quo.</p>
                    <h3>-Name</h3>
                </section>
                <section></section>
                <section></section>
                <section>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque odio reiciendis et magnam consequuntur quo.</p>
                    <h3>-Name</h3>
                </section>
                <section>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque odio reiciendis et magnam consequuntur quo.</p>
                    <h3>-Name</h3>
                </section>
                <section></section>
                <section></section>
                <section>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque odio reiciendis et magnam consequuntur quo.</p>
                    <h3>-Name</h3>
                </section>
            </div>
        </div>
    )
}

export default Home