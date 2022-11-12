// Document is ready
$(document).ready(function () {
  $(".error").hide();

  $("#emailid").on("keyup", function () {
    if (IsEmail($("#emailid").val()) == false) {
      $("#invalidemail").show();
    } else {
      $("#invalidemail").hide();
    }
  });
  $("#username").on("keyup", function () {
    if ($("#username").val().length == 0) {
      $("#invalidusername").show();
    } else {
      $("#invalidusername").hide();
    }
  });
  $("#password").on("keyup", function () {
    if (IsPassword($("#password").val()) == false) {
      $("#invalidpassword").show();
    } else {
      $("#invalidpassword").hide();
    }
  });
  $("#submit").click(function () {
    var emailid = $("#emailid").val();
    var username = $("#username").val();
    var password = $("#password").val();
    if (emailid.length < 1) {
      $("#emailid").next().show();
      return false;
    }
    if (username.length < 1) {
      $("#username").next().show();
      return false;
    }
    if (IsEmail(emailid) == false) {
      $("#invalidemail").show();
      return false;
    }
    if (password.length < 1) {
      $("#password").next().show();
      return false;
    }
    if (IsPassword(password) == false) {
      $("#invalidpassword").show();
      return false;
    } else {
      alert("Successfully Logged In");
      $("form")[0].reset();
      window.location.href = "calculator.html";
      $("#invalidemail").hide();
      console.log("DOING");
      return true;
    }
  });
});

function IsEmail(emailid) {
  if (emailid.length < 1) return true;
  var regex = /[a-z0-9]+@northeastern.edu/;
  if (!regex.test(emailid)) {
    return false;
  } else {
    return true;
  }
}

function IsPassword(password) {
  var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%&*]).{8,}$/;
  if (!regex.test(password)) {
    return false;
  } else {
    return true;
  }
}

function Operations(operands) {
  var input1 = parseInt($("#input1").val());
  var input2 = parseInt($("#input2").val());

  let message = "Please Enter Numbers Only";
  let message2 = "Please Enter A Number";

  if (input1 != null) {
    $("#error-message").text(message2);
  } else if (input1.length != 0 && !$.isNumeric()) {
    $("#error-message").text(message);
    return false;
  } else {
    console.log(input1);
    $("#error-message").text("");
  }

  if (input2 != null) {
    $("#error-message1").text(message2);
  } else if (input2.length != 0 && !$.isNumeric(input2)) {
    $("#error-message1").text(message);
    return false;
  } else {
    $("#error-message1").hide();
  }

  var result = 0;

  switch (operands) {
    case "add":
      result = ((x, y) => {
        return x + y;
      })(input1, input2);
      break;

    case "sub":
      result = ((x, y) => {
        return x - y;
      })(input1, input2);
      break;

    case "mul":
      result = ((x, y) => {
        return x * y;
      })(input1, input2);
      break;

    case "div":
      result = ((x, y) => {
        return x / y;
      })(input1, input2);
      break;
  }

  $("#result").val(result);
}
