let works = [
   {
      image: '1.png',
      caption: 'Website on CMS Wix',
      src: '#',
      typeIcon: 'cms'
   },
   {
      image: '2.png',
      caption: 'Website on HTML, CSS',
      src: '#',
      typeIcon: 'htmlCss'
   },
   {
      image: '1.png',
      caption: 'Website on CMS Wix',
      src: '#',
      typeIcon: 'htmlCss'
   }, {
      image: '1.png',
      caption: 'Website on CMS Wix',
      src: '#',
      typeIcon: 'htmlCss'
   },
   {
      image: '1.png',
      caption: 'Website on CMS Wix',
      src: '#',
      typeIcon: 'htmlCss'
   },
   {
      image: 'any.jpg',
      caption: 'Another...',
      src: '#',
      typeIcon: ''
   }

]


let portfolio = document.querySelector('.portfolio');
works.forEach((item) => {
   let portfolioItem = createElement('div', '.portfolio__item');
   portfolioItem.addEventListener('mouseover', () => {
      portfolioImage.classList.remove('none');
   });
   portfolioItem.addEventListener('mouseout', () => {
      portfolioImage.classList.add('none');
   });


   portfolio.append(portfolioItem);
})



/**
 *  <div class="portfolio">
                        <div class="block-shadowed portfolio__item">
                            <div class="portfolio-card">
                                <img class="portfolio-card__icon" src="./img/icons/CMS.png" alt="On CMS WIX">
                                <a href="#" class="portfolio-card__a text-shadow">Website on CMS Wix</a>
                            </div>
                            <div class="portfolio__image none">
                                <img src="./img/portfolio/1.jpg" alt="On CMS WIX">
                            </div>
                        </div>
                        a.work2:hover {
   background: url(../img/portfolio/1.jpg);
   z-index: 999;
}
a.work3:hover {
   background: url(../img/portfolio/2.jpg);
   z-index: 999;
}
a.work4:hover {
   background: url(../img/portfolio/4.jpg);
   z-index: 999;
}
a.work5:hover {
   background: url(../img/portfolio/any.jpg);
   z-index: 999;
}
 */
function createElement(element, classStr) {
   let elem = document.createElement(element);
   elem.classList.add(classStr);
   return elem;
}