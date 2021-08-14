import React, {useState} from 'react'
import Footerwidgets from './Api/footerapi'
import Footerstoredata from './footerstoredata'
import Footercopyright from './footercopyright'
const Footer = () => {
    const [Footerstoredataitem, setFooterstoredataitem] = useState(Footerwidgets);
    return (
        <>
           <section class="footer pt-80">

<div class="box-container">
< Footerstoredata Footerstoredataitem={Footerstoredataitem}/>
</div>
< Footercopyright />
</section> 
        </>
    )
}

export default Footer;
