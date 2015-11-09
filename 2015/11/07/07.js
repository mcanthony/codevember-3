"use strict";var GRAVITY=.8,TAU=2*Math.PI,MAX_PARTICLES=420,MAX_SPEED=6,PARTICLE_FREQUENCY=1,BASE_RADIUS=20,RADIUS_REDUCTION_SPEED=.05,canvas=document.getElementById("c"),context=canvas.getContext("2d"),particles=[],getOrigin=function(){return{x:.5*window.innerWidth,y:.5*window.innerHeight}},origin=getOrigin(),frameCount=0,resize=function(){canvas.width=window.innerWidth,canvas.height=window.innerHeight,origin=getOrigin()},randomColor=function(){var n=200,t=255-n,e=Math.random()*n+t,i=Math.random()*n+t,a=Math.random()*n+t;return e<<16|i<<8|a},particleFactory=function(n){var t=n||{};return t.x=origin.x,t.y=origin.y,t.color=randomColor(),t.angle=Math.random()*TAU,t.radius=BASE_RADIUS,t.speed=Math.random()*MAX_SPEED,t},dead=function(n){return n.radius<0||n.x<0-n.radius||n.y<0-n.radius||n.x>canvas.width+n.radius||n.y>canvas.height+n.radius},move=function(n){n.x+=Math.cos(n.angle)*n.speed,n.y+=Math.sin(n.angle)*n.speed-GRAVITY,n.radius-=RADIUS_REDUCTION_SPEED},draw=function(n){n.radius>0&&(context.fillStyle="#"+n.color.toString(16),context.beginPath(),context.arc(n.x,n.y,n.radius,0,TAU,!0),context.fill())},animate=function n(t){context.clearRect(0,0,canvas.width,canvas.height);var e=particles.filter(function(n){return!dead(n)});if(e.forEach(draw),e.forEach(move),frameCount%PARTICLE_FREQUENCY==0){var i=particles.filter(dead);particles.length<MAX_PARTICLES&&0==i.length?particles.push(particleFactory()):particleFactory(particles.filter(dead)[0])}frameCount++,requestAnimationFrame(n)},init=function(){resize(),animate()};document.addEventListener("DOMContentLoaded",init),window.addEventListener("resize",resize),canvas.addEventListener("mousedown",function(n){origin.x=n.clientX,origin.y=n.clientY});