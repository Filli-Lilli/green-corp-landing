const INCREASE_NUMBER_ANIMATION_SPEED = 50;  // Константа для задания скорости анимации = 50мс

// функция increaseNumberAnimationStep отвечает за шаг анимации
/* 
    i — счетчик анимации. Он будет принимать значение от 0 до 5000 и каждый 
кадр анимации увеличиваться на 1.
    element — html-элемент тега с числом. За один кадр анимации значение 
внутри element мы будем менять на i.
    endNumber — значение, когда анимация остановится. В нашем случае — 5000. 
*/
function increaseNumberAnimationStep (i, element, endNumber) {

  if (i <= endNumber) { // добавим проверку, что переменная i должна быть меньше либо равна значению endNumber, 
                        // только в этом случае анимация должна выполняться
    if (i === endNumber) {
      element.innerText = i + '+';  // когда переменная i будет равна 5000 должен добавиться символ +
    } else {
      element.innerText = i;
    }

      i+=100;

    //   функция setTimeout(func, delay) служит для вызова функции func с задержкой, указанной в аргументе delay
      setTimeout(function() {
        increaseNumberAnimationStep(i, element, endNumber);
      }, INCREASE_NUMBER_ANIMATION_SPEED);
    }
  }
// функция initIncreaseNumberAnimation() инициализирует запуск анимации
function initIncreaseNumberAnimation() {
  const element = document.querySelector('.features__clients-count');
  /* 
    Аргумент i передавайте как 0, именно 0 — начальное состояние анимации. 
    В качестве element нужно передать html-элемент ранее созданного тега div с классом features__clients-count. 
    endNumber — это 5000.
  */
  increaseNumberAnimationStep(0, element, 5000);
}

initIncreaseNumberAnimation();