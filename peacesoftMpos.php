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
                <h4 class="text-blue upper-text peacesoftname">mPos</h4>
                <div class="peacesoftcontent">
                    <h4 class="peacesofttitle text-blue">1. Introduction</h4>

                    <p >
                        - Name: Mpos Technology Joint Stock Company <br/>
                        - Established year: 2015<br/>
                        - Chairman CEO: Mr. Nguyen Huu Tuat
                    </p>
                </div>
                <div class="peacesoftcontent">
                    <h4 class="peacesofttitle text-blue">2. Services</h4>
                    <p>Mpos is a top tier company that provides the Mobile Point of Sale (mPOS) solution which enables businesses and indivituals to accept card payments: credit cards (Visa, MasterCard, JCB…), debit cards, bank cards, loyalty cards etc. The feartures differentiate mPos from others that: Quick register, simple procedure, acceptance of card payment anywhere at anytime, reduce the threat of credit card fraud, and ensure that customers feel safe, and especially competitive price.</p>
                </div>
                <div class="peacesoftcontent">
                    <h4 class="peacesofttitle text-blue">3. Partner</h4>
                    <p class="peacesoftcontent">
                        Mai Linh Group
                    </p>
                    <p class="peacesoftcontent">
                        Prostore
                    </p>
                    <p class="peacesoftcontent">
                        Medlatec Hospital
                    </p>
                    <p class="peacesoftcontent">
                        PTI insuarance
                    </p>
                    <p class="peacesoftcontent">
                        GYM store
                    </p>
                    <p class="peacesoftcontent">
                        NEXTOP
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
                <li class="liSub active"><a class="active" href="structurePeacesoft.php">Softpay intl'</a></li>
                <li class="liSub"><span class="spaceSub"><img src="images/titleline.png" alt=""/></span></li>
                <li class="liSub active"><a class="active" href="peacesoftMpos.php">Mpos</a></li>
            </ul>
        </nav>
    </div>
</div>
<?php include 'footer.php'; ?>

