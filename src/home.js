import React, {useState} from 'react'
import Benner from './Api/bennerapi'
import Homeslidercomponen from './homeslidercomponen'
const Home = () => {
    const [homeslideData, sethomeslideData] = useState(Benner);
    return (
        <>

<section class="home" id="home">

    <div class="swiper-container home-slider">

        <div class="swiper-wrapper wrapper">
        < Homeslidercomponen homeslideData={homeslideData}/>
        </div>
        <div class="swiper-pagination"></div>

    </div>

</section>
        </>
    )
}
export default Home;
