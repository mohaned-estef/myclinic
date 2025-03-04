import React, { useState } from "react";
import "./Hero.css";

export default function Hero({ title, btn,img}) {
  const [typedText, setTypedText] = useState(""); // لتخزين النص الذي سيتم كتابته
  const [isTyping, setIsTyping] = useState(false); // حالة للتحقق إذا كان الكتابة جارية

  const textToType = " حيثما تلتفت ستجدنا"  ; // النص الذي سيتم كتابته

  // دالة لكتابة النص حرفًا بحرف
 function startTyping () {
    setTypedText("")
    if (isTyping && typedText ==""){
      console.log("how are you")
    }; // إذا كانت الكتابة جارية بالفعل، لا نبدأ من جديد.
    
    setIsTyping(true); // تأكيد أن الكتابة بدأت
    let index = 0;
    
    const interval = setInterval(() => {
      setTypedText((prev) => prev + textToType[index]); // إضافة الحرف التالي إلى النص
      index += 1;
      if (index == textToType.length-1) {
        clearInterval(interval); // إيقاف الكتابة بعد الوصول للنهاية
        setIsTyping(false);

        
         // الكتابة انتهت
        
        }
    }, 200); // تأخير الكتابة بين كل حرف والآخر
  };

  return (
    <section className={img == "Hero2" ? "Hero2" : "Hero"}>
      <div className="Hero-content">
        <h1>{title}</h1>

        <p>{typedText }</p> {/* تأكد من أن النص لا يحتوي على undefined */}

        {btn && <button onClick={startTyping}>ابدأ الان</button>}
      </div>
    </section>
  );
}
