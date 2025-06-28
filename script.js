const translations = {
    en: {
        "title": "What is Naari Nivesh",
        "para1": "Naari Nivesh is a women-focused platform dedicated to empowering women financially by helping them make informed decisions about investment, business opportunities, and fraud protection.Whether you're looking to start a small business, invest your savings, or stay safe from online scams — Nari Nivesh is here to guide you in simple, local language that you can trust.",
        "para2": "<strong>Nari Nivesh</strong> is a financial guidance platform created especially for women. It helps users understand where to invest, how to start a business, and how to protect themselves from scams. With support in Hindi and english , it’s designed to be easy and comfortable for every woman — even if you’re new to finance or the internet. <br><br> Just select your language, answer a few basic questions, and Nari Nivesh will guide you with the right advice. We also provide voice support and auto-filled government scheme forms to save your time and effort. <br><br><strong>Login now</strong> to access personalized help, investment plans, business tips, and scam protection— all in one place. Your journey to financial independence starts here!",
        "heading": "Empowering Women Financially"
    },
    hi: {
        "title": "नारी निवेश क्या है?",
        "para1": "नारी निवेश, एक महिला-केंद्रित प्लेटफ़ॉर्म है, जिसका उद्देश्य महिलाओं को आर्थिक रूप से सशक्त बनाना है। यह उन्हें निवेश, व्यवसाय के अवसरों और धोखाधड़ी से सुरक्षा से संबंधित सही और सूचित निर्णय लेने में मदद करता है। चाहे आप एक छोटा व्यवसाय शुरू करना चाहती हों, अपनी बचत को निवेश करना चाहती हों, या ऑनलाइन ठगी से सुरक्षित रहना चाहती हों — नारी निवेश आपकी मदद के लिए तैयार है, वह भी आपकी अपनी सरल और स्थानीय भाषा में, जिस पर आप भरोसा कर सकें|",
        "para2": "<strong>नारी निवेश</strong> एक ऐसा वित्तीय मार्गदर्शन प्लेटफ़ॉर्म है जो विशेष रूप से महिलाओं के लिए बनाया गया है। यह उपयोगकर्ताओं को यह समझने में मदद करता है कि कहां निवेश करना है, व्यवसाय कैसे शुरू करना है, और धोखाधड़ी से खुद को कैसे सुरक्षित रखना है। हिंदी और अंग्रेज़ी भाषा में उपलब्ध यह प्लेटफ़ॉर्म हर महिला के लिए सरल और सहज बनाया गया है — चाहे आप वित्तीय जानकारी में नयी ही क्यों न हों। <br><br> बस अपनी भाषा चुनें, कुछ बुनियादी सवालों के जवाब दें, और नारी निवेश आपको सही सलाह के साथ मार्गदर्शन करेगा। हम समय और प्रयास बचाने के लिए वॉइस सपोर्ट और सरकारी योजनाओं के ऑटो-फॉर्म जैसी सुविधाएं भी प्रदान करते हैं। <br><br> <strong>लॉगिन करें</strong> और पाएं व्यक्तिगत सहायता, निवेश योजनाएं, व्यवसाय सुझाव और धोखाधड़ी से सुरक्षा — ये सब एक ही स्थान पर। आपकी आर्थिक आत्मनिर्भरता की यात्रा यहीं से शुरू होती है!",
        "heading": "महिलाओं को आर्थिक रूप से सशक्त बनाना"
    }
};

function changeLanguage() {
    const lang = document.getElementById("language").value;
    for (let key in translations[lang]) {
        const element = document.getElementById(key);
        if (element) {
            if (translations[lang][key].includes('<') || translations[lang][key].includes('>')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    }
}
