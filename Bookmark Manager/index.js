let btn = document.getElementsByTagName("a");
console.log(btn.length);

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("mouseover", () => {
    console.log("you will go to " + btn[i].href);
  });
}
