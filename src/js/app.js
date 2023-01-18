"use strict";

const links = {
  fuagra: {
    selected: 'Печень утки разварная с артишоками.',
    disabled: 'Печалька, с фуа-гра закончился.',
  },
  fish: {
    selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    disabled: 'Печалька, с рыбой закончился.',
  },
  chicken: {
    selected: 'Филе из цыплят с трюфелями в бульоне.',
    disabled: 'Печалька, с курой закончился.',
  },
  default: 'Чего сидишь? Порадуй котэ, <a href="#">купи.</a>',
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => card.addEventListener('click', cardOnClickHandler));

//сразу проверяем классы карточек
selectCheck();

function cardOnClickHandler() {
  this.classList.toggle('selected');

  selectCheck();
}

//обработчик наведения мыши на карточку
function cardHoverHandler() {
  let upperText = this.querySelector('.card__upper-text');
  upperText.textContent = 'Котэ не одобряет?';
}

//обработчик события убирания мыши с карточки
function cardUnHoverHandler() {
  let upperText = this.querySelector('.card__upper-text');
  upperText.textContent = 'Сказочное заморское яство';
}

//функция проверяет классы у карточек и сразу добавляет или убирает нужные ивенты
function selectCheck() {
  cards.forEach(card => {
    let link = card.querySelector('.card__link');

    if(card.classList.value === 'card selected') {
      link.textContent = links[card.dataset.taste].selected;
      card.addEventListener('mouseout', cardUnHoverHandler);
      card.addEventListener('mouseover', cardHoverHandler);
    } else {
      link.innerHTML = links.default;
      cardUnHoverHandler.call(card);
      card.removeEventListener('mouseover', cardHoverHandler);
      card.removeEventListener('mouseout', cardUnHoverHandler);
    }

    if(card.classList.value === 'card disabled') {
      card.removeEventListener('click', cardOnClickHandler);
      link.textContent = links[card.dataset.taste].disabled;
    }
  })
}

