import React from 'react'

const Footerstoredata = ({Footerstoredataitem}) => {
    return (
        <>
            {Footerstoredataitem.map((curElem) => {
                const {id,
                    iconH,
                    iconeye,
        iconretingf,
        iconretinghalf,
                    image,
                    title,
                    items1,
                    items2,
                    items3,
                    items4,
                    items5,
                    items6,
                    btn} = curElem;
                    return(
                        <>
    <div class="box" key="id">
        <h3>{title}</h3>
        <a href="#">{items1}</a>
        <a href="#">{items2}</a>
        <a href="#">{items3}</a>
        <a href="#">{items4}</a>
        <a href="#">{items5}</a>
        <a href="#">{items6}</a>
    </div>
                        </>
                    )
                
                })} 
        </>
    )
}

export default Footerstoredata;
