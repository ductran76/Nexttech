<?php include 'header.php'; ?>
<style>
    #ofertaItem2 .menuOver {
        visibility: inherit !important;
        opacity: 1 !important;
    }
    #ofertaItem2 .menuOut {
        transform: matrix3d(0, 0, -1, 0.004, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1) !important;
    }
</style>
<script>var selectedTemplate = "quoteTextTMP";</script>  
<div id="content"> 
    <article id="mainArticle" class="mainAbout">
        <div id="scrollingSection">
            <div id="fullText" class="responPadding">
                <div class="servicestitle">
                    <span class="servicelogo"><img src="images/service-ttol.png" alt=""/></span>
                    <span class="servicelink">
                        <a href="https://thanhtoanonline.vn/" target="_blank">www.thanhtoanonline.vn <img src="images/arrow.png" alt=""/></a>
                    </span>
                </div>

                <h4 class="text-blue upper-text peacesoftname serviceBreak">1. who we are</h4>

                <p class="peacesoftcontent">
                    Thanhtoanonline.vn is a website which provides users with online payment services available mostly on PC. It is a strategic product of Ngan Luong Joint Stock Company –A Leading Intermediate Protecting- Buyer Online Payment System in Vietnam
                    Nowadays, Thanhtoanonline.vn is trusted by millions of customers for their online payment needs. Furthermore, it is now linked to hundreds of smaller dealers to co- promote services and raise customers’ benefits.
                </p>

                <h4 class="text-blue upper-text peacesoftname serviceBreak">2. our feature</h4>

                <div class="compensation servicesDistance">
                    <div class="comp-same">
                        <div class="shortlineLeft"><img src="images/lineshort.png" alt=""/></div>
                        <div class="balance"><img src="images/balance.png" alt=""/></div>
                    </div>

                    <div class="comp-same">
                        <div class="longlineLeft"><img src="images/longline.png" alt=""/></div>
                        <div class="longlineRight"><img src="images/longline.png" alt=""/></div>
                        <div class="circleadd"><img src="images/circleadd.png" alt=""/></div>                        
                    </div>

                    <div class="comp-same">
                        <div class="shortlineRight"><img src="images/lineshort.png" alt=""/></div>
                        <div class="triangular"><img src="images/triangular.png" alt=""/></div>

                    </div>
                </div>   

                <div class="compensation">
                    <div class="comp-same">
                        <h5 class="peacesofttitle text-blue">People</h5> 
                        <p>Creative – Professional - Assertive<br/> Value customers’ benefits first.</p>
                        <div class="standline">
                            <img src="images/standline.png" alt="">
                        </div>
                    </div>

                    <div class="comp-same">
                        <h5 class="peacesofttitle text-blue">Process</h5> 
                        <p>Be Easy to Use, Manager & Follow<br/> Provide details - Guarantee to meet all customers’ rights and needs.</p>
                        <div class="standline">
                            <img src="images/standline.png" alt="">
                        </div>
                    </div>

                    <div class="comp-same">
                        <h5 class="peacesofttitle text-blue">Product</h5> 
                        <p>Be user- friendly & Money- Saving - Cover almost all online payment services.<br/> Be always at the most beneficial fees to customers</p>
                    </div>
                </div>
                <br/>
                <br/>

                <h4 class="text-blue upper-text peacesoftname serviceBreak">3. our commitment</h4>

                <!--Commitment1-->
                <div class="listCommitment">
                    <div class="leftCommitment">
                        <div class="circleLeft dotTimelineServices"></div>
                        <p class="nameCommitment"> User - Friendly</p>
                    </div>
                    <div class="rightCommitment">  
                        <div class="servicesExpand  trigger">
                            <a class="removeSpace" href="#content1"><img src="images/addbutton/thirdadd-button.png" alt=""></a>                              
                        </div>
                        <p class="textCommitment">Be committed to provide customers with the most helpful & cost-effective services online payment services. </p>
                    </div>
                </div>            

                <!--Commitment2-->
                <div class="listCommitment">
                    <div class="leftCommitment">
                        <p class="nameCommitment">High secure and quick</p>
                    </div>
                    <div class="rightCommitment">
                        <div class="servicesExpand  trigger">
                            <a class="removeSpace" href="#content2"><img src="images/addbutton/thirdadd-button.png" alt=""></a>                              
                        </div>
                        <p class="textCommitment">Transactions done quickly in the most time- saving & safest way.</p>
                    </div>
                </div>            

                <!--Commitment3-->
                <div class="listCommitment">
                    <div class="leftCommitment">
                        <p class="nameCommitment">Reliable</p>
                    </div>
                    <div class="rightCommitment">                    
                        <p class="textCommitment">A trusted 24/7 Customer- Supporting System to solve all problems timely.</p>
                    </div>
                </div> 

                <!--Try now-->
                <div class="listCommitment">
                    <div class="servicesButton">
                        <a class="clickTrynow" href="https://thanhtoanonline.vn/" target="_blank">TRY NOW</a>
                    </div>                                  
                </div>  


                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        </div>
    </article>
    <div id="mainHeader" class="headerAbout">   
        <h1 id="titleHeader" class="titleHeader">Services</h1>
        <nav id="subNavi">
            <ul id="subNaviItems">
                <li class="liSub"><a onclick="GoToHomePage()" href="javascript:void(0)">Home</a></li>
                <li class="liSub"><span class="spaceSub"><img src="images/titleline.png" alt=""/></span></li>
                <li class="liSub"><a href="services.php">Services</a></li> 
                <li class="liSub"><span class="spaceSub"><img src="images/titleline.png" alt=""/></span></li>
                <li class="liSub"><a href="servicesE-payment.php">E-Payment</a></li> 
                <li class="liSub"><span class="spaceSub"><img src="images/titleline.png" alt=""/></span></li>
                <li class="liSub active"><a class="active" href="servicesThanhtoanonline.php">Thanhtoanonline.vn</a></li> 
            </ul>
        </nav>
    </div>
</div>
<script type="text/javascript">
    $(".trigger").click(function () {
        var spanToToggle = $($(this).find("a").attr('href'));
        $(".toggle:visible").not(spanToToggle).hide();
        spanToToggle.slideToggle();
    });
</script>
<?php include 'footer.php'; ?>