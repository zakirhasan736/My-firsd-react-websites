import React, {useState} from 'react'
import customersrvw from './Api/ourclientapi'
import Ourcustomerdata from './ourcustoimerdata'
const Ourcustomer = () => {
    const [Ourcustomerdataitem, setOurcustomerdataitem] = useState(customersrvw);
    return (
        <>
<section class="review pt-80 pb-80" id="review" >

    <h3 class="sub-heading"> customer's review </h3>
    <h1 class="heading"> what they say </h1>
    <div class="swiper-container review-slider">
        <div class="swiper-wrapper">
        < Ourcustomerdata  Ourcustomerdataitem={Ourcustomerdataitem}/>
        </div>
    </div>
</section>

        </>
    )
}

export default Ourcustomer
