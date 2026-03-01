
document.addEventListener('DOMContentLoaded', () => {

  // ===== PRELOADER (load-based) =====
  const preloader = document.querySelector('#preloader');
  const percents = document.querySelector('#percents');
  const circle = document.querySelector('#preloaderCircle');
  const circumference = 2 * Math.PI * 42; // r=42 => ~264
  const media = document.querySelectorAll('img');
  const total = media.length;
  let loaded = 0;

  function setCircleProgress(pct) {
    if (!circle) return;
    const offset = circumference - (pct / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }

  function updateProgress() {
    loaded++;
    const percent = Math.round((loaded / total) * 100);
    percents.innerHTML = percent;
    setCircleProgress(percent);

    if (loaded >= total) {
      percents.innerHTML = 100;
      setCircleProgress(100);
      setTimeout(() => {
        preloader.classList.add('preloader--hide');
        document.querySelector('body').classList.remove('hidden__body');
      }, 500);
    }
  }

  if (total === 0) {
    preloader.classList.add('preloader--hide');
    document.querySelector('body').classList.remove('hidden__body');
  } else {
    media.forEach(img => {
      if (img.complete) {
        updateProgress();
      } else {
        img.addEventListener('load', updateProgress);
        img.addEventListener('error', updateProgress);
      }
    });
  }


  // ===== COMMERCIAL PROJECTS — показ картинки по клику =====
  const worksH2 = document.querySelectorAll('.main__works_commercial .btn__works h2');
  const links = document.querySelectorAll('.main__works_commercial .img__works');

  worksH2.forEach((item, idx) => {
    item.addEventListener('click', () => {
      links.forEach(link => link.classList.add('close'));
      links[idx].classList.remove('close');
    });
  });


  // ===== SMOOTH SCROLL (только для touch-устройств, GSAP обрабатывает десктоп) =====
  if ('ontouchstart' in window) {
    const headerH = document.querySelector('.header')?.offsetHeight || 80;
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = anchor.getAttribute('href');
        if (!href.includes('#')) return;
        const id = href.split('#')[1];
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerH;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }


  // ===== TELEGRAM FORM =====
  const TOKEN = "6082700545:AAFbuZoez-lgQ5SDX2lUcOwUAHE_hI1fyOQ";
  const CHAT_ID = "-1001811810827";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Отправитель: </b> ${this.name.value}\n`;
    message += `<b>Номер: </b> ${this.cellphone.value}\n`;
    message += `<b>Адрес: </b> ${this.desc.value}`;

    axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    }).then(() => {
      this.name.value = '';
      this.cellphone.value = '';
      this.desc.value = '';
    }).catch(err => {
      console.log(err);
    });
  });


  // ===== LANGUAGE SWITCH =====
  const langToggle = document.querySelector('#langToggle');
  const langBtns = langToggle ? langToggle.querySelectorAll('.lang-btn') : [];

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
  };

  const languageDesc = {
    en: [
      "Game of crosses and zeros. With unique design and animations",
      "Functionality of adding goods to cart, working with LocalStorage, sum calculation is implemented",
      "A minimalistic weather forecast website that works with an API",
      "A minimalistic currency converter website that works with an API",
      "Dashboard layout",
      "Gallery that can be scrolled with the cursor",
      "Beautiful gallery that can be scrolled with the mouse wheel",
      "Gallery with parallax and background blur repeating the picture",
      "The page is designed with beautiful parallax effect, smooth scrolling and block popups",
      "The main page of the furniture store was created",
      "A game in which you have to click the blocks as fast as possible. With a counter",
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
      "Галерея, в якій реалізовано ефект parallax та розмиття фону",
      "Сторінка з красивим ефектом паралаксу, плавною прокруткою і спливаючими вікнами",
      "Створено головну сторінку меблевого магазину",
      "Гра, в якій потрібно натискати на блоки якомога швидше. З лічильником",
      "Верстка односторінкового сайту магазину кросівок",
      "Проста верстка односторінкового сайту",
      "Простий макет односторінкового сайту",
      "Простий калькулятор. З реалізацією лічильника"
    ]
  };

  const languageMenu = {
    en: ["Works", "Contact", "CV", "Contact Me"],
    uk: ["Проекти", "Зв'язок", "CV", "Зв'яжіться зі мною"]
  };

  const languageForm = {
    en: ["Name", "Messengers", "Description", "Send"],
    uk: ["Ім'я", "Контакти", "Опис", "Відправити"]
  };

  const headerTextH1 = document.querySelector('.main__title_h1');
  const headerTextPink = document.querySelector('.main__title_pink');
  const headerTextP = document.querySelector('.main__title_p');
  const titlesSection = document.querySelectorAll('.section-title');
  const descProj = document.querySelectorAll('.pet__site_title h4');
  const formTitle = document.querySelector('.form h4');
  const formBtn = document.querySelector('form button');
  const headerBtn = document.querySelector('.buy a');
  const navA = document.querySelectorAll('.nav ul li a');
  const form = document.querySelector('form');

  function setActiveLangBtn(lang) {
    langBtns.forEach(b => {
      b.classList.toggle('lang-btn--active', b.dataset.lang === (lang === 'uk' ? 'ua' : 'en'));
    });
  }

  function applyLanguage(lang) {
    headerTextH1.textContent = language[lang][0];
    headerTextPink.innerHTML = language[lang][1];
    headerTextP.textContent = language[lang][2];
    titlesSection.forEach((el, i) => { el.textContent = language[lang][3 + i]; });
    descProj.forEach((el, i) => { el.textContent = languageDesc[lang][i]; });
    formTitle.textContent = language[lang][6];
    navA.forEach((el, i) => { el.textContent = languageMenu[lang][i]; });
    form.name.placeholder = languageForm[lang][0];
    form.cellphone.placeholder = languageForm[lang][1];
    form.desc.placeholder = languageForm[lang][2];
    formBtn.textContent = languageForm[lang][3];
    headerBtn.textContent = languageMenu[lang][3];
    setActiveLangBtn(lang);
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang === 'ua' ? 'uk' : 'en';
      localStorage.setItem('language', JSON.stringify(lang));
      applyLanguage(lang);
    });
  });

  const savedLang = JSON.parse(localStorage.getItem('language'));
  if (savedLang === 'uk') {
    applyLanguage('uk');
  } else if (savedLang === 'en') {
    applyLanguage('en');
  }

});
