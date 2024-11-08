// Questions array (can be dynamic or hard-coded)

const quizQuestions = [
    {
        text: "In strategic planning and business analysis, what does the acronym 'SWOT' stand for?",
        translatedText: "في التخطيط الاستراتيجي وتحليل الأعمال، ماذا يعني اختصار 'SWOT'؟",
        answers: ["Strengths, Weaknesses, Opportunities, Threats", "Strategies, Workflows, Objectives, Timelines", "Sustainability, Wealth, Objectives, Trends", "Systematic, Wide-reaching, Operations, Tasks"],
        translatedAnswers: ["نقاط القوة، نقاط الضعف، الفرص، التهديدات", "الاستراتيجيات، تدفقات العمل، الأهداف، الجداول الزمنية", "الاستدامة، الثروة، الأهداف، الاتجاهات", "منهجي، واسع الانتشار، العمليات، المهام"],
        correct: 0
    },
    {
        text: "In the SMART framework for setting goals, what does 'ART' stand for?",
        translatedText: "في إطار SMART لوضع الأهداف، ماذا يعني 'ART'؟",
        answers: ["Aspirational, Relevant, Timely", "Attainable, Realistic, Timeline", "Ambitious, Realistic, Tangible", "Appropriate, Realistic, Targeted"],
        translatedAnswers: ["طموح، ذو صلة، في الوقت المناسب", "قابل للتحقيق، واقعي، إطار زمني", "طموح، واقعي، ملموس", "مناسب، واقعي، مستهدف"],
        correct: 0
    },
    {
        text: "A pregnant woman, who had been a smoker, has initiated the use of smoking cessation medication in the form of nicotine gum as part of her efforts to quit smoking during her pregnancy. In the Transtheoretical Model of Change, which stage is she in?",
        translatedText: "سيدة حامل كانت مدخنة بدأت في استخدام علاج الإقلاع عن التدخين على شكل علكة النيكوتين كجزء من جهودها للتوقف عن التدخين خلال حملها. في نموذج التغيير التحفيزي، في أي مرحلة هي الآن؟",
        answers: ["Precontemplation", "Contemplation", "Preparation", "Action"],
        translatedAnswers: ["ما قبل التفكير", "التفكير", "التحضير", "العمل"],
        correct: 3
    },
    {
        text: "The pH level of water is:",
        translatedText: "مستوى pH للماء هو:",
        answers: ["pH 5", "pH 7", "pH 9", "pH 11"],
        translatedAnswers: ["5", "7", "9", "11"],
        correct: 1
    },
    {
        text: "Who first discovered germ theory?",
        translatedText: "من أول من اكتشف نظرية الجراثيم؟",
        answers: ["Robert Koch", "Snow", "Pasteur"],
        translatedAnswers: ["روبرت كوخ", "سنون", "باستور"],
        correct: 0
    },
    {
        text: "A person is planning to create a water facility, and the initial water quality assessment indicates a pH level of 7, nitrate concentration of 25 mg/L, and total dissolved solids (TDS) of 2000 mg/L. What action should this person consider to improve water quality?",
        translatedText: "شخص يخطط لإنشاء منشأة مائية، وتقييم جودة المياه الأولي يشير إلى مستوى pH قدره 7، وتركيز النترات 25 ملغم/لتر، والمجموع الكلي للمواد الذائبة (TDS) 2000 ملغم/لتر. ما الإجراء الذي يجب عليه اتخاذه لتحسين جودة المياه؟",
        answers: ["Increase the pH level to 8", "Reduce the nitrate concentration to 10 mg/L", "Reduce TDS to 1000 mg/L", "Increase TDS to 3000 mg/L"],
        translatedAnswers: ["زيادة مستوى pH إلى 8", "تقليل تركيز النترات إلى 10 ملغم/لتر", "تقليل TDS إلى 1000 ملغم/لتر", "زيادة TDS إلى 3000 ملغم/لتر"],
        correct: 2
    },
    {
        text: "The first country to implement public health in the nineteenth century?",
        translatedText: "ما هي أول دولة نفذت الصحة العامة في القرن التاسع عشر؟",
        answers: ["USA", "Italy", "Canada", "England"],
        translatedAnswers: ["الولايات المتحدة", "إيطاليا", "كندا", "إنجلترا"],
        correct: 3
    },
    {
        text: "When a public hospital sends an ambulance to rescue those injured from a natural disaster, which part of the disaster management cycle is this?",
        translatedText: "عندما يرسل مستشفى عام سيارة إسعاف لإنقاذ المصابين في كارثة طبيعية، أي جزء من دورة إدارة الكوارث هو هذا؟",
        answers: ["Mitigation", "Preparedness", "Response", "Recovery"],
        translatedAnswers: ["التخفيف", "الاستعداد", "الاستجابة", "التعافي"],
        correct: 2
    },
    {
        text: "A woman reports for vaccination against tetanus only 25 days before delivery and has not received the first dose. What will you do?",
        translatedText: "تقدم سيدة للتطعيم ضد الكزاز قبل 25 يومًا فقط من الولادة ولم تتلقَ الجرعة الأولى. ماذا ستفعل؟",
        answers: ["Give anti-tetanus immunoglobulin", "Give two doses of tetanus toxoid with 2 weeks interval", "Advise appropriate antibiotic course during delivery", "Give one dose of tetanus toxoid and advise the second dose after delivery"],
        translatedAnswers: ["إعطاء غلوبولين مناعي ضد الكزاز", "إعطاء جرعتين من توكسيد الكزاز بفاصل أسبوعين", "نصيحة بجرعة مناسبة من المضاد الحيوي أثناء الولادة", "إعطاء جرعة واحدة من توكسيد الكزاز وتقديم النصيحة للجرعة الثانية بعد الولادة"],
        correct: 3
    },
    {
        text: "Which vaccine is typically required for international travel and may be documented on an international health certificate?",
        translatedText: "أي لقاح يكون مطلوبًا عادةً للسفر الدولي ويمكن توثيقه على شهادة صحية دولية؟",
        answers: ["Polio vaccine", "Tetanus vaccine", "Yellow fever vaccine", "Hepatitis B vaccine"],
        translatedAnswers: ["لقاح شلل الأطفال", "لقاح الكزاز", "لقاح الحمى الصفراء", "لقاح التهاب الكبد B"],
        correct: 2
    },
    {
        text: "A person planning to embark on a pilgrimage receives the inactivated influenza vaccine and inquires about the duration it will take for the vaccine to become effective. How long does it usually take for the vaccine to become effective?",
        translatedText: "شخص يخطط لأداء الحج يتلقى لقاح الإنفلونزا المعطل ويسأل عن المدة التي يستغرقها اللقاح ليصبح فعالاً. كم يستغرق عادةً؟",
        answers: ["About 24 hours", "Approximately 1 week", "Around 2 weeks", "It offers immediate protection"],
        translatedAnswers: ["حوالي 24 ساعة", "حوالي أسبوع واحد", "حوالي أسبوعين", "يوفر حماية فورية"],
        correct: 2
    },
    {
        text: "Incidence rate of a disease in women is five times higher than in men, but prevalence in both genders is the same. What does this imply?",
        translatedText: "معدل حدوث مرض لدى النساء أعلى بخمس مرات من الرجال، لكن الانتشار متساوٍ في كلا الجنسين. ماذا يعني ذلك؟",
        answers: ["The case fatality rate increases in women", "The case fatality rate decreases in women", "The crude mortality rate increases in women", "The crude mortality rate decreases in women"],
        translatedAnswers: ["معدل الوفيات يزيد لدى النساء", "معدل الوفيات يقل لدى النساء", "معدل الوفيات الخام يزيد لدى النساء", "معدل الوفيات الخام يقل لدى النساء"],
        correct: 1
    },
    {
        text: "What is the appropriate personal protective equipment (PPE) when disposing of waste from a patient with diarrhea?",
        translatedText: "ما هي معدات الحماية الشخصية المناسبة عند التخلص من فضلات مريض يعاني من الإسهال؟",
        answers: ["Gloves", "Gloves and a gown", "Gloves and a mask", "Gloves, gown, mask, and eye protection"],
        translatedAnswers: ["القفازات", "القفازات والرداء", "القفازات والقناع", "القفازات، الرداء، القناع وحماية العينين"],
        correct: 3
    },

    {
        text: "A dental surgeon in a rural health center reports an increase in dental caries among children in the area. What preventive measure should he suggest to the health authorities?",
        translatedText: "طبيب أسنان في مركز صحي ريفي يبلغ عن زيادة في تسوس الأسنان بين الأطفال في المنطقة. ما الإجراء الوقائي الذي يجب أن يقترحه على السلطات الصحية؟",
        answers: ["Fluoridation of water", "Chlorination of water", "Use of bacterial filter", "Use of boiled water"],
        translatedAnswers: ["إضافة الفلورايد إلى الماء", "كلورة الماء", "استخدام مرشح بكتيري", "استخدام الماء المغلي"],
        correct: 0
    },
    {
        text: "Which gas is responsible for the depletion of the ozone layer?",
        translatedText: "أي غاز مسؤول عن استنفاد طبقة الأوزون؟",
        answers: ["Carbon dioxide", "Methane", "Chlorofluorocarbon", "Sulphur dioxide"],
        translatedAnswers: ["ثاني أكسيد الكربون", "الميثان", "الكلوروفلوروكربون", "ثاني أكسيد الكبريت"],
        correct: 2
    },
    {
        text: "Who is credited as one of the earliest pioneers in recognizing the effects of the environment on health?",
        translatedText: "من يعتبر أحد الرواد الأوائل في إدراك تأثير البيئة على الصحة؟",
        answers: ["Hippocrates", "John Snow", "Florence Nightingale"],
        translatedAnswers: ["أبقراط", "جون سنو", "فلورنس نايتينجيل"],
        correct: 0
    },
    {
        text: "One of the most prevalent ways of AIDS transmission worldwide is through heterosexual contact. What form of transmission is this?",
        translatedText: "إحدى أكثر طرق انتقال الإيدز انتشارًا في جميع أنحاء العالم هو الاتصال الجنسي بين الجنسين. ما شكل هذا الانتقال؟",
        answers: ["Man to woman", "Woman to man", "Pregnant woman to man"],
        translatedAnswers: ["رجل إلى امرأة", "امرأة إلى رجل", "امرأة حامل إلى رجل"],
        correct: 0
    },
    {
        text: "If there is not much organic matter present in the water supply, what is the expected range for the Biochemical Oxygen Demand (BOD) level in mg/L?",
        translatedText: "إذا لم يكن هناك الكثير من المواد العضوية في إمدادات المياه، فما هو النطاق المتوقع لمستوى الطلب على الأكسجين البيوكيميائي (BOD) بالمليغرام/لتر؟",
        answers: ["1-2 mg/L", "3-5 mg/L", "6-9 mg/L", "More than 9 mg/L"],
        translatedAnswers: ["1-2 ملغم/لتر", "3-5 ملغم/لتر", "6-9 ملغم/لتر", "أكثر من 9 ملغم/لتر"],
        correct: 0
    },
    {
        text: "A firefighter enters a burning house without wearing protective clothing. What is the firefighter most likely at risk for?",
        translatedText: "رجل إطفاء يدخل منزلًا يحترق دون ارتداء ملابس واقية. ما هو الخطر الذي من المرجح أن يتعرض له؟",
        answers: ["Sunburn", "Hypothermia", "Inhalation of toxic gas", "Sprained ankle"],
        translatedAnswers: ["حروق الشمس", "انخفاض درجة حرارة الجسم", "استنشاق غاز سام", "التواء الكاحل"],
        correct: 2
    },
    {
        text: "If a tourist visitor from Italy tests positive for COVID-19 upon arrival in Saudi Arabia, where should he be quarantined?",
        translatedText: "إذا ثبتت إصابة زائر سياحي من إيطاليا بفيروس COVID-19 عند وصوله إلى السعودية، أين يجب عزله؟",
        answers: ["Italy", "Saudi Arabia", "Not subject to quarantine", "None of the above"],
        translatedAnswers: ["إيطاليا", "السعودية", "غير خاضع للحجر", "لا شيء مما سبق"],
        correct: 1
    },
    {
        text: "A person opens a Twitter space to educate the public about a specific disease, and attendees ask questions at the end. What type of communication does this represent?",
        translatedText: "شخص يفتح مساحة على تويتر لتثقيف الجمهور حول مرض معين، ويسأل الحاضرون الأسئلة في النهاية. ما نوع هذا التواصل؟",
        answers: ["Feedback", "Noise", "Sender", "Receiver"],
        translatedAnswers: ["تغذية راجعة", "ضوضاء", "مرسل", "مستقبل"],
        correct: 0
    },
    {
        text: "In a village, the annual demand for water per person is 1456 liters. What does this measurement represent?",
        translatedText: "في قرية، الطلب السنوي على المياه لكل شخص هو 1456 لتر. ماذا يمثل هذا القياس؟",
        answers: ["Water stress", "Water scarcity"],
        translatedAnswers: ["الإجهاد المائي", "ندرة المياه"],
        correct: 1
    },
    {
        text: "What is the best way to dispose of solid waste without polluting the environment?",
        translatedText: "ما هي أفضل طريقة للتخلص من النفايات الصلبة دون تلويث البيئة؟",
        answers: ["Recycling", "Landfill disposal", "Dumping in rivers", "Open burning"],
        translatedAnswers: ["إعادة التدوير", "الطمر في مكب النفايات", "التخلص منها في الأنهار", "الحرق المفتوح"],
        correct: 0
    },
    {
        text: "If a person participates in a clinical trial without consent, who should they contact to report this violation?",
        translatedText: "إذا شارك شخص في تجربة سريرية دون موافقته، إلى من يجب أن يتواصل للإبلاغ عن هذا الانتهاك؟",
        answers: ["Ministry of Health", "Public Health Authorities", "Health Consulate", "Food and Drug Authority"],
        translatedAnswers: ["وزارة الصحة", "السلطات الصحية العامة", "القنصلية الصحية", "هيئة الغذاء والدواء"],
        correct: 3
    },
    {
        text: "A patient who works as a floor cleaner complains of swelling in his feet. What would be the most appropriate recommendation?",
        translatedText: "مريض يعمل كمنظف أرضيات يشكو من تورم في قدميه. ما هو الاقتراح الأنسب؟",
        answers: ["Advise the patient to wash his feet with water", "Suggest that he wash his feet while running", "Recommend wearing protective shoes or clothing for his feet"],
        translatedAnswers: ["نصحه بغسل قدميه بالماء", "نصيحته بغسل قدميه أثناء الجري", "التوصية بارتداء أحذية أو ملابس واقية لقدميه"],
        correct: 2
    },
    {
        text: "A research study from 1957 to 1996 reviews historical hospital records to investigate the relationship between two diseases. What type of study design best describes this research?",
        translatedText: "تدرس دراسة بحثية من عام 1957 إلى 1996 سجلات المستشفيات التاريخية للتحقيق في العلاقة بين مرضين. ما هو أفضل وصف لهذا التصميم البحثي؟",
        answers: ["Prospective Cohort Study", "Retrospective Cohort Study", "Case-Control Study", "Cross-Sectional Study"],
        translatedAnswers: ["دراسة جماعية مستقبلية", "دراسة جماعية استعادية", "دراسة حالة-شاهد", "دراسة مقطعية"],
        correct: 1
    } ,


    {
        text: "In the PICO framework, what does 'P' stand for?",
        translatedText: "في إطار PICO، ماذا يعني 'P'؟",
        answers: ["Population", "Procedure", "Prescription", "Prognosis"],
        translatedAnswers: ["السكان", "الإجراء", "الوصفة", "التشخيص"],
        correct: 0
    },
    {
        text: "A worker frequently handles chemical materials without wearing protective gloves. What specific health risk is he at risk of developing?",
        translatedText: "عامل يتعامل بشكل متكرر مع مواد كيميائية دون ارتداء قفازات واقية. ما هو الخطر الصحي الذي يمكن أن يتعرض له؟",
        answers: ["Contact dermatitis", "Respiratory conditions", "Noise-induced hearing loss", "Allergic rhinitis"],
        translatedAnswers: ["التهاب الجلد التماسي", "مشاكل تنفسية", "فقدان السمع الناجم عن الضوضاء", "التهاب الأنف التحسسي"],
        correct: 0
    },
    {
        text: "What is the first action you should take after sustaining a needle stick injury?",
        translatedText: "ما هو أول إجراء يجب اتخاذه بعد الإصابة بوخز الإبرة؟",
        answers: ["Tell the supervisor", "Put your hand under running water", "Apply a bandage", "Elevate the injured area"],
        translatedAnswers: ["إبلاغ المشرف", "وضع يدك تحت الماء الجاري", "تطبيق ضمادة", "رفع المنطقة المصابة"],
        correct: 1
    },
    {
        text: "A hospital aims to reduce the length of stay for patients in the Intensive Care Unit (ICU). Why would the hospital implement such a program?",
        translatedText: "يهدف المستشفى إلى تقليل مدة بقاء المرضى في وحدة العناية المركزة. لماذا ينفذ المستشفى مثل هذا البرنامج؟",
        answers: ["Efficiency", "To take more patients", "To increase revenue", "To improve patient comfort and experience"],
        translatedAnswers: ["الكفاءة", "استقبال المزيد من المرضى", "زيادة الإيرادات", "تحسين راحة وتجربة المرضى"],
        correct: 0
    },
    {
        text: "The health surveillance system in Saudi Arabia is known as:",
        translatedText: "نظام المراقبة الصحية في المملكة العربية السعودية يعرف بـ:",
        answers: ["Public Health Monitoring Network", "Health Surveillance Authority", "Health Information System", "Health Electronic Surveillance Network"],
        translatedAnswers: ["شبكة مراقبة الصحة العامة", "هيئة المراقبة الصحية", "نظام المعلومات الصحية", "شبكة المراقبة الإلكترونية الصحية"],
        correct: 3
    },
    {
        text: "A person planning to visit a malaria-endemic area considers antimalarial medication. Which medication is most suitable?",
        translatedText: "شخص يخطط لزيارة منطقة ينتشر فيها الملاريا. ما هو الدواء المضاد للملاريا الأنسب؟",
        answers: ["Chloroquine", "Mefloquine", "Primaquine", "Atovaquone-proguanil (Malarone)"],
        translatedAnswers: ["كلوروكين", "ميفلوجين", "بريماكوين", "أتوفاكون-بروغوانيل (مالارون)"],
        correct: 3
    },
    {
        text: "In a population with 50 people all having a hemoglobin level of 14g/dl, what is the standard deviation?",
        translatedText: "في مجموعة تتكون من 50 شخصًا، جميعهم لديهم مستوى هيموجلوبين قدره 14 غرام/ديسيلتر. ما هو الانحراف المعياري؟",
        answers: ["0", "1", "-1", "2"],
        translatedAnswers: ["0", "1", "-1", "2"],
        correct: 0
    },
    {
        text: "Which statistical measure is commonly used to identify extreme values in a dataset?",
        translatedText: "ما هو المؤشر الإحصائي الذي يستخدم عادةً لتحديد القيم المتطرفة في مجموعة بيانات؟",
        answers: ["Outliers", "Quartile", "Standard Deviation", "Confidence Interval"],
        translatedAnswers: ["القيم المتطرفة", "الربع", "الانحراف المعياري", "فترة الثقة"],
        correct: 0
    },
    {
        text: "In epidemiology, while the classic triangle includes host, agent, and environment, which additional component is included in a more comprehensive model?",
        translatedText: "في علم الأوبئة، بينما يشمل المثلث الكلاسيكي المضيف والعامل والبيئة، ما هو المكون الإضافي في نموذج أكثر شمولاً؟",
        answers: ["Vector", "Portal of Exit", "Reservoir", "Susceptible Host"],
        translatedAnswers: ["الناقل", "بوابة الخروج", "المستودع", "المضيف القابل للعدوى"],
        correct: 0
    },
    {
        text: "A researcher reviews historical records from 2008 to 2012 to assess a health event in a specific population. What measure is he most likely to use?",
        translatedText: "باحث يراجع السجلات التاريخية من عام 2008 إلى 2012 لتقييم حدث صحي في مجموعة معينة. ما هو القياس الذي من المرجح أن يستخدمه؟",
        answers: ["Incident", "Point prevalence", "Period prevalence", "Prevalence ratio"],
        translatedAnswers: ["حادثة", "انتشار النقطة", "انتشار الفترة", "نسبة الانتشار"],
        correct: 2
    },
    {
        text: "A patient who has diabetes, high blood pressure, and a BMI of 27 is advised to manage his BMI. What is the best recommendation?",
        translatedText: "مريض يعاني من السكري وارتفاع ضغط الدم ولديه مؤشر كتلة جسم 27. ما هي التوصية الأفضل له لإدارة مؤشر كتلة الجسم؟",
        answers: ["Adjust diet and exercise regularly", "Start medication for all conditions", "Undergo weight loss surgery", "Increase carbohydrate intake"],
        translatedAnswers: ["تعديل النظام الغذائي وممارسة الرياضة بانتظام", "بدء العلاج الدوائي لكل الحالات", "الخضوع لجراحة لفقدان الوزن", "زيادة تناول الكربوهيدرات"],
        correct: 0
    },
    {
        text: "In a right-skewed (positively skewed) distribution, how does the value of the mean typically compare to the median and mode?",
        translatedText: "في التوزيع المنحرف يميناً (منحرف إيجابياً)، كيف يكون متوسط القيمة مقارنة بالوسيط والمنوال؟",
        answers: ["Mean > Median", "Median > Mean", "Median = Mean", "Mode > Median"],
        translatedAnswers: ["المتوسط > الوسيط", "الوسيط > المتوسط", "الوسيط = المتوسط", "المنوال > الوسيط"],
        correct: 0
    },
    {
        text: "Dr. Rodriguez, a public health specialist, is working on a project to improve maternal and child health in a resource-limited region. What administrative function does her role primarily illustrate?",
        translatedText: "الدكتورة رودريغيز، اختصاصية الصحة العامة، تعمل في مشروع لتحسين صحة الأم والطفل في منطقة محدودة الموارد. ما هي الوظيفة الإدارية التي توضحها مهمتها بشكل رئيسي؟",
        answers: ["Planning", "Organizing", "Leading", "Controlling"],
        translatedAnswers: ["التخطيط", "التنظيم", "القيادة", "الرقابة"],
        correct: 3
    }


];


