<?php include 'header.php'; ?>

<div id="content">
    <script>
        var selectedTemplate = "homePageTMP";
    </script>

    <div id="addbotton" class="wait-show">
        <div id="listPlusButton">
            <div class="firstadd plusButton toggle-nav" id="firstadd-button">  
                <div class="motive effectOne">
                    <a href="#" class="change-hover" onclick="showHideDiv('firstadd')"></a>
                </div>
                <div id="firstadd"  class="plusContent">
                    <div class="svg-wrapper">
                        <svg height="60" width="180">
                        <rect class="shape" height="60" width="180" />
                        <div class="r-addbg seaddbg">
                            <div class="upText limitWidth">Manhthuongquan.VN</div>
                            <div class="lowText linkUpper">
                                <span class="btnLink"><a href="#popfirstadd" ><img src="images/btnLink.png" alt=""/></a></span>
                                <span class="textSmallLimit">#ePayment</span>                                
                            </div>   
                        </div>   
                    </div>
                </div>
            </div>
            <div class="secondadd plusButton toggle-nav" id="secondadd-button">
                <div class="motive effectTwo">
                    <a href="#" class="change-hover" onclick="showHideDiv('secondadd')"></a>
                </div>
                <div id="secondadd"  class="plusContent">
                    <div class="svg-wrapper">
                        <svg height="60" width="180">
                        <rect class="shape" height="60" width="180" />
                        <div class="r-addbg eaddbg">
                            <div class="upText limitWidth">CHODIENTU.VN</div>
                            <div class="lowText linkUpper">
                                <span class="btnLink"><a href="#popsecondadd" ><img src="images/btnLink.png" alt=""/></a></span>
                                <span class="textSmallLimit">#eCommerce</span>                                
                            </div>                         
                        </div>
                    </div> 
                </div>

            </div>
            <div class="thirdadd plusButton toggle-nav" id="thirdadd-button">
                <div class="motive effectThree">
                    <a href="#" class="change-hover" onclick="showHideDiv('thirdadd')"></a>
                </div>
                <div id="thirdadd" style="display:none;" class="plusContent">
                    <div class="svg-wrapper">
                        <svg height="60" width="180">
                        <rect class="shape" height="60" width="180" />
                        <div class="r-addbg naddbg">
                            <div class="upText limitWidth">ebay.VN</div>
                            <div class="lowText linkUpper">
                                <span class="btnLink"><a href="#popthirdadd" ><img src="images/btnLink.png" alt=""/></a></span>
                                <span class="textSmallLimit">#eCommerce</span>
                            </div>                        
                        </div>
                    </div>  
                </div>
            </div>
            <div class="fourthadd plusButton toggle-nav" id="fourthadd-button">
                <div class="motive effectFour">
                    <a href="#" class="change-hover" onclick="showHideDiv('fourthadd')"></a>
                </div>
                <div id="fourthadd" style="display:none;" class="plusContent">
                    <div class="svg-wrapper">
                        <svg height="60" width="180">
                        <rect class="shape" height="60" width="180" />
                        <div class="r-addbg taddbg">
                            <div class="upText limitWidth">nganluong.VN</div>
                            <div class="lowText linkUpper">
                                <span class="btnLink"><a href="#popfouradd" ><img src="images/btnLink.png" alt=""/></a></span>
                                <span class="textSmallLimit">#ePayment</span>                           
                            </div>                         
                        </div>
                    </div> 
                </div>
            </div>
            <div class="fifthadd plusButton toggle-nav" id="fifthadd-button">
                <div class="motive effectFive">
                    <a href="#" class="change-hover" onclick="showHideDiv('fifthadd')"></a>
                </div>
                <div id="fifthadd" style="display:none;" class="plusContent">
                    <div class="svg-wrapper">
                        <svg height="60" width="180">
                        <rect class="shape" height="60" width="180" />
                        <div class="r-addbg eaddbg">
                            <div class="upText limitWidth">weshop.VN</div>
                            <div class="lowText linkUpper">
                                <span class="btnLink"><a href="#popfiveadd" ><img src="images/btnLink.png" alt=""/></a></span>
                                <span class="textSmallLimit">#eCommerce</span>                                
                            </div>                         
                        </div>
                    </div> 
                </div>

            </div>
            <!--                <div class="sixthadd plusButton toggle-nav toggle-nav" id="sixthadd-button">
                                <div class="motive">
                                    <a href="#" class="change-hover" onclick="showHideDiv('sixthadd')"></a>
                                </div>
                                <div id="sixthadd" style="display:none;" class="plusContent">
                                    <div class="svg-wrapper">
                                        <svg height="60" width="180">
                                        <rect class="shape" height="60" width="180" />
                                        <div class="addbg faddbg">
                                            <div class="upText limitWidth">Shipchung.VN</div>
                                            <div class="lowText linkUpper">                               
                                                <span class="textSmallLimit">#eLogistic</span>  
                                                <span class="btnLink"><a href="#popsixadd" ><img src="images/btnLink.png" alt=""/></a></span>
                                            </div>                         
                                        </div>
                                        </svg>
                                    </div>
                                </div>
                            </div>-->
            <div class="seventhadd plusButton toggle-nav" id="seventhadd-button">
                <div class="motive effectFive">
                    <a href="#" class="change-hover" onclick="showHideDiv('seventhadd')"></a>
                </div>
                <div id="seventhadd" style="display:none;" class="plusContent">  
                    <div class="svg-wrapper">
                        <svg height="60" width="180">
                        <rect class="shape" height="60" width="180" />
                        <div class="addbg saddbg">
                            <div class="upText limitWidth">boxme.VN</div>
                            <div class="lowText linkUpper">
                                <span class="textSmallLimit">#eLogistic</span>  
                                <span class="btnLink"><a href="#popsevenadd" ><img src="images/btnLinkright.png" alt=""/></a></span>
                            </div>                         
                        </div>
                    </div>
                </div>
            </div>
            <div class="eighthadd plusButton toggle-nav" id="eighthadd-button">
                <div class="motive effectThree">
                    <a href="#" class="change-hover" onclick="showHideDiv('eighthadd')"></a>
                </div>
                <div id="eighthadd" style="display:none;" class="plusContent">
                    <div class="svg-wrapper">
                        <svg height="60" width="180">
                        <rect class="shape" height="60" width="180" />
                        <div class="addbg taddbg">
                            <div class="upText limitWidth">mpos.VN</div>
                            <div class="lowText linkUpper">                                
                                <span class="textSmallLimit">#ePayment</span> 
                                <span class="btnLink"><a href="#popeightadd" ><img src="images/btnLinkright.png" alt=""/></a></span>
                            </div>                            
                        </div>
                    </div> 
                </div>
            </div>
            <div class="ninthadd plusButton toggle-nav" id="ninthadd-button">
                <div class="motive effectFour">
                    <a href="#" class="change-hover" onclick="showHideDiv('ninthadd')"></a>
                </div>
                <div id="ninthadd" style="display:none;" class="plusContent">
                    <div class="svg-wrapper">
                        <svg height="60" width="180">
                        <rect class="shape" height="60" width="180" />
                        <div class="addbg faddbg">
                            <div class="upText limitWidth">vimo.VN</div>
                            <div class="lowText linkUpper">                                
                                <span class="textSmallLimit">#ePayment </span>  
                                <span class="btnLink"><a href="#popnineadd" ><img src="images/btnLinkright.png" alt=""/></a></span>
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
            <div class="tenthadd plusButton toggle-nav" id="tenthadd-button">
                <div class="motive effectOne">
                    <a href="#" class="change-hover" onclick="showHideDiv('tenthadd')"></a>
                </div>
                <div id="tenthadd" style="display:none;" class="plusContent">
                    <div class="svg-wrapper">
                        <svg height="60" width="180">
                        <rect class="shape" height="60" width="180" />
                        <div class="addbg fifeaddbg">
                            <div class="upText limitWidth">Shipchung.VN</div>
                            <div class="lowText linkUpper">                                
                                <span class="textSmallLimit">#eLogistic </span>
                                <span class="btnLink"><a href="#poptenadd" ><img src="images/btnLinkright.png" alt=""/></a></span>
                            </div>                         
                        </div>
                    </div>   
                </div>

            </div>
            <div class="eleventhadd plusButton toggle-nav" id="eleventhadd-button">
                <div class="motive effectThree">
                    <a href="#" class="change-hover" onclick="showHideDiv('eleventhadd')"></a>
                </div>
                <div id="eleventhadd" style="display:none;" class="plusContent">
                    <div class="svg-wrapper">
                        <svg height="60" width="180">
                        <rect class="shape" height="60" width="180" />
                        <div class="addbg siaddbg">
                            <div class="upText limitWidth">Thanhtoanonline.VN</div>
                            <div class="lowText linkUpper">                                
                                <span class="textSmallLimit">#ePayment </span>
                                <span class="btnLink"><a href="#popeleventadd" ><img src="images/btnLinkright.png" alt=""/></a></span>
                            </div>                         
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Call Popup-->
    <!--Pop 1-->
    <div class="remodal" data-remodal-id="popfirstadd" role="dialog" aria-labelledby="modal1Title" aria-describedby="modal1Desc">
        <a href="#" data-remodal-action="close" aria-label="Close" class="btn-close" aria-hidden="true">
            <img src="images/close.png" alt=''/>
        </a>
        <div>
            <h1 id="modal1Title">Manhthuongquan.vn</h1>
            <div class="modal-body" id="modal1Desc">
                <!--                    <h2>Lorem Ipsum is simply dummy text of the printing</h2>-->
                <p>Manh Thuong Quan is one of the latest addition to startup portfolio of NextTech. This our serious take into FinTech industry in Vietnam where is like other emerging markets, possess lot of potential for FinTech startups due to the lack of banking service penetrate, particularly when it comes to personal finance service where there is a big gap between demand and supply.</p>
            </div>
            <div class="modal-footer">
                <a data-remodal-action="close"  href="servicesManhthuongquan.php">See more &nbsp; <img src="images/arrowtest.png" alt=""/></a>
            </div>
        </div>
    </div>

    <!--Pop2-->
    <div class="remodal" data-remodal-id="popsecondadd" role="dialog" aria-labelledby="modal1Title" aria-describedby="modal1Desc">
        <a href="#" data-remodal-action="close" aria-label="Close" class="btn-close" aria-hidden="true">
            <img src="images/close.png" alt=''/>
        </a>
        <div>
            <h1 id="modal2Title">CHODIENTU.VN</h1>
            <div class="modal-body" id="modal2Desc">
                <!--<h2>Lorem Ipsum is simply dummy text of the printing</h2>-->
                <p>ChoDienTu.vn is one of the largest e-marketplace which presensented earliest in Vietnam. We offer millions of products and meet the demand from millions of users every month from 63 provinces and cities across the country. We put ourselves forward to become one of the preferred e-marketplace in Vietnam</p>
            </div>
            <div class="modal-footer">
                <a data-remodal-action="close" href="servicesChodientu.php">See more &nbsp; <img src="images/arrowtest.png" alt=""/></a>
            </div>
        </div>
    </div>

    <!--Pop3-->
    <div class="remodal" data-remodal-id="popthirdadd" role="dialog" aria-labelledby="modal1Title" aria-describedby="modal1Desc">
        <a href="#" data-remodal-action="close" aria-label="Close" class="btn-close" aria-hidden="true">
            <img src="images/close.png" alt=''/>
        </a>
        <div>
            <h1 id="modal3Title">ebay.vn</h1>
            <div class="modal-body" id="modal3Desc">
                <!--<h2>Lorem Ipsum is simply dummy text of the printing</h2>-->
                <p>eBay VietNam - Your Guide to Online Shopping Worldwide eBay Vietnam is proud to be an official representative of eBay in VietNam. Known as the very first ecommercial website in Vietnam, our mission is to be the most favorite destination for customers who want to buy top brand products and unique items from popular ecommerce websites from all over the world.</p>
            </div>
            <div class="modal-footer">
                <a data-remodal-action="close" href="servicesEbay.php">See more &nbsp; <img src="images/arrowtest.png" alt=""/></a>
            </div>
        </div>
    </div>

    <!--Pop4-->
    <div class="remodal" data-remodal-id="popfouradd" role="dialog" aria-labelledby="modal1Title" aria-describedby="modal1Desc">
        <a href="#" data-remodal-action="close" aria-label="Close" class="btn-close" aria-hidden="true">
            <img src="images/close.png" alt=''/>
        </a>
        <div>
            <h1 id="modal4Title">nganluong.vn</h1>
            <div class="modal-body" id="modal4Desc">
                <!--<h2>Lorem Ipsum is simply dummy text of the printing</h2>-->
                <p>Ngân Lượng is the best payment gateway in Vietnam with 57000+ sellers and 35+ million transactions. Ngân Lượng provides solution for e-Commerce and digital goods with variety of payment methods, multi-platform intergrations and specially low with no hidden fee. Buyers choose Ngân Lượng when shopping online because of our features: escrowed payment, 100% refund protection, industry security standards, 24/7 Support</p>
            </div>
            <div class="modal-footer">
                <a data-remodal-action="close" href="servicesNganluong.php">See more &nbsp; <img src="images/arrowtest.png" alt=""/></a>
            </div>
        </div>
    </div>

    <!--Pop5-->
    <div class="remodal" data-remodal-id="popfiveadd" role="dialog" aria-labelledby="modal1Title" aria-describedby="modal1Desc">
        <a href="#" data-remodal-action="close" aria-label="Close" class="btn-close" aria-hidden="true">
            <img src="images/close.png" alt=''/>
        </a>
        <div>
            <h1 id="modal5Title">Weshop.com.vn</h1>
            <div class="modal-body" id="modal5Desc">
                <!--<h2>Lorem Ipsum is simply dummy text of the printing</h2>-->
                <p>WeShop is the easiest way for cross-border shopping, which provides step by step how to shop and ship. Being the unique and exceptional, WeShop provides a full-cycle (from A to Z) cross-border retail shopping experience to end-buyers with a comprehensive and innovative import-buying facilitation process. This differentiates Weshop from other websites Shopping online at Weshop, you will not miss out on special offers and daily deals from popular brands as hot deals, latest items, a variety of ideal products being updated daily. GET STARTED NOW </p>
            </div>
            <div class="modal-footer">
                <a data-remodal-action="close" href="servicesWebshop.php">See more &nbsp; <img src="images/arrowtest.png" alt=""/></a>
            </div>
        </div>
    </div>

    <!--Pop6-->
    <div class="remodal" data-remodal-id="popsixadd" role="dialog" aria-labelledby="modal1Title" aria-describedby="modal1Desc">
        <a href="#" data-remodal-action="close" aria-label="Close" class="btn-close" aria-hidden="true">
            <img src="images/close.png" alt=''/>
        </a>
        <div>
            <h1 id="modal6Title">CHODIENTU.VN6</h1>
            <div class="modal-body" id="modal6Desc">
                <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                <p>And typesetting Industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tookj a gelley of type
                    and scrambled it to make a type speclmen book. It has suvived not only five centuries, but also the leap into electronic typesetting, remaining essen-tially unchanged. It was popularised in the 1960s
                    with the release of Leatraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker Including versions of Lorem Ipsum.</p>
            </div>
            <div class="modal-footer">
                <a data-remodal-action="close" href="#">See more &nbsp; <img src="images/arrowtest.png" alt=""/></a>
            </div>
        </div>
    </div>

    <!--Pop7-->
    <div class="remodal" data-remodal-id="popsevenadd" role="dialog" aria-labelledby="modal1Title" aria-describedby="modal1Desc">
        <a href="#" data-remodal-action="close" aria-label="Close" class="btn-close" aria-hidden="true">
            <img src="images/close.png" alt=''/>
        </a>
        <div>
            <h1 id="modal7Title">boxme.vn</h1>
            <div class="modal-body" id="modal7Desc">
                <!--<h2>Lorem Ipsum is simply dummy text of the printing</h2>-->
                <p>Established in 2014, BoxMe Fulfillment Service JSC, a startup backed by Vietnam’s E-commerce company PeaceSoft.With 10,000 m2 for 5 warehouses, 24 hours Express delivery in metro areas and successful partnership with the top couriers in Vietnam as Viettel Post, EMS, Kerry Express, Nasco …which allow us to be one of the country’s leading suppliers in providing customized fulfillment solutions through best practices in the industry.</p>
            </div>
            <div class="modal-footer">
                <a data-remodal-action="close" href="servicesBoxme.php">See more &nbsp; <img src="images/arrowtest.png" alt=""/></a>
            </div>
        </div>
    </div>

    <!--Pop8-->
    <div class="remodal" data-remodal-id="popeightadd" role="dialog" aria-labelledby="modal1Title" aria-describedby="modal1Desc">
        <a href="#" data-remodal-action="close" aria-label="Close" class="btn-close" aria-hidden="true">
            <img src="images/close.png" alt=''/>
        </a>
        <div>
            <h1 id="modal8Title">mpos.vn</h1>
            <div class="modal-body" id="modal8Desc">
                <!--<h2>Lorem Ipsum is simply dummy text of the printing</h2>-->
                <p>mPOS.vn is a leading Mobile Point of Sale (mPOS) solution and Payment Facilitator company in Viet Nam. mPOS.vn solution enables businesses and individuals to accept credit cards (Visa, MasterCard, JCB…), debit cards, bank cards, loyalty cards and all other kinds of card payments anywhere at anytime. Our mPOS solution is highly secure and has achieved numerous certifications to give merchants and customers peace of mind when processing payments</p>
            </div>
            <div class="modal-footer">
                <a data-remodal-action="close" href="servicesMpos.php">See more &nbsp; <img src="images/arrowtest.png" alt=""/></a>
            </div>
        </div>
    </div>

    <!--Pop9-->
    <div class="remodal" data-remodal-id="popnineadd" role="dialog" aria-labelledby="modal1Title" aria-describedby="modal1Desc">
        <a href="#" data-remodal-action="close" aria-label="Close" class="btn-close" aria-hidden="true">
            <img src="images/close.png" alt=''/>
        </a>
        <div>
            <h1 id="modal9Title">Vimo.vn</h1>
            <div class="modal-body" id="modal9Desc">
                <!--<h2>Lorem Ipsum is simply dummy text of the printing</h2>-->
                <p>VIMO.VN – Mobile E-Wallet – Instant P2P Money Transfer Mobile E-Wallet Vimo.vn is A Co-Branding Product of MobiFone. Vimo.vn provides customers with the most user- friendly services with the cheapest payment fees: Instant - Safe - Secure - Cheapest P2P Money Transfer;  Up-to-10% Discounted Airtime Topup and Scratch Card; Handy Online Bill Payment; 0% Hire- Purchase Payment; Immediately Money- Scratch Card Changing, etc</p>
            </div>
            <div class="modal-footer">
                <a data-remodal-action="close" href="servicesVimo.php">See more &nbsp; <img src="images/arrowtest.png" alt=""/></a>
            </div>
        </div>
    </div>

    <!--Pop10-->
    <div class="remodal" data-remodal-id="poptenadd" role="dialog" aria-labelledby="modal1Title" aria-describedby="modal1Desc">
        <a href="#" data-remodal-action="close" aria-label="Close" class="btn-close" aria-hidden="true">
            <img src="images/close.png" alt=''/>
        </a>
        <div>
            <h1 id="modal10Title">Shipchung.vn</h1>
            <div class="modal-body" id="modal10Desc">
                <!--<h2>Lorem Ipsum is simply dummy text of the printing</h2>-->
                <p>We’ve been one of Vietnam’s leading E-commerce shipping solutions for online shoppers, and have established a corporate culture designed for increasing performance success. Once you ship with Shipchung, you’ll agree: We deliver Vietnam.With all these achievements, we were honored to get the prize “Best of E-Commerce Shipping Gateway Solution” – Morning Star Award 2015 (4 star). </p>
            </div>
            <div class="modal-footer">
                <a data-remodal-action="close" href="servicesShipchung.php">See more &nbsp; <img src="images/arrowtest.png" alt=""/></a>
            </div>
        </div>
    </div>

    <!--Pop11-->
    <div class="remodal" data-remodal-id="popeleventadd" role="dialog" aria-labelledby="modal1Title" aria-describedby="modal1Desc">
        <a href="#" data-remodal-action="close" aria-label="Close" class="btn-close" aria-hidden="true">
            <img src="images/close.png" alt=''/>
        </a>
        <div>
            <h1 id="modal11Title">Thanhtoanonline.vn</h1>
            <div class="modal-body" id="modal11Desc">
                <!--<h2>Lorem Ipsum is simply dummy text of the printing</h2>-->
                <p>Thanhtoanonline.vn – A website provides customers with many user- friendly online payment services of high- rate discounts such as: 4-10% Discounted Airtime Topup and Scratch Card Service, 5-12% Discounted Game Cards, Releasing Physical & Unphysical Visa Card only with VND 9,900, etc. </p>
            </div>
            <div class="modal-footer">
                <a data-remodal-action="close" href="servicesThanhtoanonline.php">See more &nbsp; <img src="images/arrowtest.png" alt=""/></a>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript" src="js/home.js"></script>

<?php include 'footer.php'; ?>