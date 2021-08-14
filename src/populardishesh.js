import React, {useState} from 'react'
import PopularDish from './Api/populardishapi'
import Populardishdata from './populardishdata'
const Populardishesh = () => {
    const [PopularDishData, setPopularDishData] = useState(PopularDish);
    return (
        <>
           <section class="dishes pt-80 pb-80" id="dishes">

<h3 class="sub-heading"> our dishes </h3>
<h1 class="heading"> popular dishes </h1>

<div class="box-container">
< Populardishdata  PopularDishData={PopularDishData}/>
</div>

</section> 
        </>
    )
}

export default Populardishesh;
