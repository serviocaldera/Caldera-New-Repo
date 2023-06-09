class redeem{
	constructor(redeemptionOption){
		this.redeemptionOption=redeemptionOption;
	}
	renderRedeemptionOption()
	{

		this.redeemptionOption.forEach((option,index)=>{
			if(option.discount_type==="recharge_discount_fixed_amount")
			{		
				$(".redeemOptions").append(
				$("<div>").addClass("redeemOption").addClass("swell-redemption-link")
				.attr({"data-redemption-option-id": option.id}).append(
					$("<h3>").text(`${option.prettyDiscount} OFF`),
					$("<p>").text(`${option.amount} Points`)))
			}
		})
	}
}