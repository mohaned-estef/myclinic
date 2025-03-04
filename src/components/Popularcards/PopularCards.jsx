import "./pop.css"

export default function PopularCards({title ,direc,des,photo1,photo2}) {
  return (

    <div className={direc ? "SingleCard" : "SingleCardReverse"}>
      <div className="side">
        <div className='side-1'>
            <h3>
                {title}
            </h3>

            <p>
                {des}
            </p>
        </div>

        <div className='side-2'>

          <img src={photo1} />
          <img src={photo2}/>
        </div>
      </div>
    </div>
  )
}
  

/*

<div className={direc ? "SingleCard" : "SingleCardReverse"}>
      
        <div className='side-1'>
            <h3>
                {title}
            </h3>

            <p>
                {des}
            </p>
        </div>

        <div className='side-2'>
          <img src={photo1} />
          <img src={photo2}/>
        </div>
    </div>
    
    */
