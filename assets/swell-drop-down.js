$(document).ready(function() {
    $(document).one("swell:setup", function() {
      setupCartBasedCoupons(".cart-fixed-amount");  
      swellAPI.refreshEmbeds()
      if(localStorage.getItem("discountApplied")==="true"){
        $(".nav-desktop__cart-trigger--icon").click();
        localStorage.setItem("discountApplied","false")
      }
    });
    $('body').on('click', '.swell-apply', function() {
      redemptionOptionId = $(".cart-fixed-amount option:selected").attr("data-redemption-option-id");
      console.log(redemptionOptionId)
      redemptionOption = swellAPI.findActiveRedemptionOptionById(redemptionOptionId);
      console.log(redemptionOption.amount)
      if(redemptionOption.amount <= spapi.customer.adjusted_points_balance){
        result = swellAPI.buyMultipleWithPoints([redemptionOption], function(){
          localStorage.setItem("discountApplied" , true)
          location.reload();
      });
      }
      else
      {
        alert("Sorry, you don't have enough points to redeem.");
      }
    });
  });
  (function() {
    window.SwellConfig = window.SwellConfig || {};
    SwellConfig.Redemption = {
      opts: {
        templates: {
          redemptionOption: '<li class=\ "swell-redemption-option\"> \n <div class=\ "swell-buy-product-btn swell-redemption-link slide-img-holder swell-redemption-option-content\"\n data-redemption-option-id=\ "<%= redemption.id %>\">\n <div class=\ "slide-img-holder\"> <img src=\ "<%= redemption.background_image_url %>\">\n </div> \n <div class=\ "swell-redemption-option-value\"> <%= redemption.name %> </div> \n <div class=\ "swell-redemption-option-cost swell-buy-product-btn\" data-variant-id=\ "<%= redemption.applies_to_id %>\"\n> <%= redemption.cost_text %> </div> \n </div>\n </li>'
        }
      }
    };
  }).call(this);
  $(".swell-item-remove").click(onDiscountRemove);
  function setupCartBasedCoupons (containerSelector) {
    var redemptions = spapi.activeRedemptionOptions;
    redemptions.forEach(function(redemption) {
      if(redemption.discount_type == "cart_fixed_amount") {
        id = redemption.id;
        name = redemption.name;
        cost_text = redemption.cost_text;
        $(containerSelector).append('<option class="swell-cart-discount-redemption-btn swell-redemption-option" data-redemption-option-id="' + id + '"> <div class="swell-redemption-option-content swell-buy-product-btn" data-redemption-option-id="' + id + '"> <div class="content-holder"> <span> ' + name + '</span> <span> ' + cost_text + ' </span> </div> </div></option>');
      }
    });
  }
  function onDiscountRemove() {
    $(".swell-cart-product").remove();
    Swell.Cart.removePointRedemptionIdFromCart(Swell.Cart.getAllCustomerRedemptions()[Swell.Cart.getAllCustomerRedemptions().length-1].id, () => {
      location.reload();
    });
  }