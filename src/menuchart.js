import React, {useState} from 'react'
import Menuchartapi from './Api/menuchartapi'
import Menuchartdata from './menuchartdata'

const Menuchart = () => {
    const [Menuchartdataitem, setMenuchartdataitem] = useState(Menuchartapi);
    return (
        <>
            <section class="menu pt-80 pb-80" id="menu" >

<h3 class="sub-heading"> our menu </h3>
<h1 class="heading"> today's speciality </h1>

<div class="box-container">
< Menuchartdata  Menuchartdataitem={Menuchartdataitem}/>
</div>

</section>
        </>
    )
}

export default Menuchart
