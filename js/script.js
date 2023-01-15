"use strict";

window.addEventListener('DOMContentLoaded', () => {

    class Func {
        constructor(price, title, icon, list, parentSelector) {
            this.price=price;
            this.title=title;
            this.icon=icon;
            this.list=list;
            this.parent = document.querySelector(parentSelector);
        }

        pricing() {
            const element = document.createElement('div');
            element.className='pricing__block';
            element.innerHTML=`
                <div class="pricing__block-header">
                    <div class="price"><h3>$</h3><h1>${this.price}</h1><h2>/hr</h2></div>
                    <h2 class="title">${this.title}</h2>
                </div>
                <div class="pricing__block-main">
                    <img class="pricing__block-main-icon" src=${this.icon} alt="">
                    <div class="pricing__block-list">
                        <p>${this.list[0]}</p>
                        <p>${this.list[1]}</p>
                        <p>${this.list[2]}</p>
                        <p>${this.list[3]}</p>
                        <p>${this.list[4]}</p>
                    </div>
                </div>
                <a class="button" href="#">Place an order</a>
            `;
            this.parent.append(element);
        }
    }

    new Func(
        '29',
        'UI & Ux',
        'img/Icon.svg',
        ['Brand Idea', 'Logo Inovation', 'Structure of Design', 'Quality of Design', 'User friendly'],
        '.pricing__blocks'
    ).pricing();

    new Func(
        '49',
        'webdesign',
        'img/Icon2.svg',
        ['Wireframe Option', 'Logo Design Variation', 'Homepage Variation', 'Innerpage', 'Styleguide'],
        '.pricing__blocks'
    ).pricing();

    new Func(
        '39',
        'web development',
        'img/Icon3.svg',
        ['PSD to HTML', 'HTML to Wordpress', 'PSD to Wordpress', 'HTML to Drupal', 'With Responsive'],
        '.pricing__blocks'
    ).pricing();
    
 });