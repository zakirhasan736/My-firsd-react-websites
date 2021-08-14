import React from 'react'

const Ourcustoimerdata = ({Ourcustomerdataitem}) => {
    return (
        <>
        {Ourcustomerdataitem.map((curElem) => {
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
       <div class="swiper-slide slide" key={id}>
                <i class={`fontawesome-style ${iconH}`}></i>
                <div class="user">
                    <img src={image} alt="images" />
                    <div class="user-info">
                    <h3>{title}</h3>
                        <div class="stars">
                        <i class={`fontawesome-style ${iconretingf}`}></i>
                <i class={`fontawesome-style ${iconretingf}`}></i>
                <i class={`fontawesome-style ${iconretingf}`}></i>
                <i class={`fontawesome-style ${iconretingf}`}></i>
                <i class={`fontawesome-style ${ iconretinghalf}`}></i>
                        </div>
                    </div>
                </div>
                <p>{description}</p>
            </div>
                        </>
                    )
                
                })}
          
     
        </>
    )
}

export default Ourcustoimerdata;
