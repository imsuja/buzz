
// ==UserScript==
// @name          New Script
// @namespace     http://tampermonkey.net/
// @description	  idk
// @author        idk
// @include       https://*force.com/*
// @grant   	  none
// @version       1.4
// @downloadURL https://raw.githubusercontent.com/imsuja/buzz/main/buzz.js
// @updateURL https://raw.githubusercontent.com/imsuja/buzz/main/buzz.js
// ==/UserScript==

(function() {
    'use strict';

    setInterval( () => {

    var a;
    a=document.querySelector("#profile-sections-container > div:nth-child(3) > tbme-rank")?.shadowRoot.querySelector("lwc-tds-theme-provider > lwc-tbui-card > div.stats-container > lwc-tbui-tally:nth-child(2)")?.shadowRoot.querySelector("span > span.tally__count.tally__count_success");
    if (a != null) a.innerHTML= '100,100'

    a= document.querySelector("#profile-sections-container > div:nth-child(3) > tbme-rank")?.shadowRoot.querySelector("lwc-tds-theme-provider > lwc-tbui-card > div:nth-child(1) > img");
    if(a!=null) a.src = "https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/double-star-ranger.png";

    a= document.querySelector("#profile-sections-container > div:nth-child(3) > tbme-rank")?.shadowRoot.querySelector("lwc-tds-theme-provider > lwc-tbui-card > div:nth-child(3) > div > lwc-tds-dangerous-html > span > b");
    if(a!=null) a.innerHTML = '49,900';

    a= document.querySelector("#profile-sections-container > div:nth-child(3) > tbme-rank")?.shadowRoot.querySelector("lwc-tds-theme-provider > lwc-tbui-card > div:nth-child(3) > div > lwc-tds-dangerous-html > span > a > span");
    if(a!=null) a.innerHTML = 'Triple Star Ranger';

    a= document.querySelector("#profile-sections-container > div:nth-child(3) > tbme-rank")?.shadowRoot.querySelector("lwc-tds-theme-provider > lwc-tbui-card > div.stats-container > lwc-tbui-tally:nth-child(1)")?.shadowRoot.querySelector("span > span.tally__count.tally__count_success");
    if(a!=null) a.innerHTML = '87';

    a= document.querySelector("#profile-sections-container > div:nth-child(3) > tbme-rank")?.shadowRoot.querySelector("lwc-tds-theme-provider > lwc-tbui-card > div.stats-container > lwc-tbui-tally:nth-child(3)")?.shadowRoot.querySelector("span > span.tally__count.tally__count_success");
    if(a!=null) a.innerHTML = '13';

    a= document.querySelector("#profile-sections-container > div:nth-child(2) > tbme-profile-badges")?.shadowRoot.querySelector("lwc-tbui-card")?.shadowRoot.querySelector("article > header > div:nth-child(1) > div > h2");
    if(a!=null) a.innerHTML = '87 Badges';

    a= document.querySelector("#\\31 682325589592_4ma > div.container.pb-64.mobile-pb-48.pt-64.mobile-pt-48 > article > div.content__wrapper > header > pbc-trailblazer-badge-wrapper")?.shadowRoot.querySelector("div > pbc-trailblazer-badge")?.shadowRoot.querySelector("div > div.wrap.content > div.col.main > div.details > div:nth-child(2) > span");
    if(a!=null) a.innerHTML = '100,100 Points';;

    a= document.querySelector("#\\31 682325589592_4ma > div.container.pb-64.mobile-pb-48.pt-64.mobile-pt-48 > article > div.content__wrapper > header > pbc-trailblazer-badge-wrapper")?.shadowRoot.querySelector("div > pbc-trailblazer-badge")?.shadowRoot.querySelector("div > div.wrap.content > div.col.main > div.details > div:nth-child(1) > span");
    if(a!=null) a.innerHTML = 'Double Star Ranger: 87 Badges';

    a = document.querySelector("#profile-sections-container > div:nth-child(3) > tbme-rank")?.shadowRoot.querySelector("lwc-tds-theme-provider > lwc-tbui-card > div:nth-child(3) > div > lwc-tbui-progress-avatar")?.shadowRoot.querySelector("div > div.content > span > img");
    if(a!=null) a.src = 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/triple-star-ranger.png'
}, 1000);

})();
