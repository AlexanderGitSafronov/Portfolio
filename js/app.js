gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    });

    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');
    itemsL.forEach((item) => {
        gsap.fromTo(item, {x: -150, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-750',
                end: '-100',
                scrub: true
            }
        });
    });

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item');
    itemsR.forEach((item) => {
        gsap.fromTo(item, {x: 150, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-750',
                end: '-100',
                scrub: true
            }
        });
    });

    // Smooth scroll to anchor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            gsap.to(window, {duration: 1, scrollTo: {y: target, offsetY: 100}});
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 0); // Небольшая задержка для обновления
        });
    });
}