let currentQuestionIndex = 0;
let score = 0;
let answered = false; // To track if the question was already answered
let isTranslated = false; // Flag for toggling translation

// Function to load the next question
function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Clear previous content
    answered = false; // Reset answered flag

    const question = quizQuestions[currentQuestionIndex];

    // Create question element
    const questionText = document.createElement('h3');
    questionText.textContent = `${currentQuestionIndex + 1}. ${isTranslated ? question.translatedText : question.text}`;
    quizContainer.appendChild(questionText);

    // Create answers list
    const answersList = document.createElement('ul');
    answersList.classList.add('answers');

    (isTranslated ? question.translatedAnswers : question.answers).forEach((answer, index) => {
        const answerItem = document.createElement('li');

        const answerLabel = document.createElement('label');
        answerLabel.textContent = answer;

        const answerInput = document.createElement('input');
        answerInput.type = 'radio';
        answerInput.name = 'answer';
        answerInput.value = index;
        answerInput.addEventListener('click', () => handleAnswerSelection(index)); // Add event listener for selection

        answerItem.appendChild(answerInput);
        answerItem.appendChild(answerLabel);
        answersList.appendChild(answerItem);
    });

    quizContainer.appendChild(answersList);

    // Show the "Next" button but keep it disabled until an answer is selected
    const nextButton = document.getElementById('next-btn');
    nextButton.disabled = true; // Initially disabled
    nextButton.classList.remove('hidden');

    // Add "Translate" button
    const translateButton = document.createElement('button');
    translateButton.textContent = isTranslated ? 'Show in English' : 'Show in Arabic';
    translateButton.addEventListener('click', toggleTranslation);
    quizContainer.appendChild(translateButton);
}

