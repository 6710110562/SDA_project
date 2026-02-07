/* ================== คำถาม ================== */

const questions = [

  {
    question: "เวลาคุณรู้สึกหลงทางในชีวิต สิ่งแรกที่คุณมักทำคืออะไร?",
    options: [
      { text: "ตั้งเป้าหมายใหม่ให้ชัด", plant: "sunflower" },
      { text: "อยู่เงียบๆ เพื่อทบทวนตัวเอง", plant: "cactus" },
      { text: "ฟังหัวใจตัวเองอย่างตั้งใจ", plant: "jasmine" },
      { text: "ขอคำแนะนำจากคนสำคัญ", plant: "reed" },
      { text: "ปล่อยให้ทุกอย่างค่อยๆ คลี่คลาย", plant: "bamboo" }
    ]
  },

  {
    question: "เมื่อคุณผิดหวังกับใครสักคน คุณมักเลือกวิธีไหน?",
    options: [
      { text: "เข้มแข็งและเดินหน้าต่อ", plant: "sunflower" },
      { text: "ถอยออกมาเก็บใจตัวเอง", plant: "cactus" },
      { text: "เสียใจลึกๆ แต่ไม่โทษใคร", plant: "jasmine" },
      { text: "พยายามเข้าใจอีกฝ่าย", plant: "reed" },
      { text: "ปล่อยวางและไม่ยึดติด", plant: "bamboo" }
    ]
  },

  {
    question: "สิ่งใดทำให้คุณรู้สึกว่าชีวิตมีความหมายมากที่สุด?",
    options: [
      { text: "การประสบความสำเร็จ", plant: "sunflower" },
      { text: "การยืนได้ด้วยตัวเอง", plant: "cactus" },
      { text: "การได้เป็นตัวเองอย่างแท้จริง", plant: "jasmine" },
      { text: "การได้ดูแลคนที่รัก", plant: "reed" },
      { text: "การใช้ชีวิตอย่างสงบ", plant: "bamboo" }
    ]
  },

  {
    question: "ในวันที่คุณอ่อนแอที่สุด คุณต้องการอะไรมากที่สุด?",
    options: [
      { text: "กำลังใจให้ลุกขึ้นใหม่", plant: "sunflower" },
      { text: "พื้นที่ส่วนตัว", plant: "cactus" },
      { text: "คนที่เข้าใจความรู้สึก", plant: "jasmine" },
      { text: "คนที่อยู่ข้างๆ ไม่ไปไหน", plant: "reed" },
      { text: "เวลาในการเยียวยา", plant: "bamboo" }
    ]
  },

  {
    question: "คุณกลัวอะไรมากที่สุดในชีวิต?",
    options: [
      { text: "ความล้มเหลว", plant: "sunflower" },
      { text: "การต้องพึ่งพาคนอื่น", plant: "cactus" },
      { text: "การสูญเสียตัวตน", plant: "jasmine" },
      { text: "การทำให้คนผิดหวัง", plant: "reed" },
      { text: "ความวุ่นวายไม่สิ้นสุด", plant: "bamboo" }
    ]
  },

  {
    question: "เมื่อคุณต้องเลือกระหว่าง ‘ตัวเอง’ กับ ‘คนอื่น’ คุณมักเลือกแบบไหน?",
    options: [
      { text: "เลือกสิ่งที่พาฉันไปข้างหน้า", plant: "sunflower" },
      { text: "เลือกปกป้องใจตัวเอง", plant: "cactus" },
      { text: "เลือกตามความรู้สึกจริง", plant: "jasmine" },
      { text: "เลือกไม่ให้ใครเจ็บ", plant: "reed" },
      { text: "เลือกทางที่สมดุลที่สุด", plant: "bamboo" }
    ]
  },

  {
    question: "คุณมักซ่อนอะไรไว้ไม่ให้คนอื่นเห็น?",
    options: [
      { text: "ความกดดันที่แบกไว้", plant: "sunflower" },
      { text: "ความเหงา", plant: "cactus" },
      { text: "ความเปราะบาง", plant: "jasmine" },
      { text: "ความเหนื่อยล้า", plant: "reed" },
      { text: "ความไม่แน่ใจในชีวิต", plant: "bamboo" }
    ]
  },

  {
    question: "หากย้อนเวลากลับไปได้ คุณอยากบอกตัวเองว่าอะไร?",
    options: [
      { text: "อย่ากลัวที่จะฝันใหญ่", plant: "sunflower" },
      { text: "ไม่ต้องเข้มแข็งตลอดก็ได้", plant: "cactus" },
      { text: "ความรู้สึกของเธอสำคัญนะ", plant: "jasmine" },
      { text: "อย่าลืมดูแลตัวเองบ้าง", plant: "reed" },
      { text: "ทุกอย่างจะผ่านไป", plant: "bamboo" }
    ]
  },

  {
    question: "อะไรทำให้คุณยังยิ้มได้ แม้ในวันที่เหนื่อยมาก?",
    options: [
      { text: "ความหวังในอนาคต", plant: "sunflower" },
      { text: "ความเข้มแข็งของตัวเอง", plant: "cactus" },
      { text: "ความทรงจำดีๆ", plant: "jasmine" },
      { text: "คนที่รักอยู่ข้างๆ", plant: "reed" },
      { text: "การยอมรับความเป็นจริง", plant: "bamboo" }
    ]
  },

  {
    question: "ลึกๆ แล้ว คุณต้องการอะไรจากชีวิตมากที่สุด?",
    options: [
      { text: "การเติบโตและยอมรับ", plant: "sunflower" },
      { text: "อิสระและความมั่นคง", plant: "cactus" },
      { text: "ความเข้าใจและการยอมรับ", plant: "jasmine" },
      { text: "ความรักที่มั่นคง", plant: "reed" },
      { text: "ความสงบในใจ", plant: "bamboo" }
    ]
  }

];


