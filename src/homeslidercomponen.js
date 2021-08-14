import React from 'react'
const Homeslidercomponen = ({homeslideData}) => {
    return (
        <>
         {homeslideData.map((curElem) => {
                const {id,
                    icon,
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
            <div class="content">
                <span>{subtitle}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#" class="btn">{btn}</a>
            </div>
            <div class="image">
                <img src={image} alt="images" className="bennerimg" />
            </div>
        </div>
                        </>
                    )
                
                })}

        </>
    )
}

export default Homeslidercomponen;
