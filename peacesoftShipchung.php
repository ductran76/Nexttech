<?php include 'header.php'; ?>
<style>
    #ofertaItem .menuOver {
        visibility: inherit !important;
        opacity: 1 !important;
    }
    #ofertaItem .menuOut {
        transform: matrix3d(0, 0, -1, 0.004, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1) !important;
    }
</style>
<script>var selectedTemplate = "quoteTextTMP";</script>  
<div id="content">
    <article id="mainArticle" class="mainAbout">
        <div id="scrollingSection">
            <!--div id="headerSection">
                <h2 id="titleHeader2" class="titleHeader2">"Lorem Ipsum is simply dummy text of printing"</h2>
            </div-->
            <div id="fullText">            
                <h4 class="text-blue upper-text peacesoftname">Shipchung JSc</h4>
                <div class="peacesoftcontent">
                    <h4 class="peacesofttitle text-blue">1. Introduction</h4>

                    <p >
                        - Name: ShipChung Joint Stock Company <br/>
                        - Established year: 2012<br/>
                        - Chairman CEO: Mr. Nguyen Hoa Binh
                    </p>
                </div>
                <div class="peacesoftcontent">
                    <h4 class="peacesofttitle text-blue">2. Services</h4>
                    <p>Shipchung is aspiring company having mission to supply one stop solution for all shipping worries as shipping, insurances, Cash-On-Delivery (COD). We proudly provide cost-effective and professional service to all online merchants and couriers. Company helps to end up in frustration and serious problems while shopping and transporting goods, you will totally get peace of mind shopping .</p>
                </div>
                <div class="peacesoftcontent">
                    <h4 class="peacesofttitle text-blue">3. Partner</h4>
                    <p class="peacesoftcontent">
                        Vietnam Post</p>
                    <p class="peacesoftcontent">
                        Viettel Post
                    </p>
                    <p class="peacesoftcontent">
                        Kerry Express
                    </p>
                    <p class="peacesoftcontent">
                        Netco
                    </p>
                    EMS
                    <p class="peacesoftcontent">
                        Nasco
                    </p>
                </div>
            </div>
        </div>
    </article>
    <div id="mainHeader" class="headerAbout">   
        <h1 id="titleHeader" class="titleHeader">Structure</h1>
        <nav id="subNavi">
            <ul id="subNaviItems">
                <li class="liSub"><a onclick="GoToHomePage()" href="javascript:void(0)">Home</a></li>
                <li class="liSub"><span class="spaceSub"><img src="images/titleline.png" alt=""/></span></li>
                <li class="liSub"><a href="structure.php">Structure</a></li> 
                <li class="liSub"><span class="spaceSub"><img src="images/titleline.png" alt=""/></span></li>
                <li class="liSub"><a href="structurePeacesoft.php">PeaceSoft Group</a></li> 
                <li class="liSub"><span class="spaceSub"><img src="images/titleline.png" alt=""/></span></li>
                <li class="liSub active"><a class="active" href="structureShipchung.php">Peacesoft Shipchung</a></li> 
            </ul>
        </nav>
    </div>
</div>
<?php include 'footer.php'; ?>

