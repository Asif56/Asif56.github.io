const hero=document.querySelector('.hero')
const slider=document.querySelector('.slider')
const logo=document.querySelector('#logo')
const hamburger=document.querySelector('.hamburger')
const headline=document.querySelector('.headline')

const t1= new  TimelineMax()

t1.fromTo(hero,1,{height:'0%'},{height:'80%', ease:Power2.easeInOut})
.fromTo(hero,1.2, {width:"100%"},{width:'80%',ease:Power2.easeInOut } )
.fromTo(slider,.5,{x:'-100%'},{x:'0%',ease:Power2.easeInOut },"-=1.2")
.fromTo(logo,.5,{opacity:0,x:30},{opacity:1 ,x:0},"-=.3")
.fromTo(hamburger,.5,{opacity:0,x:30},{opacity:1 ,x:0},"-=.3")
.fromTo(headline,.5,{opacity:0,x:30},{opacity:1 ,x:0},"-=.3")


// ***********************************************

const flightPath={
    curviness:1.25,
    autoRotate:true,
    values:[
        { x : 100, y : -20 },
        { x : 300, y : 10 },
        { x : 500, y : 100 },
        { x : 750, y : -100 },
        { x : 350, y : -50 },
        { x : 600, y : 100 },
        { x : 800, y : 0 },
        { x:window.innerWidth, y:-250}
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.paper-plane',2,{
        bezier:flightPath,
        // rotate:'60deg'
        ease:Power1.easeInOut
    })
);






















