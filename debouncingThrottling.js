(function() {
  document.addEventListener('DOMContentLoaded', () => {

     // Debouncing

    function debounce(func, delay) {
      let timeout;
      return function(...args) {
        const effect = () => {
          timeout = null
          return func.apply(this, args)
        }

        clearTimeout(timeout);
        timeout = setTimeout(effect, delay);
      }
    };

    const logInput = (val) => {
      console.log(val);
    }

    let delayLog = debounce(logInput, 1000);

    let debounceInput = document.getElementById('debounceInput');
    debounceInput.addEventListener('input', (evt) => delayLog(evt.target.value));


    // Throttling

    function throttle(func, delay) {
      let waitUntil = false;

      return function(...args) {
        if (!waitUntil) {
          func.apply(this, args);
          waitUntil = true;

          setTimeout(() => {
            waitUntil = false
          }, delay)
        }
      }
    }

    let limitLog = throttle(logInput, 500);

    const throttleInput = document.getElementById('throttleInput');
    throttleInput.addEventListener('input', (evt) => limitLog(evt.target.value));

  });
})();