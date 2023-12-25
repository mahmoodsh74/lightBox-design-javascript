const imgBox = document.querySelectorAll(".imgBox");

imgBox.forEach((popup) =>
  popup.addEventListener("click", function () {
    popup.classList.toggle("active");
  })
);

// imgBox.addEventListener("click", function () {
//   imgBox.classList.toggle("active");
// });
