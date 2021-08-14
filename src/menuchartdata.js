import React from 'react'

const Menuchartdata = ({Menuchartdataitem}) => {
    return (
        <>
         {Menuchartdataitem.map((curElem) => {
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
        <div class="image">
            <img src={image} alt="images" />
            <a href="#" class={`fontawesome-style ${iconH}`}></a>
        </div>
        <div class="content">
            <div class="stars">
                <i class={`fontawesome-style ${iconretingf}`}></i>
                <i class={`fontawesome-style ${iconretingf}`}></i>
                <i class={`fontawesome-style ${iconretingf}`}></i>
                <i class={`fontawesome-style ${iconretingf}`}></i>
                <i class={`fontawesome-style ${ iconretinghalf}`}></i>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#" class="btn">{btn}</a>
            <span class="price">{price}</span>
        </div>
    </div>
                        </>
                    )
                
                })}
            
        </>
    )
}
export default Menuchartdata;