// smooth scrolling using locomotive

const scroll = new LocomotiveScroll({
    el: document.querySelector('#p-main'),
    smooth: true
});


// animations using gsap

gsap.from(".nav-link", {
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
})

// shery js for animations

Shery.textAnimate("#sec2-hdng h2", {
    style: 2,
    y: 10,
    delay: .3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from('.anim-1', {
    y: 50,
    stagger: .3,
    opacity: 0,
    ease: Expo,
    duration: 1
})

Shery.imageEffect("#img-wrpr-2 img", {
    style: 3,
    config: { "uFrequencyX": { "value": 11.5, "range": [0, 100] }, "uFrequencyY": { "value": 5, "range": [0, 100] }, "uFrequencyZ": { "value": 45, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 18.7 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7500117017664346 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.4, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }
})

Shery.imageEffect(".img-anim-2 img", {
    style: 5,
    config: { "a": { "value": 1.8, "range": [0, 30] }, "b": { "value": -0.7, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.6666666666666666 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.3, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
})

Shery.imageEffect("#pstr-pic-wrpr", {
    style: 5,
    config: { "a": { "value": 0.74, "range": [0, 30] }, "b": { "value": -0.97, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.3039843241373696 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 2.74, "range": [1, 15] }, "durationOut": { "value": 0.55, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.2, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": false }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.74, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 32 } }, "discard_threshold": { "value": 0.42, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.43, "range": [0, 2] }, "noise_scale": { "value": 10.74, "range": [0, 100] } },
    gooey: true
})

document.querySelector('#vid-desc button').addEventListener('mouseover', function(){
    gsap.to('#video-cntnr video', {
        opacity: 1,
        duration: 1,
        ease: Power4
    })
})

document.querySelector('#vid-desc button').addEventListener('mouseleave', function(){
    gsap.to('#video-cntnr video', {
        opacity: 0,
        duration: 1,
        ease: Power4
    })
})