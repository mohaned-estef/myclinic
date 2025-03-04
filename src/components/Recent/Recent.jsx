import "./Recent.css";
import Photo1 from "./../../assets/pulptreatment.jpg";
import Photo2 from "./../../assets/Fixedprostheses.webp";
import Photo3 from "./../../assets/conservativetreatment.jpg";
import Photo4 from "./../../assets/removableprostheses.jpg";
import Photo5 from "./../../assets/extract.jpg";
import { useState } from "react";

export default function DarkVariantExample() {
  const paragraph1 =
    "مداواة الأسنان اللبية هي عملية علاجية تهدف إلى معالجة تسوس الأسنان اللبية عند الأطفال. يشمل العلاج إزالة الأنسجة المتضررة من التسوس، ثم تنظيف الأسنان وتعقيمها. بعد ذلك، يتم حشو الأسنان باستخدام مواد خاصة لضمان استعادة وظائفها وحمايتها من الألم أو العدوى، مما يساعد على الحفاظ على صحة الفم.";
  const paragraph2 =
    "التعويضات الثابتة هي أجهزة تستخدم لاستبدال الأسنان المفقودة أو التالفة، مثل التيجان والجسور. تُثبت هذه التعويضات بشكل دائم على الأسنان الأصلية أو الزرعات، مما يساعد في استعادة الوظائف الطبيعية للفم، مثل المضغ والكلام. تعتبر هذه الحلول فعالة لتحسين المظهر والجمالية وضمان الراحة للمريض على المدى الطويل.";
  const paragraph3 = "المداواة المحافظة تهدف إلى الحفاظ على الأسنان ومنع تسوسها";
  const paragraph4 =
    "تعويضات الأسنان المتحركة هي حلول طبية تستخدم لاستبدال الأسنان المفقودة أو التالفة، وتشمل أطقم الأسنان الجزئية والكاملة. تتميز بإمكانية إزالتها وتنظيفها بسهولة، مما يوفر راحة للمريض واستعادة الوظائف الطبيعية للفم.";
  const paragraph5 =
    "قلع الأسنان هو إجراء جراحي يتم فيه إزالة السن من مكانه في الفك. يُستعمل عند وجود تسوس شديد، التهاب في اللثة، أو لتوسيع المسافة للأسنان التقويمية، كما يمكن أن يكون بسبب خراج أو أمراض اللثة المزمنة";
  let maxChars = 100;

  const data = [
    {
      id: 1,
      img: Photo1,
      title: "مداواة الاسنان اللبية",
      desc: paragraph1,
    },
    {
      id: 2,
      img: Photo2,
      title: "تعويضات سنية ثابتة",
      desc: paragraph2,
    },
    {
      id: 3,
      img: Photo3,
      title: "مداواة الاسنان المحافظة",
      desc: paragraph3,
    },
    {
      id: 4,
      img: Photo4,
      title: "تعويضات سنية متحركة",
      desc: paragraph4,
    },
    {
      id: 5,
      img: Photo5,
      title: "قلع الاسنان",
      desc: paragraph5,
    },
  ];

  // حالات useState لتحديد الصور المعروضة
  const [currentIndex, setCurrentIndex] = useState(0);

  // دالة للتنقل للعرض التالي
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  // دالة للتنقل للعرض السابق
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  // تحديد السلايد الحالي والسلايد التالي
  const currentSlide = data[currentIndex];
  const nextSlideItem = data[(currentIndex + 1) % data.length];

  // حالات useState لتوسيع النصوص
  const [expandedState, setExpandedState] = useState({
    1: false,
    2: false,
    3: false,
  });

  // دالة لتحديث الحالة الخاصة بكل بطاقة عند الضغط على الأزرار
  const toggleExpand = (id) => {
    setExpandedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className="Recent">
      <div className="Recent-Content">
        <h2>الخدمات التي نقدمها</h2>
        <p>بامكانك استكشاف كل ما نقدمه هنا</p>

        <div className="Recent-cards">
          <button onClick={prevSlide} className="btn btn-secondary prev-button">
            السابق
          </button>

          <div className="CardWrapper">
            {/* عرض الصورة الأولى */}
            <div className="Card">
              <img src={currentSlide.img} alt={currentSlide.title} />
              <h4>{currentSlide.title}</h4>
              <p>
                {currentSlide.desc.length > maxChars
                  ? expandedState[currentSlide.id]
                    ? currentSlide.desc
                    : currentSlide.desc.slice(0, maxChars) + "..."
                  : currentSlide.desc}
              </p>
              {currentSlide.desc.length > maxChars && (
                <>
                  <button
                    className="show-more"
                    onClick={() => toggleExpand(currentSlide.id)}
                    style={{
                      display: expandedState[currentSlide.id] ? "none" : "inline-block",
                    }}
                  >
                    <span>عرض المزيد</span>
                  </button>
                  <button
                    className="show-less"
                    onClick={() => toggleExpand(currentSlide.id)}
                    style={{
                      display: !expandedState[currentSlide.id] ? "none" : "inline-block",
                    }}
                  >
                    <span>عرض أقل</span>
                  </button>
                </>
              )}
            </div>

            {/* عرض الصورة الثانية */}
            <div className="Card">
              <img src={nextSlideItem.img} alt={nextSlideItem.title} />
              <h4>{nextSlideItem.title}</h4>
              <p>
                {nextSlideItem.desc.length > maxChars
                  ? expandedState[nextSlideItem.id]
                    ? nextSlideItem.desc
                    : nextSlideItem.desc.slice(0, maxChars) + "..."
                  : nextSlideItem.desc}
              </p>
              {nextSlideItem.desc.length > maxChars && (
                <>
                  <button
                    className="show-more"
                    onClick={() => toggleExpand(nextSlideItem.id)}
                    style={{
                      display: expandedState[nextSlideItem.id] ? "none" : "inline-block",
                    }}
                  >
                    <span>عرض المزيد</span>
                  </button>
                  <button
                    className="show-less"
                    onClick={() => toggleExpand(nextSlideItem.id)}
                    style={{
                      display: !expandedState[nextSlideItem.id] ? "none" : "inline-block",
                    }}
                  >
                    <span>عرض أقل</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* أزرار التنقل */}
          <div className="NavigationButtons">
            <button onClick={nextSlide} className="btn btn-primary next-button">
              التالي
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



/*import "./Recent.css";
import Photo1 from "./../../assets/pulptreatment.jpg";
import Photo2 from "./../../assets/Fixedprostheses.webp";
import Photo3 from "./../../assets/conservativetreatment.jpg";
import Photo4 from "./../../assets/removableprostheses.jpg";
import { useState } from "react";

export default function DarkVariantExample() {
  const paragraph1 =
    "مداواة الأسنان اللبية هي عملية علاجية تهدف إلى معالجة تسوس الأسنان اللبية عند الأطفال. يشمل العلاج إزالة الأنسجة المتضررة من التسوس، ثم تنظيف الأسنان وتعقيمها. بعد ذلك، يتم حشو الأسنان باستخدام مواد خاصة لضمان استعادة وظائفها وحمايتها من الألم أو العدوى، مما يساعد على الحفاظ على صحة الفم.";
  const paragraph2 =
    "التعويضات الثابتة هي أجهزة تستخدم لاستبدال الأسنان المفقودة أو التالفة، مثل التيجان والجسور. تُثبت هذه التعويضات بشكل دائم على الأسنان الأصلية أو الزرعات، مما يساعد في استعادة الوظائف الطبيعية للفم، مثل المضغ والكلام. تعتبر هذه الحلول فعالة لتحسين المظهر والجمالية وضمان الراحة للمريض على المدى الطويل.";
  const paragraph3 = "المداواة المحافظة تهدف إلى الحفاظ على الأسنان ومنع تسوسها";
  const paragraph4 =
    "تعويضات الأسنان المتحركة هي حلول طبية تستخدم لاستبدال الأسنان المفقودة أو التالفة، وتشمل أطقم الأسنان الجزئية والكاملة. تتميز بإمكانية إزالتها وتنظيفها بسهولة، مما يوفر راحة للمريض واستعادة الوظائف الطبيعية للفم.";
  let maxChars = 100;

  const data = [
    {
      id: 1,
      img: Photo1,
      title: "مداواة الاسنان اللبية",
      desc: paragraph1,
    },
    {
      id: 2,
      img: Photo2,
      title: "تعويضات سنية ثابتة",
      desc: paragraph2,
    },
    {
      id: 3,
      img: Photo3,
      title: "مداواة الاسنان المحافظة",
      desc: paragraph3,
    },
    {
      id: 4,
      img: Photo4,
      title: "تعويضات سنية متحركة",
      desc: paragraph4,
    },
  ];

  // حالات `useState` لتحديد الصور المعروضة
  const [currentIndex, setCurrentIndex] = useState(0);

  // دالة للتنقل للعرض التالي
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  // دالة للتنقل للعرض السابق
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  // تحديد السلايد الحالي والسلايد التالي
  const currentSlide = data[currentIndex];
  const nextSlideItem = data[(currentIndex + 1) % data.length];

  // حالات `useState` لتوسيع النصوص
  const [expandedState, setExpandedState] = useState({
    1: false,
    2: false,
    3: false,
  });

  // دالة لتحديث الحالة الخاصة بكل بطاقة عند الضغط على الأزرار
  const toggleExpand = (id) => {
    setExpandedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className="Recent">
      <div className="Recent-Content">
        <h2>الخدمات التي نقدمها</h2>
        <p>بامكانك استكشاف كل ما نقدمه هنا</p>

        <div className="Recent-cards">
        <button onClick={prevSlide} className="btn btn-secondary prev-button">
              السابق
            </button>
          <div className="CardWrapper">
           
            <div className="Card">
              <img src={currentSlide.img} alt={currentSlide.title} />
              <h4>{currentSlide.title}</h4>
              <p>
                {expandedState[currentSlide.id]
                  ? currentSlide.desc
                  : currentSlide.desc.slice(0, maxChars) + "..."}
              </p>
              <button
                className="show-more"
                onClick={() => toggleExpand(currentSlide.id)}
                style={{ display: expandedState[currentSlide.id] ? "none" : "inline-block" }}
              >
                <span>عرض المزيد</span>
              </button>
              <button
                className="show-less"
                onClick={() => toggleExpand(currentSlide.id)}
                style={{ display: !expandedState[currentSlide.id] ? "none" : "inline-block" }}
              >
                <span>عرض أقل</span>
              </button>
            </div>

            <div className="Card">
              <img src={nextSlideItem.img} alt={nextSlideItem.title} />
              <h4>{nextSlideItem.title}</h4>
              <p>
                {expandedState[nextSlideItem.id]
                  ? nextSlideItem.desc
                  : nextSlideItem.desc.slice(0, maxChars) + "..."}
              </p>
              <button
                className="show-more"
                onClick={() => toggleExpand(nextSlideItem.id)}
                style={{ display: expandedState[nextSlideItem.id] ? "none" : "inline-block" }}
              >
                <span>عرض المزيد</span>
              </button>
              <button
                className="show-less"
                onClick={() => toggleExpand(nextSlideItem.id)}
                style={{ display: !expandedState[nextSlideItem.id] ? "none" : "inline-block" }}
              >
                <span>عرض أقل</span>
              </button>
            </div>
          </div>

         
          <div className="NavigationButtons">
            
            <button onClick={nextSlide} className="btn btn-primary next-button">
              التالي
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
*/
/*
import "./Recent.css";
import Photo1 from "./../../assets/pulptreatment.jpg";
import Photo2 from "./../../assets/Fixedprostheses.webp";
import Photo3 from "./../../assets/conservativetreatment.jpg";
import Photo4 from "./../../assets/removableprostheses.jpg"
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';



export default function DarkVariantExample() {
  const paragraph1 ="مداواة الأسنان اللبية هي عملية علاجية تهدف إلى معالجة تسوس الأسنان اللبية عند الأطفال. يشمل العلاج إزالة الأنسجة المتضررة من التسوس، ثم تنظيف الأسنان وتعقيمها. بعد ذلك، يتم حشو الأسنان باستخدام مواد خاصة لضمان استعادة وظائفها وحمايتها من الألم أو العدوى، مما يساعد على الحفاظ على صحة الفم."
  const paragraph2 = "التعويضات الثابتة هي أجهزة تستخدم لاستبدال الأسنان المفقودة أو التالفة، مثل التيجان والجسور. تُثبت هذه التعويضات بشكل دائم على الأسنان الأصلية أو الزرعات، مما يساعد في استعادة الوظائف الطبيعية للفم، مثل المضغ والكلام. تعتبر هذه الحلول فعالة لتحسين المظهر والجمالية وضمان الراحة للمريض على المدى الطويل."
  const paragraph3 ="المداواة المحافظة تهدف إلى الحفاظ على الأسنان ومنع تسوسها"
  const paragraph4="تعويضات الأسنان المتحركة هي حلول طبية تستخدم لاستبدال الأسنان المفقودة أو التالفة، وتشمل أطقم الأسنان الجزئية والكاملة. تتميز بإمكانية إزالتها وتنظيفها بسهولة، مما يوفر راحة للمريض واستعادة الوظائف الطبيعية للفم"
let maxChars=100;
  
  const data = [
    {
      id: 1,
      img: Photo1,
      title: "مداواة الاسنان اللبية",
      desc: paragraph1,
    },
    {
      id: 2,
      img: Photo2,
      title: "تعويضات سنية ثابتة",
      desc: paragraph2,
    },
    {
      id: 3,
      img: Photo3,
      title: "مداواة الاسنان المحافظة",
      desc: paragraph3,
    },

    {
      id: 4,
      img: Photo4,
      title: "تعويضات سنية متحركة",
      desc: paragraph4,
    },
  ];

  // حالات `useState` لتوسيع النصوص
  const [expandedState, setExpandedState] = useState({
    1: false,
    2: false,
    3: false,
  });

  // دالة لتحديث الحالة الخاصة بكل بطاقة عند الضغط على الأزرار
  const toggleExpand = (id) => {
    setExpandedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <Carousel data-bs-theme="dark">
    <section className="Recent">
      <div className="Recent-Content">
        <h2>الخدمات التي نقدمها</h2>
        <p>بامكانك استكشاف كل ما نقدمه هنا </p>

        <div className="Recent-cards">
          {data.map((item) => {
            const { id, img, title, desc } = item;

            const isExpanded = expandedState[id];
            if (desc.length>maxChars){
            return (
              <div className="Card" key={id}>
                <img src={img}  />
                <h4>{title}</h4>
                <p>
                  {isExpanded ? desc : desc.slice(0, maxChars) + ". . ."}
                </p>
                <button
                  className="show-more"
                  onClick={() => toggleExpand(id)}
                  style={{ display: isExpanded ? "none" : "inline-block" }}
                >
                  <span className="showmore-focus"> عرض المزيد</span>
                </button>
                <button
                  className="show-less"
                  onClick={() => toggleExpand(id)}
                  style={{ display: !isExpanded ? "none" : "inline-block" }}
                >
                   <span  className="showless-focus"> عرض اقل </span>
                </button>
              </div>
            )}
            else if (desc.length<maxChars){
                console.log("hoodi")
                return (
                    <div className="Card" key={id}>
                      <img src={img}  />
                      <h4>{title}</h4>
                      <p>
                        {desc}
                      </p>
                    
                    </div>
                  )
            }
          })}
        </div>
      </div>
    </section>
    </Carousel>
  );

}

*/




/*الشرح:
toggleExpand: هذه هي الدالة التي يتم استدعاؤها عند النقر على زر "Show more" أو "Show less" في البطاقات. يتم تمرير id كوسيلة لتحديد أي بطاقة يجب تعديل حالتها (موسعة أو غير موسعة).

setExpandedState: هذه دالة من دوال useState التي يتم استخدامها لتحديث حالة المتغير expandedState. هذا المتغير يحتوي على حالة التوسيع لكل بطاقة (موسعة أو غير موسعة). expandedState هو كائن (object) حيث يتم تخزين حالة التوسيع لكل بطاقة باستخدام id كـ مفتاح (key).

(prevState): هذه هي الحالة السابقة expandedState قبل التحديث. في كل مرة يتم فيها تحديث الحالة باستخدام setExpandedState, يتم تمرير الحالة القديمة (السابقة) إلى الدالة.

...prevState: هذه هي طريقة لنسخ جميع القيم من الحالة السابقة prevState (باستخدام تقنية spread operator ...). هذه التقنية تضمن أننا نحتفظ بكل القيم القديمة في expandedState بينما نقوم بتعديل حالة البطاقة التي نريد تعديلها فقط.

[id]: !prevState[id]: هذا هو الجزء المهم:

[id]: هو مفتاح الكائن الذي يمثل البطاقة التي يتم النقر عليها. حيث id هو معرف البطاقة (مثل 1 أو 2 أو 3).
prevState[id]: هذه هي الحالة السابقة الخاصة بالبطاقة التي تم النقر عليها. إذا كانت البطاقة موسعة (true)، فسيكون prevState[id] هو true. وإذا لم تكن موسعة (false)، فسيكون prevState[id] هو false.
!prevState[id]: هذه هي عملية عكس القيمة. إذا كانت القيمة السابقة true (أي البطاقة كانت موسعة)، فإننا نعيدها إلى false (أي إخفاء النص). وإذا كانت القيمة false (أي البطاقة لم تكن موسعة)، فإننا نعيدها إلى true (أي توسيع النص).
إجمالاً: الدالة تقوم بتغيير حالة التوسيع للبطاقة التي تم النقر عليها فقط. إذا كانت البطاقة موسعة، فإنها ستصبح غير موسعة، والعكس صحيح.

مثال:
لنأخذ id = 1:

إذا كانت البطاقة الأولى (بـ id = 1) غير موسعة في البداية (expandedState[1] = false).
عند النقر على الزر "Show more"، سيتم تغيير حالة البطاقة إلى موسعة (expandedState[1] = true).
إذا كانت البطاقة موسعة، سيتم تقليصها مرة أخرى عند النقر على الزر "Show less".
النتيجة:
الدالة toggleExpand تعدل حالة التوسيع (الموسعة أو غير الموسعة) لكل بطاقة بناءً على id الخاص بالبطاقة التي تم النقر عليها، مما يجعل الكود ديناميكيًا ويمكنه التعامل مع عدد غير محدود من البطاقات بطريقة مرنة.
مثال في السياق:
إذا كان لديك 3 بطاقات (Trip in Indonesia, Trip in France, Trip in Egypt)، فإن كل بطاقة ستكون لها حالة موسعة مستقلة، ويمكنك توسيع أو تقليص النصوص الخاصة بكل بطاقة على حدة باستخدام هذه الدالة.

أرجو أن يكون الشرح واضحًا! إذا كنت بحاجة إلى مزيد من التفاصيل أو توضيح، لا تتردد في السؤال.



*/