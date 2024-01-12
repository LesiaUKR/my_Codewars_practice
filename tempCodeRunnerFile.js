function debounce(f, ms) {
   let isCooldown = false;
   return function () {
      if (isCooldown) return;
      f.apply(this, arguments);
      isCooldown = true;
      setTimeout(() => isCooldown = false, ms);
   };
}

let f = debounce(console.log, 1000);