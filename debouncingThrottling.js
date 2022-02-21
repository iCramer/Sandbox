(function() {
  let debounceInput = document.getElementById('debounceInput');
  debounceInput.addEventListener('input', (evt) => {
    console.log(evt.target.value);
  })
})();