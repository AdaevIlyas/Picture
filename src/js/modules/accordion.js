//                 itemsSelector(для accordiona со стилями)
const accordion = (triggersSelector,) => {
  // accordion работающий со стилями
  // const btns = document.querySelectorAll(triggersSelector),
  //   blocks = document.querySelectorAll(itemsSelector);

  // blocks.forEach(block => {
  //   block.classList.add('animated', 'fadeInDown');
  // });

  // btns.forEach(btn => {
  //   btn.addEventListener('click', function () {
  //     if (!this.classList.contains('active')) {
  //       btns.forEach(btn => {
  //         btn.classList.remove('active', 'active-style');
  //       });
  //       this.classList.add('active', 'active-style');
  //     }
  //   });
  // });



  // js accordion
  const btns = document.querySelectorAll(triggersSelector);

  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      btns.forEach(item => {
        item.classList.remove('active-style');
        item.nextElementSibling.classList.remove('active-content');
        item.nextElementSibling.style.maxHeight = '0px';
      });

      this.classList.toggle('active-style');
      this.nextElementSibling.classList.toggle('active-content');

      if (this.classList.contains('active-style')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });
};

export default accordion;