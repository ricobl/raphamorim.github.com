var __defineActualNav=function(a){var b=window.location.pathname,c=new RegExp("/"==b?window.location.origin+"/?$":b.replace(/\/$/,"")),d=document.querySelectorAll(a),e=Array.apply(null,{length:d.length}).map(Number.call,Number);e.forEach(function(a){c.test(d[a].href.replace(/\/$/,""))&&d[a].classList.add("active")})},__mobileBtn=function(){var a=document.querySelector(".bar-menu-optional"),b=document.querySelector("#bar-mobile-menu");a.addEventListener("click",function(a){b.style.opacity<=0?(b.style.opacity=1,b.style.height="330px"):(b.style.opacity=0,b.style.height="0px"),a.preventDefault()})};!function(){__defineActualNav(".pagenav a"),__mobileBtn()}(),function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-49746836-1","raphamorim.com"),ga("send","pageview");