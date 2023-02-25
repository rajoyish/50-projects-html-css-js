const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    // adding '+' sign infront of string converts to number
    const target = +counter.getAttribute("data-target");
    const countZero = +counter.innerText;

    const increment = target / 200;

    if (countZero < target) {
      counter.innerText = `${Math.ceil(countZero + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
