
import "./../Popular/Popular.css"
import Photo1 from "./../../assets/story.jpg"
import Photo2 from "./../../assets/company.jpeg"
import Photo3 from "./../../assets/react.jpg"
import Photo4 from "./../../assets/photo10.jpg"

import PopularCards from "./../../components/Popularcards/PopularCards"



export default function Popular() {
  return (
    <section className="Popular">
        <h2>حول مهند</h2>
        <p>مزيد من المعلومات عن مهند اصطيف </p>
        
          <PopularCards title={"الولادة والسيرة الذاتية"}  direc={true} des={"مهند اصطيف هو شخص شجاع، طموح، حكيم، مبدع، وصادق، يتمتع بذكاء عالٍ وحنان، وهو قائد مغامر ذو قلب طيب، يحب التعاون، ويتميز بالمرونة، التفاؤل، والقدرة على التحمل"} photo1={Photo3} photo2={Photo4}/>
          <PopularCards title={"حول مهند"} direc={false} des={"من جدّ وجد، ومن زرع حصد. لا شيء يأتي بسهولة، فإذا كنت ترغب في تحقيق النجاح والوصول إلى أهدافك، يجب عليك أن تواصل العمل بجد واجتهاد، ولا تستسلم أمام الصعاب مهما كانت التحديات."} photo1={Photo1} photo2={Photo2}/>
        
    </section>
 
  )
}








