$(() => $("#updateButton").click(updateUser));

function updateUser() {
  const url = window.location.pathname;
  const userId = url.substring(url.lastIndexOf("/") + 1);
  console.log(userId);
  const phoneNumber = $("input[name=phone]")
    .val()
    .trim();
  const phone = parseInt(phoneNumber, 10);
  const user = {
    name: $("input[name=name]")
      .val()
      .trim(),
    email: $("input[name=email]")
      .val()
      .trim(),
    phone
  };

  const request = $.ajax({
    type: "put",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(user)
  });

  request.done(data => console.log(data));
  request.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
  });
}