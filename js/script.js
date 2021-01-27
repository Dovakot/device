/* Открытие попапа */

const btnList = document.querySelectorAll('[data-target]');

for (let i = 0; i < btnList.length; i++) {
  
  const btn = btnList[i];
  
  btn.addEventListener('click', function(evt) {
    
    evt.preventDefault();
    
    const dataText = this.getAttribute('data-target');
    const popup = document.querySelector(dataText);
    const fieldList = popup.querySelectorAll('.form-field');
    
    popup.classList.add('modal-open');
    
    if (fieldList.length !== 0) {
      let emptyFild = null;
      
      for (let i = 0; i < fieldList.length; i++) {
   
        let storage = localStorage;
        
        if (storage) {
          
          fieldList[i].value = storage.getItem(fieldList[i].getAttribute('name'));
          
        }

        if (emptyFild === null && fieldList[i].value === '') {
          
          emptyFild = fieldList[i];

        }
        
      }
      
      if (emptyFild === null) {
        emptyFild = popup.querySelector('.form-field:first-of-type');
      }
      
      emptyFild.focus();
      
    }

  });
  
};

/* Отправка формы */

const formSumbit = document.querySelector('.message-form');

if (formSumbit) {

  formSumbit.addEventListener('submit', function (evt) {

    const fieldList = formSumbit.querySelectorAll('.form-field');
    
    for (let i = 0; i < fieldList.length; i++) {

      if (!fieldList[i].value) {
        
        evt.preventDefault();
        
        formSumbit.classList.remove('modal-error');
        formSumbit.offsetWidth = formSumbit.offsetWidth;
        formSumbit.classList.add('modal-error');
        
        fieldList[i].focus();
        
        return false;
        
      } else {
        
        if (fieldList[i].getAttribute('name') !== 'message') {

          localStorage.setItem(fieldList[i].getAttribute('name'), fieldList[i].value);
          
        }
      }
      
    }
    
  });
};

/* Закрытие попапа */

const popupList = document.querySelectorAll('.modal');

for (let i = 0; i < btnList.length; i++) {

  const popup = popupList[i];
  
  popup.addEventListener('click', function(evt) {
    
    const target = evt.target;

    if (target.classList.contains('modal-open') || target.classList.contains('button-close')) {
      popup.classList.remove('modal-open');
      
      const formError = popup.querySelector('.modal-error');
      
      if (formError) {
        formError.classList.remove('modal-error');
      }
      
    }
    
  });
  
};

window.addEventListener("keydown", function (evt) {
  
  if (evt.keyCode === 27) {
    
    const popupOpen = document.querySelector(".modal-open");
    
    if (popupOpen) {
      
      popupOpen.classList.remove("modal-open");
      popupOpen.classList.remove("modal-error");
      
    }
    
  }
  
});

/* Главный слайдер */

const sliderSwitch = document.querySelector('.slider');

if (sliderSwitch) {
  
  sliderSwitch.addEventListener('click', function(evt) {
    
    target = evt.target;
    
    if (!target.classList.contains('active') && target.classList.contains('button-switch')) {
      
      const activeItem = sliderSwitch.querySelector('.flex-block.active');
      const activeBtn = sliderSwitch.querySelector('.button-switch.active');
      
      activeItem.classList.remove('active');
      activeBtn.classList.remove('active');
      
      const btnDataText = target.getAttribute('data-item');
      const sliderItem = sliderSwitch.querySelector(btnDataText);
      
      sliderItem.classList.add('active');
      target.classList.add('active');
      
    }
    
  });

};

/* Слайдер с табами */

const servicesSlider = document.querySelector('.services');

if (servicesSlider) {

  servicesSlider.addEventListener('click', function(evt) {
    
    const target = evt.target;
    
    if (target.classList.contains('button')) {
    
      evt.preventDefault();

      if (!target.classList.contains('active')) {
        
        const activeItem = servicesSlider.querySelector('.services-description.active');
        const activeBtn = servicesSlider.querySelector('.button.active');
        
        activeItem.classList.remove('active');
        activeBtn.classList.remove('active');
        
        const btnDataText = target.getAttribute('data-item');
        const sliderItem = servicesSlider.querySelector(btnDataText);
        
        sliderItem.classList.add('active');
        target.classList.add('active');
        
      }
    }
    
  });
  
};