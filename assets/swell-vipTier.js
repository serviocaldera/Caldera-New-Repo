class vipTier
{
    constructor(tierList,benefits,baseTier,customer){
        this.benefits=benefits;
        this.customer=customer;
        this.tierList=[baseTier ,...tierList];
    }
    renderVipTier()
    {
        var spend;
        this.tierList.forEach((tier,index)=>{
            if(this.tierList.length!=(index+1))
            {
                spend=this.tierList[index+1].swellrequiredAmountSpentCents;
                spend=spend/100-1;
                spend="$"+spend;
            }
            if(index===1)
            {
              spend="-"+spend
            }   
            $(".tiers").append(
                $("<div>").addClass(`level l${index+1}`).append(
                    $("<div>").addClass("div-to-current-status"),
                      $("<div>").append(
                        $("<h3>").text(tier.name).addClass("title"),
                          this.tierList.length!=(index+1) ?
                        $("<p>").html(`Spend ${tier.swellrequiredAmountSpent}${spend}`) : $("<p>").html(`Spend ${tier.swellrequiredAmountSpent}+`))
                    ,$("<div>").append(
                      $("<p>").addClass("points-multiplier").text(`${tier.pointsMultiplier}x`),
                      $("<p>").text("Point Multiplier"))
                    ))
        })
        this.benefits.forEach(benefit=>{
            this.tierList.forEach((tier,index)=>{
                $(`.l${index+1}`).append(
                  benefit[`level${index+1}`]===1?
                    $("<div>").append($("<p>").html(benefit[`benefit`])):null)
            })
        })
        this.customerTier();
    }
    customerTier()
    {
        var currentTier=null;
        if(this.customer.created_at!==undefined)
        {
            if(this.customer.vipTier===null){
                currentTier=1;
            }
            else{
                currentTier=this.tierList.map(tier=>tier.name).indexOf(this.customer.vipTier.name)+1;
            } 
            $(".level").addClass("bright")
            $(`.tiers .level:nth-of-type(${currentTier})`).addClass("current-tier").removeClass("bright")
            $(`.tiers .level:nth-of-type(${currentTier}) div:nth-of-type(1)`).text("Your Current Status").addClass("current-tier-title")

        }
        this.renderSlickToMobile(currentTier)
    }    
    renderSlickToMobile(currentTier)
    {
      if(currentTier===null) {
          currentTier=1;
      }
      currentTier--;
      if(currentTier==0)
      {
        currentTier=3;
      }
      console.log(currentTier)
      var newscript = document.createElement('script');
      newscript.type = 'text/javascript';
      newscript.async = true;
      newscript.src = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
      (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
      if(window.location.href.indexOf("account")>-1)
      {
        setTimeout(function()
        {
         $(".tiers").slick({
           slidesToShow: 3,
           slidesToScroll: 1,
           responsive: [
           {
               breakpoint: 1441, 
               settings: 
               {
                initialSlide: currentTier,
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: '<span class="slick-next slick-arrow next-btn">></span>',
                prevArrow: '<span class="slick-prev slick-arrow prev-btn">></span>',
                }}
               ]});
        }, 300); 
      }
      else
      {
      setTimeout(function()
      {
         $(".tiers").slick({
           slidesToShow: 3,
           slidesToScroll: 1,
           responsive: [
           {
               breakpoint: 750, 
               settings: 
               {
                initialSlide: currentTier,
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: false,
                prevArrow: false,
                }}
               ]});
        }, 300); 
      }

  }
}