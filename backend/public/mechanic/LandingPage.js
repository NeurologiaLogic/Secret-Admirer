let temp = 1;

const colorsSetter = (color) => {
  // console.log(color)
  $(".LandingPage").css({
    backgroundColor: `${color}`,
    transition: "all .5s ease-in-out",
  });
  $(".bottom-button").css({
    backgroundColor: `${color}`,
    transition: "all .5s ease-in-out",
  });
  $(".submit").css({
    backgroundColor: `${color}`,
    transition: "all .5s ease-in-out",
  });
};

$(".switcher").change(() => {
  if (temp) {
    colorsSetter("#80c7d0");
    temp ^= 1;
  } else {
    colorsSetter("#F58DA8");
    temp ^= 1;
  }
});

$("#send-mail").click(() => {
  console.log("send-mail");
  $(".hidden").attr("hidden", false);
});