/* ================== คะแนน ================== */

let score = {
  sunflower:0,
  cactus:0,
  jasmine:0,
  reed:0,
  bamboo:0
};


let current = 0;
let history = [];


/* ================== แสดงคำถาม ================== */

function showQuestion(){

  const q = questions[current];

  // แสดงคำถาม
  document.getElementById("question").innerText = q.question;


  // กล่องคำตอบ
  const box = document.getElementById("answers");

  // ล้างของเก่า
  box.innerHTML = "";


  // สร้างปุ่มจาก options
  q.options.forEach((opt, i) => {

    const btn = document.createElement("button");

    btn.className = "choice";

    btn.onclick = () => answer(opt.plant, btn);


    btn.innerHTML = `
      <span class="label">${String.fromCharCode(65+i)}</span>
      ${opt.text}
    `;

    box.appendChild(btn);

  });

}


/* ================== เลือกคำตอบ ================== */

function answer(type, selectedBtn){
    // เอาสีออกจากทุกปุ่มก่อน
  const allChoices = document.querySelectorAll(".choice");
  allChoices.forEach(btn => {
    btn.classList.remove("selected");
  });

  // ใส่สีให้ปุ่มที่เลือก
  selectedBtn.classList.add("selected");

  // ถ้าเคยตอบข้อนี้แล้ว ให้ลบคะแนนเก่า
  if(history[current]){
    score[history[current]]--;
  }

  // เก็บคำตอบ
  history[current] = type;

  // เพิ่มคะแนนใหม่
  score[type]++;
}


/* ================== ข้อถัดไป ================== */

function nextQuestion(){

  current++;

  if(current < questions.length){
    showQuestion();
  }else{
    finish();
  }

}
function backQuestion(){

  if(current === 0) return;

  current--;

  showQuestion();

}



/* ================== จบเกม ================== */

function finish(){

  let max = "sunflower";

  for(let k in score){
    if(score[k] > score[max]){
      max = k;
    }
  }

  localStorage.setItem("result", max);

  fetch("http://localhost:3000/api/save", {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "x-api-key":"123456"
    },
    body: JSON.stringify({ tree: max })
  });

  location.href="result.html";
}


/* ================== เริ่มเกม ================== */

showQuestion();


