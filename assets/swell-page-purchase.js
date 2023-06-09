const refer2 = new refer(definition.refferalForm,definition.shareLinks);

if (window.location.href.indexOf("thank_you")>-1 )
{
        $(document).on("swell:initialized", () => {
          console.log("swell:initialized");
          $(".purches").removeClass("hidden-purches");
          refer2.createReferForm();
          $(".purches .referral").append(
          	$("<img>").addClass("popup-logo"),
          	 $("<h1>").text("Thanks!").addClass("thank-you"),
              $("<img>").addClass("popup-close").click(() => {
              $(".purches").remove()
              }))
        });
        $(document).on("swell:setup", () => {
          console.log("swell:setup");
          refer2.showForm(swellAPI.getCustomerDetails());
        });
}    
