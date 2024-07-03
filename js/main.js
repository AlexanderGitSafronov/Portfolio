

document.addEventListener('DOMContentLoaded', ()=>{
  const preloader = document.querySelector('#preloader')
  const percents = document.querySelector('#percents')
  const media = document.querySelectorAll('img')
  let i = 0;

  const interv =  setInterval(() => {
      i++;
      percents.innerHTML = ((i * 100) / media.length).toFixed(1)
      if(i === media.length){
        preloader.classList.add('preloader--hide')
        document.querySelector('body').classList.remove('hidden__body');
        percents.innerHTML = 100
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interv);
    }, 2290);
 
//   Array.from(media).forEach((item,idx)=>{
// item.onload = ()=>{
//   console.log(item,idx)
//   i++;
//   percents.innerHTML = ((i * 100) / media.length).toFixed(1)
//   if(i === media.length){
//     preloader.classList.add('preloader--hide')
//     percents.innerHTML = 100;
//     document.querySelector('body').classList.remove('hidden__body');
//   }
  
// }
//   })





  const worksH2 = document.querySelectorAll(
    ".main__works_commercial .btn__works h2"
  );
  const links = document.querySelectorAll(".main__works_commercial .img__works");
  
  worksH2.forEach((item, idx) => {
    item.addEventListener("click", () => {
      if (idx === 0) {
        linkVisit(idx);
      }
      if (idx === 1) {
        linkVisit(idx);
      }
      if (idx === 2) {
        linkVisit(idx);
      }
      if (idx === 3) {
        linkVisit(idx);
      }
      if (idx === 4) {
        linkVisit(idx);
      }
      if (idx === 5) {
        linkVisit(idx);
      }
      if (idx === 6) {
        linkVisit(idx);
      }
    });
  });
  function linkVisit(idx) {
    links.forEach((item) => {
      item.classList.add("close");
      links[idx].classList.remove("close");
    });
  }
  
  const anchors = document.querySelectorAll('a[href*="#"]');
  
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      const blockID = anchor.getAttribute("href").substr(1);
  
      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
  
  // ТЕЛЕГРАМ
  
  const TOKEN = "6082700545:AAFbuZoez-lgQ5SDX2lUcOwUAHE_hI1fyOQ";
  const CHAT_ID = "-1001811810827";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Отправитель: </b> ${this.name.value}\n`;
    message += `<b>Номер: </b> ${this.cellphone.value}\n`;
    message += `<b>Адрес: </b> ${this.desc.value}`;
  
    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        this.name.value = "";
        this.cellphone.value = "";
        this.desc.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  const worksPet = document.querySelectorAll(".btn__works_pet h2");
  const linksPet = document.querySelectorAll(".main__works_pet .img__works");
  
  worksPet.forEach((item, idx) => {
    item.addEventListener("click", () => {
      if (idx === 0) {
        linkVisitPet(idx);
      }
      if (idx === 1) {
        linkVisitPet(idx);
      }
      if (idx === 2) {
        linkVisitPet(idx);
      }
      if (idx === 3) {
        linkVisitPet(idx);
      }
      if (idx === 4) {
        linkVisitPet(idx);
      }
      if (idx === 5) {
        linkVisitPet(idx);
      }
      if (idx === 5) {
        linkVisitPet(idx);
      }
      if (idx === 6) {
        linkVisitPet(idx);
      }
      if (idx === 7) {
        linkVisitPet(idx);
      }
      if (idx === 8) {
        linkVisitPet(idx);
      }
      if (idx === 9) {
        linkVisitPet(idx);
      }
      if (idx === 10) {
        linkVisitPet(idx);
      }
      if (idx === 11) {
        linkVisitPet(idx);
      }
      if (idx === 12) {
        linkVisitPet(idx);
      }
      if (idx === 13) {
        linkVisitPet(idx);
      }
      if (idx === 14) {
        linkVisitPet(idx);
      }
    });
  });
  function linkVisitPet(idx) {
    linksPet.forEach((item) => {
      item.classList.add("close");
      linksPet[idx].classList.remove("close");
    });
  }
  
  
  
  
  
  
  
  
  
  const languageSelect = document.querySelector('select')
  const languageSelectOpt = document.querySelector('select').getElementsByTagName('option')
  
  
  
  
  const language = {
    en: [
      "Hi, my name is Alexander and I am Front-End Developer",
      "<span></span> It's good to see you here",
      "On this site you can see my works",
      "COMMERCIAL PROJECTS",
      "Personal projects",
      "CONTACT",
      "Contact Us",
    
    ],
    uk: [
      "Привіт, мене звати Олександр і я Front-End розробник",
      "<span></span> Приємно бачити вас тут",
      "На цьому сайті ви можете побачити мої роботи",
      "КОМЕРЦІЙНІ ПРОЕКТИ",
      "Особисті проекти",
      "КОНТАКТИ",
      "Зв'яжіться зі мною",
    
    ]
  }
  
  
  const languageDesc = {
    en: [
      "Game of crosses and zeros. With unique design and animations",
      "Functionality of adding goods to cart, working with LocalStorage, sum calculation is implemented",
      "A minimalistic weather forecast website that works with an API",
      "A minimalistic currency converter website that works with an API",
      "Dasboard layout",
      "Gallery that can be scrolled with the cursor",
      "Beautiful gallery that can be scrolled with the mouse wheel",
      "Gallery in which the effect of rparalax and background blur repeating the picture is realized",
      "The page is designed with beautiful paralax effect, smooth scrolling and block popups",
      "The main page of the furniture store was created",
      "A game in which you have to click the blocks as fast as possible in a certain time. With a counter",
      "Sneaker store one page website layout",
      "Simple layout of a one-page website",
      "Simple layout of a one-page website",
      "A simple calculator. With a counting implementation"
    ],
    uk: [
      "Гра в хрестики-нулики. З унікальним дизайном та анімацією",
      "Реалізовано функціонал додавання товарів у кошик, робота з LocalStorage, підрахунок суми",
      "Мінімалістичний сайт прогнозу погоди, який працює з API",
      "Мінімалістичний сайт-конвертер валют, що працює за допомогою API",
      "Макет інформаційної панелі",
      "Галерея, яку можна прокручувати курсором",
      "Красива галерея, яку можна прокручувати за допомогою колеса миші",
      "Галерея, в якій реалізовано ефект paralax та розмиття фону, що повторює картинку",
      "Сторінка розроблена з красивим ефектом паралаксу, плавною прокруткою і блочними спливаючими вікнами",
      "Створено головну сторінку меблевого магазину",
      "Гра, в якій потрібно натискати на блоки якомога швидше за певний час. З лічильником",
      "Верстка односторінкового сайту магазину кросівок",
      "Проста верстка односторінкового сайту",
      "Простий макет односторінкового сайту",
      "Простий калькулятор. З реалізацією лічильника"
    ]
  }
  
  const languageMenu = {
    en:[
      "Works",
      "Contact",
      "CV",
      "Contact Me"
    ],
    uk:[
      "Проекти",
      "Зв'язок",
      "CV",
      "Зв'яжіться зі мною"
    ]
  }
  const languageForm = {
    en:[
      "Name",
      "Messegers",
      "Description",
      "Send"
    ],
    uk:[
      "Ім'я",
      "Контакти",
      "Опис",
      "Відправити"
    ]
  }
  
  
  
  const headerTextH1 = document.querySelector('.main__title_h1')
  const headerTextPink = document.querySelector('.main__title_pink')
  const headerTextP = document.querySelector('.main__title_p')
  const titlesSection = document.querySelectorAll('#works')
  const descProj = document.querySelectorAll('.pet__site_title h4')
  const formTitle = document.querySelector('.form h4')
  const btnContact = document.querySelector('.buy a')
  const navA = document.querySelectorAll('.nav ul li a')
  const form = document.querySelector('form')
  const formBtn = document.querySelector('form button')
  const headerBtn = document.querySelector('.buy a')
  
  

  
  
  languageSelect.addEventListener('change',()=>{
    if(languageSelect.value === "ua"){
      localStorage.setItem("language", JSON.stringify("ua"));
      languageUa();
      languageKey = JSON.parse(localStorage.getItem("language")) 
      formBtn.classList.remove('en')
    formBtn.classList.add('uk')
    headerBtn.classList.remove('en')
    headerBtn.classList.add('uk')
      // btnContact.textContent = language.uk[7]
    } else {
       localStorage.setItem("language", JSON.stringify("en"));
      languageEn();
      languageKey = JSON.parse(localStorage.getItem("language")) 
      formBtn.classList.remove('uk')
      formBtn.classList.add('en')
      headerBtn.classList.remove('uk')
      headerBtn.classList.add('en')
      // btnContact.textContent = language.en[7]
    }
  })
  
  function languageUa(){
    headerTextH1.textContent = language.uk[0];
    headerTextPink.innerHTML = language.uk[1];
    headerTextP.textContent = language.uk[2];
    titlesSection[0].textContent = language.uk[3];
    titlesSection[1].textContent = language.uk[4];
    titlesSection[2].textContent = language.uk[5];
    descProj.forEach((item,idx)=>{
      item.textContent = languageDesc.uk[idx];
    })
    formTitle.textContent = language.uk[6];
    navA.forEach((item,idx)=>{
      item.textContent = languageMenu.uk[idx];
    })
    form.name.placeholder = languageForm.uk[0];
    form.cellphone.placeholder = languageForm.uk[1];
    form.desc.placeholder = languageForm.uk[2];
    formBtn.textContent = languageForm.uk[3];
    headerBtn.textContent = languageMenu.uk[3];
  }
  function languageEn(){
    headerTextH1.textContent = language.en[0];
    headerTextPink.innerHTML = language.en[1];
    headerTextP.textContent = language.en[2];
    titlesSection[0].textContent = language.en[3];
    titlesSection[1].textContent = language.en[4];
    titlesSection[2].textContent = language.en[5];
    descProj.forEach((item,idx)=>{
      item.textContent = languageDesc.en[idx];
    })
    navA.forEach((item,idx)=>{
      item.textContent = languageMenu.en[idx];
    })
    formTitle.textContent = language.en[6];
    form.name.placeholder = languageForm.en[0];
    form.cellphone.placeholder = languageForm.en[1];
    form.desc.placeholder = languageForm.en[2];
    formBtn.textContent = languageForm.en[3];
    headerBtn.textContent = languageMenu.en[3];
  }
  
  let languageKey = JSON.parse(localStorage.getItem("language")) || "";

  if(languageKey === "ua"){
    languageSelectOpt[1].selected = true;
    languageUa();
    formBtn.classList.remove('en')
    formBtn.classList.add('uk')
    headerBtn.classList.remove('en')
    headerBtn.classList.add('uk')
  }
  if(languageKey === "en"){
    languageSelectOpt[0].selected = true;
    languageEn();
    formBtn.classList.remove('uk')
    formBtn.classList.add('en')
    headerBtn.classList.remove('uk')
    headerBtn.classList.add('en')
  }
  




  
})





