
    function copyAddress() {
      var shippingFirstName = document.getElementById("shipping-first-name");
      var shippingLastName = document.getElementById("shipping-last-name");
      var shippingStreet = document.getElementById("shipping-street");
      var shippingCity = document.getElementById("shipping-city");
      var shippingState = document.getElementById("shipping-state");
      var shippingZip = document.getElementById("shipping-zip");
      var shippingPhone = document.getElementById("shipping-phone");

      var billingFirstName = document.getElementById("billing-first-name");
      var billingLastName = document.getElementById("billing-last-name");
      var billingStreet = document.getElementById("billing-street");
      var billingCity = document.getElementById("billing-city");
      var billingState = document.getElementById("billing-state");
      var billingZip = document.getElementById("billing-zip");
      var billingPhone = document.getElementById("billing-phone");

      billingFirstName.value = shippingFirstName.value;
      billingLastName.value = shippingLastName.value;
      billingStreet.value = shippingStreet.value;
      billingCity.value = shippingCity.value;
      billingState.value = shippingState.value;
      billingZip.value = shippingZip.value;
      billingPhone.value = shippingPhone.value;
    }

    function copyBillingToShipping() {
      var shippingFirstName = document.getElementById("shipping-first-name");
      var shippingLastName = document.getElementById("shipping-last-name");
      var shippingStreet = document.getElementById("shipping-street");
      var shippingCity = document.getElementById("shipping-city");
      var shippingState = document.getElementById("shipping-state");
      var shippingZip = document.getElementById("shipping-zip");
      var shippingPhone = document.getElementById("shipping-phone");

      var billingFirstName = document.getElementById("billing-first-name");
      var billingLastName = document.getElementById("billing-last-name");
      var billingStreet = document.getElementById("billing-street");
      var billingCity = document.getElementById("billing-city");
      var billingState = document.getElementById("billing-state");
      var billingZip = document.getElementById("billing-zip");
      var billingPhone = document.getElementById("billing-phone");

      shippingFirstName.value = billingFirstName.value;
      shippingLastName.value = billingLastName.value;
      shippingStreet.value = billingStreet.value;
      shippingCity.value = billingCity.value;
      shippingState.value = billingState.value;
      shippingZip.value = billingZip.value;
      shippingPhone.value = billingPhone.value;
    }