// Function to handle answer selection
function handleAnswerSelection(selectedIndex) {
    if (!answered) {
        answered = true; // Mark question as answered

        const correctAnswer = quizQuestions[currentQuestionIndex].correct;

        // Highlight correct and incorrect answers
        highlightAnswers(correctAnswer, selectedIndex);

        // Enable the "Next" button after selection
        document.getElementById('next-btn').disabled = false;

        // If the selected answer is correct, increase the score
        if (selectedIndex === correctAnswer) {
            score++;
        }
    }
}

// Function to toggle translation
function toggleTranslation() {
    isTranslated = !isTranslated;
    loadQuestion();
}

// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to highlight correct and incorrect answers
function highlightAnswers(correctAnswer, selectedAnswer) {
    const answers = document.querySelectorAll('input[name="answer"]');
    
    answers.forEach((answerInput, index) => {
        const answerLabel = answerInput.nextSibling;

        if (index === correctAnswer) {
            // Turn correct answer green
            answerLabel.style.color = 'green';
        } else if (index === selectedAnswer) {
            // Turn incorrect answer red
            answerLabel.style.color = 'red';
        }
    });
}

// Function to show the final result
function showResult() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Clear quiz content

    const resultText = document.getElementById('result');
    resultText.textContent = `You scored ${score} out of ${quizQuestions.length}`;
    resultText.classList.remove('hidden');

    // Hide the "Next" button
    document.getElementById('next-btn').classList.add('hidden');
}

// Load the first question when the page loads
window.onload = loadQuestion;
