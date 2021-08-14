import React from 'react'

const Populardishdata = ({PopularDishData}) => {
    return (
        <>
         {PopularDishData.map((curElem) => {
                const {id,
                    iconH,
                    iconeye,
        iconretingf,
        iconretinghalf,
                    image,
                    title,
                    subtitle,
                    category,
                    price,
                    description ,
                    btn} = curElem;
                    return(
                        <>
        <div class="box" key={id}>
        <a href="#" class={`fontawesome-style ${iconH}`}></a>
        <a href="#" class={`fontawesome-style ${iconeye}`}></a>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <div class="stars">
            <i class={`fontawesome-style ${iconretingf}`}></i>
            <i class={`fontawesome-style ${iconretingf}`}></i>
            <i class={`fontawesome-style ${iconretingf}`}></i>
            <i class={`fontawesome-style ${iconretingf}`}></i>
            <i class={`fontawesome-style ${iconretinghalf}`}></i>
        </div>
        <span>{price}</span>
        <a href="#" class="btn">{btn}</a>
    </div>
                        </>
                    )
                
                })}
            
        </>
    )
}
export default Populardishdata;