const write_percentage = (percentage, earning) => {
  document.querySelector("#percentage").innerHTML = percentage;
  document.querySelector("#earning").innerHTML = earning;
};
const show_err = () => {
  document.querySelector("#amount").style.border = "2px solid red";
  document.querySelector(".errMessage").innerHTML =
    "Investment amount can not be lesser than minimum investment for the plan selected";
};
const disable_show_err = () => {
  document.querySelector("#amount").style.border = "2px solid #fff";
  document.querySelector(".errMessage").innerHTML = "";
};
let profit;

const handle_request = () => {
  // switch (plan.value) {
  //   case "Basic Plan":
  //     if (!amount.value) return;
  //     if (!return_time.value) return;
  //     if (parseInt(amount.value) < 500) return show_err();
  //     disable_show_err();
  //     if (return_time.value == "daily_return") {
  //       var percentage = "daily Percentage: 15%";
  //       var earning = `daily Earning: $${Math.round(
  //         (amount.value / 100) * 15
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 15);
  //       write_percentage(percentage, earning);
  //       break;
  //     } else {
  //       var percentage = "Weekly Percentage: 105%";
  //       var earning = `Weekly Earning: $${Math.round(
  //         (amount.value / 100) * 15 * 7
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 15 * 7);
  //       write_percentage(percentage, earning);
  //       break;
  //     }

  //   case "Premium Plan":
  //     if (!amount.value) return;
  //     if (!return_time.value) return;
  //     if (parseInt(amount.value) < 5000) return show_err();
  //     disable_show_err();
  //     if (return_time.value == "daily_return") {
  //       var percentage = "daily Percentage: 25%";
  //       var earning = `daily Earning: $${Math.round(
  //         (amount.value / 100) * 25
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 25);
  //       write_percentage(percentage, earning);
  //       break;
  //     } else {
  //       var percentage = "Weekly Percentage: 175%";
  //       var earning = `Weekly Earning: $${Math.round(
  //         (amount.value / 100) * 25 * 7
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 25 * 7);
  //       write_percentage(percentage, earning);
  //       break;
  //     }

  //   case "Standard Plan":
  //     if (!amount.value) return;
  //     if (!return_time.value) return;
  //     if (parseInt(amount.value) < 10000) return show_err();
  //     disable_show_err();
  //     if (return_time.value == "daily_return") {
  //       var percentage = "daily Percentage: 30%";
  //       var earning = `daily Earning: $${Math.round(
  //         (amount.value / 100) * 30
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 30);
  //       write_percentage(percentage, earning);
  //       break;
  //     } else {
  //       var percentage = "Weekly Percentage: 210%";
  //       var earning = `Weekly Earning: $${Math.round(
  //         (amount.value / 100) * 30 * 7
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 30 * 7);
  //       write_percentage(percentage, earning);
  //       break;
  //     }

  //   case "Enterprise Plan":
  //     if (!amount.value) return;
  //     if (!return_time.value) return;
  //     if (parseInt(amount.value) < 20000) return show_err();

  //     disable_show_err();
  //     if (return_time.value == "daily_return") {
  //       var percentage = "daily Percentage: 35%";
  //       var earning = `daily Earning: $${Math.round(
  //         (amount.value / 100) * 35
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 35);
  //       write_percentage(percentage, earning);
  //       break;
  //     } else {
  //       var percentage = "Weekly Percentage: 245%";
  //       var earning = `Weekly Earning: $${Math.round(
  //         (amount.value / 100) * 35 * 7
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 35 * 7);
  //       write_percentage(percentage, earning);
  //       break;
  //     }

  //   case "Ultimate Plan":
  //     if (!amount.value) return;
  //     if (!return_time.value) return;
  //     if (parseInt(amount.value) < 50000) return show_err();

  //     disable_show_err();
  //     if (return_time.value == "daily_return") {
  //       var percentage = "daily Percentage: 40%";
  //       var earning = `daily Earning: $${Math.round(
  //         (amount.value / 100) * 40
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 40);
  //       write_percentage(percentage, earning);
  //       break;
  //     } else {
  //       var percentage = "Weekly Percentage: 280%";
  //       var earning = `Weekly Earning: $${Math.round(
  //         (amount.value / 100) * 40 * 7
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 40 * 7);
  //       write_percentage(percentage, earning);
  //       break;
  //     }



  
  switch (plan.value) {
    case "Basic Plan":
      if (!amount.value) return;
      if (!plan.value) return;
      if (parseInt(amount.value) < 100) return show_err();
      disable_show_err();
      var percentage = "10% return after 24 hours";
      var earning = `Expected Earning: $${Math.round(
        (amount.value / 100) * 10,
      )}`;
      profit = Math.round((amount.value / 100) * 10);
      write_percentage(percentage, earning);
      // handle_submit_request({
      //   profit,
      //   plan: plan.value,
      //   amount: amount.value,
      //   completion_time: "7 days",
      // });
      break;
    // } else {
    //   var percentage = "Weekly Percentage: 105%";
    //   var earning = `Weekly Earning: $${Math.round(
    //     (amount.value / 100) * 15 * 7,
    //   )}`;
    //   profit = Math.round((amount.value / 100) * 15 * 7);
    //   write_percentage(percentage, earning);
    //   handle_submit_request({
    //     profit,
    //     plan: plan.value,
    //     amount: amount.value,
    //   });
    //   break;
    // }

    case "Premium Plan":
      if (!amount.value) return;
      if (!plan.value) return;
      if (parseInt(amount.value) < 5000) return show_err();
      disable_show_err();
      // if (plan.value == "daily_return") {
      var percentage = "20% return after 24 hours";
      var earning = `Expected Earning: $${Math.round(
        (amount.value / 100) * 20,
      )}`;
      profit = Math.round((amount.value / 100) * 20);
      write_percentage(percentage, earning);
      // handle_submit_request({
      //   profit,
      //   plan: plan.value,
      //   amount: amount.value,
      //   completion_time: "10 days",
      // });
      break;
    // } else {
    //   var percentage = "Weekly Percentage: 175%";
    //   var earning = `Weekly Earning: $${Math.round(
    //     (amount.value / 100) * 25 * 7,
    //   )}`;
    //   profit = Math.round((amount.value / 100) * 25 * 7);
    //   write_percentage(percentage, earning);
    //   handle_submit_request({
    //     profit,
    //     plan: plan.value,
    //     amount: amount.value,
    //   });
    //   break;
    // }

    case "Ultimate Plan":
      if (!amount.value) return;
      if (!plan.value) return;
      if (parseInt(amount.value) < 7000) return show_err();
      disable_show_err();
      // if (return_time.value == "daily_return") {
      var percentage = "30% return after 24 hours";
      var earning = `Expected Earning: $${Math.round(
        (amount.value / 100) * 30,
      )}`;
      profit = Math.round((amount.value / 100) * 30);
      write_percentage(percentage, earning);
      // handle_submit_request({
      //   profit,
      //   plan: plan.value,
      //   amount: amount.value,
      //   completion_time: "15 days",
      // });
      break;
    // } else {
    //   var percentage = "Weekly Percentage: 210%";
    //   var earning = `Weekly Earning: $${Math.round(
    //     (amount.value / 100) * 30 * 7,
    //   )}`;
    //   profit = Math.round((amount.value / 100) * 30 * 7);
    //   write_percentage(percentage, earning);
    //   handle_submit_request({
    //     profit,
    //     plan: plan.value,
    //     amount: amount.value,
    //   });
    //   break;
    // }

    // case "Promo Plan":
    //   if (!amount.value) return;
    //   if (!plan.value) return;
    //   if (parseInt(amount.value) < 50000) return show_err();
    //   disable_show_err();
    //   // if (return_time.value == "daily_return") {
    //   var percentage = "50% return after 15 days";
    //   var earning = `Expected Earning: $${Math.round(
    //     (amount.value / 100) * 50,
    //   )}`;
    //   profit = Math.round((amount.value / 100) * 50);
    //   write_percentage(percentage, earning);
    //   // handle_submit_request({
    //   //   profit,
    //   //   plan: plan.value,
    //   //   amount: amount.value,
    //   //   completion_time: "15 days",
    //   // });
    //   break;

    default:
      handle_keychange();
      break;
  }
};

const handle_keychange = () => {
  if (!amount.value) return display_error(amount);
  hide_error(amount);
  if (!plan.value) return display_error(plan);
  hide_error(plan);
  // if (!return_time.value) return display_error(return_time);

  // hide_error(return_time);
  handle_request();
};

//disable_show_err  
