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
                    <span class="servicelogo"><img src="images/chodientulogo.png" alt=""/></span>
                    <span class="servicelink">
                        <a href="https://www.chodientu.vn/" target="_blank">www.chodientu.vn <img src="images/arrow.png" alt=""/></a>
                    </span>
                </div>

                <h4 class="text-blue upper-text peacesoftname serviceBreak">1. who we are</h4>

                <p class="peacesoftcontent">
                    ChoDienTu.vn is one of the leading e-commerce websites in Vietnam with over 4 million products, 12 million members and more than VND 200 billion GMV per month.
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
                        <p> Team of young, dynamic with having much experience in the field of e-commerce in Vietnam</p>
                        <div class="standline">
                            <img src="images/standline.png" alt="">
                        </div>
                    </div>

                    <div class="comp-same">
                        <h5 class="peacesofttitle text-blue">Process</h5>
                        <p> Continuous improvement to bring  best values to users and partners</p>
                        <div class="standline">
                            <img src="images/standline.png" alt="">
                        </div>
                    </div>

                    <div class="comp-same">
                        <h5 class="peacesofttitle text-blue">Product</h5>
                        <p>Facilitating millions of families in Vietnam shopping easy with reasonable price.</p>
                    </div>
                </div>
                <br/>
                <br/>

                <h4 class="text-blue upper-text peacesoftname serviceBreak">3. our commitment</h4>

                <!--Commitment1-->
                <div class="listCommitment">
                    <div class="leftCommitment">
                        <div class="circleLeft dotTimelineServices"></div>
                        <p class="nameCommitment">Shopping Easily</p>
                    </div>
                    <div class="rightCommitment">  
                        <div class="servicesExpand  trigger">
                            <a class="removeSpace" href="#content1"><img src="images/addbutton/thirdadd-button.png" alt=""></a>                              
                        </div>
                        <p class="textCommitment">Bringing friendly and easy shopping experience for our customers with diverse choices</p>
                    </div>
                </div>            

                <!--Commitment2-->
                <div class="listCommitment">
                    <div class="leftCommitment">
                        <p class="nameCommitment">Safe and Convenient</p>
                    </div>
                    <div class="rightCommitment">
                        <div class="servicesExpand  trigger">
                            <a class="removeSpace" href="#content2"><img src="images/addbutton/thirdadd-button.png" alt=""></a>                              
                        </div>
                        <p class="textCommitment">Providing policies to protect users as well as after-sales service dedicated to supply peace of mind shopping for customers
                        </p>
                    </div>
                </div>            

                <!--Commitment3-->
                <div class="listCommitment">
                    <div class="leftCommitment">
                        <p class="nameCommitment">Win-win Partnership</p>
                    </div>
                    <div class="rightCommitment">                    
                        <p class="textCommitment">Constantly providing utilization and cooperation programs in the spirit win-win partnership to the seller as well as our suppliers for long-term partnerships</p>
                    </div>
                </div> 

                <!--Try now-->
                <div class="listCommitment">
                    <div class="servicesButton">
                        <a class="clickTrynow" href="https://www.chodientu.vn/" target="_blank">TRY NOW</a>
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
                <li class="liSub"><a href="servicesE-commerce.php">E-Commerce</a></li> 
                <li class="liSub"><span class="spaceSub"><img src="images/titleline.png" alt=""/></span></li>
                <li class="liSub active"><a class="active" href="servicesChodientu.php">Chodientu.vn</a></li> 
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