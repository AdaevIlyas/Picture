const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll('.all');

  const typeFilter = (selector) => {
    const markType = wrapper.querySelectorAll(selector),
      no = document.querySelector('.portfolio-no');


    markAll.forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });

    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');

    if (selector != '.granddad' && selector != '.grandmother') {
      markType.forEach(mark => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  };

  menu.addEventListener('click', (e) => {
    let target = e.target;

    if (target && target.tagName == 'LI') {
      items.forEach(btn => btn.classList.remove('active'));

      target.classList.add('active');

      typeFilter(`.${target.classList[0]}`);
    }
  });
};

export default filter;