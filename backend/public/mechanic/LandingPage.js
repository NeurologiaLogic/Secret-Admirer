let temp = 1;

//color setters
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
//change colors
$(".switcher").change(() => {
  if (temp) {
    colorsSetter("#80c7d0");
    temp ^= 1;
  } else {
    colorsSetter("#F58DA8");
    temp ^= 1;
  }
});

//sending email
$("#send-mail").click(() => {
  $("#hidden").attr("hidden", false);
});

//ketika menekan textbox lagi
$(".content").click((e) => {
  console.log(e);

  $("#hidden").attr("hidden", true);
  $("#hidden").attr("transition", "all .10s ease-in-out");
});

//get qr code from fetching data
$(".submit").click((e) => {
  e.preventDefault();
  let content = document.querySelector(".content").value;
  let password = document.querySelector(".password").value;
  let hints = document.querySelector(".hints").value;

  // alert(content);
  let types = temp ? "girls" : "boys";
  // console.log(temp);
  console.log({ content, password, hints, types });
  $("#section1").attr("hidden", true);
  // play loading dan fetch
  fetch("https://localhost:6969/create", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      hints: hints,
      content: content,
      type: types,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log($("#password"));
      $(".QrCode").attr("src", data.QrCode);
      console.log("Success:", data.QrCode);
      $(".hidethis").attr("hidden", false);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

//send email
$(".email-sender").click((e) => {
  e.preventDefault();
  let mail = document.querySelector(".emil-receiver").value;
  // alert(mail);
  fetch("https://localhost:6969/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: mail,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.success);
      console.log(data.success);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

