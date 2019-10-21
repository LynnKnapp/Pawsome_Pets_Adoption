import React from 'react'
import Carousel from './Carousel'
const Home = () => {
    return (
        <div className="homeMain">
            <Carousel />
            <section className="blog">
                <h2>Sweetened with Vanilla</h2>
                <img src="https://images.unsplash.com/photo-1556935382-a3f3a86d5c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="Claire, her daughter, and her cat, Vanilla"/>
                <p>For years, my daughter has been asking my husband and I for a pet, but had never been able to due to living in apartments. Once we had finally gotten our first house, she started asking again with even more fever! After talking it through with my husband, we decided that the time had finally come. Some pets were out of the running from the get-go. Snakes scared my daughter. Ferrets and guinea pigs were too smelly. We did not feel like we had enough of a yard to truly entertain a rabbit or two. And I am allergic to dogs. We ended up deciding to find a cat. My parents have a few, and my daughter always loves spending time with them whenever we visit.
                </p>
                <p>And then the search was on. We checked out a few of the local agencies near us, but none of them really clicked with us. A bit discouraged, a coworker told me about Pawesome Pets Adoption, and I just had to check it out. Once I got home, I pulled it up on the computer, my family sitting next to me. The website was so easy to use and it had so many options. We ended up finding a few that we were interested in learning more about, and sent out the request for more information. After going through their security processes, we eventually figured out who needed to be a part of our family.
                </p>  
                <p>It soon became obvious that Vanilla was exactly what our little family needed. She and my daughter are inseparable, which is always the cutest thing. I now tell so many people about this experience, in the hope that they will be able to find a new member of their own family soon.
                </p> 
                <h3>-Claire Ebbers & Vanilla</h3>
            </section>
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