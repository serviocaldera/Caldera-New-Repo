class refer
{
	constructor(formsRefer,shareLinks)
	{
		this.formsRefer=formsRefer;
		this.shareLinks=shareLinks;
	}
	createReferForm()
	{
		this.renderReferForm(this.formsRefer.newUserForm,this.onNextSubmit);
		this.renderReferForm(this.formsRefer.exictingUserForm,this.onSendSubmit);
	}
	renderReferForm(form,onsubmit)
	{
		$(".refer-form").append(
			$("<form>").addClass(form.formtype).append(
				$("<p>").text(form.text),
				$("<div>").addClass("refer-form-input").append(
				$("<p>").css("display","none"),	
				$("<input>",{
					type:"text",
					placeholder:form.placeolder
				}),
				$("<input>",{
					type:"submit",
					value:form.submittext
				}))).addClass("hiddenForm").submit((e)=>onsubmit(e)));
		if(form.formtype=="exicting")
			this.renderShareLinks();
	}
	renderShareLinks()
	{
		$(".exicting").append(
			$("<p>").addClass("share-links-p").text("You can also share your link with the buttons below."),
			$("<div>").addClass("shareLinks"));
			this.shareLinks.forEach(link=>{
				$(".shareLinks").append(
					$("<div>").addClass(link.class).append($("<a>",{href:link.href})
						.append($("<i>",{class:link.icon}),$("<label>").text(link.label))))
			})
			$(".swell-share-referral-sms").addClass("hidden-or-show")
			$(".swell-share-referral-copylink").click(this.copyLinkClicked)
	}
	copyLinkClicked()
	{
		$("body").append(
			$("<div>").addClass("popup-background").append(
			$("<div>").addClass("popup-body").append(
				$("<img>").addClass("popup-close").click(()=>{
					$(".popup-background").remove();}),	
					$("<div>").addClass("popup-text").append(				
						$("<h5>").text(swellAPI.getCustomerDetails().referralLink),
						$("<input>",{type:"button",value:"COPY LINK"}).click(()=>{
							navigator.clipboard.writeText(swellAPI.getCustomerDetails().referralLink)}),			
						$("<p>").text("Copy above link and share with your friends.")))))
	}
	onNextSubmit(e)
	{
		e.preventDefault();
		var userEmail= $(".new input");
		$(".error-email").remove();
		let onSuccess=function()
		{
			$(".new").removeClass("showForm").addClass("hiddenForm");
			$(".exicting").removeClass("hiddenForm").addClass("showForm");
		}
		let onError=function()
		{
			$(".refer-form-input").append(
				$("<p>").text("Please insert a valid email address").addClass("error-email"))
		}
		swellAPI.identifyReferrer(userEmail.val(),onSuccess,onError);
	}
	onSendSubmit(e)
	{
		e.preventDefault();
		var friendsEmail=$(".exicting input");
		var mails=friendsEmail.val().split(",");
				console.log(mails)
		$(".error-email").remove();
		let onSuccess=function()
		{
			$(".refer").append(
				$("<div>").addClass("refer-mail-send").append(
					$("<h3>").text("Thanks!"),
					$("<h6>").text("A referral email has been successfully sent."),
					$("<div>").text("✕").addClass("refer-mail-send-close").click(()=>{
						$(".refer-mail-send").remove();
					})))
		}
		let onError=function()
		{
			$(".refer-form-input").append(
				$("<p>").text("Please insert a valid email address").addClass("error-email"))
		}
		 swellAPI.sendReferralEmails(mails,onSuccess,onError)
	}
	showForm(customer)
	{
		if(customer.email!==undefined)
		{
			$(`.${this.formsRefer.exictingUserForm.formtype}`).removeClass("hiddenForm").addClass("showForm");
		}
		else
		{
			$(`.${this.formsRefer.newUserForm.formtype}`).removeClass("hiddenForm").addClass("showForm");
		}
	}
	renderHistoryRefer(referrals)
	{	
		$(".history").removeClass("hidden-history").addClass("show-history")
		$(".img-to-leptop").css("display","none")
		referrals.forEach(refer=>{
			$(".history table tbody").append(
				$("<tr>").append(
					$("<td>").text(refer.email),
					$("<td>").text(`${refer.completedAt!==null ? "Purchased" : "Invited"}`)))
		})
	}
}