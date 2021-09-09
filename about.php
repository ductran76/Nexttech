<?php include 'header.php'; ?>
<style>
    #instytutItem .menuOver {
        visibility: inherit !important;
        opacity: 1 !important;
    }
    #instytutItem .menuOut {
        transform: matrix3d(0, 0, -1, 0.004, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1) !important;
    }
</style>
<script>var selectedTemplate = "quoteTextTMP";</script>  
<div id="content">
    <article id="mainArticle" class="mainAbout">    
        <div id="scrollingSection">
            <div id="headerSection"><h2 id="titleHeader2" class="titleHeader2">"Good merchandise, even hidden, soon finds buyers."</h2></div>
            <div id="fullText">

                <div class="listAbout">
                    <div class="leftAbout">
                        <a href="aboutOurJourney.php">
                            <div class="typeAbout"><h3>Our Journey</h3></div><br><br>
                            <div class="hoverAbout"><img src="images/addbutton/thirdadd-button.png" alt=""></div><br>
                            <div class="borderAbout">
                                <div class="circleLeft"></div>
                                <div class="shortLineLeft"></div>
                                <div class="shortLineRight"></div>
                                <div class="circleRight"></div>                           
                            </div>
                        </a>
                    </div>
                    <div class="centerAbout">
                        <a href="aboutOpenletter.php">
                            <div class="typeAbout"><h3>Open letter</h3></div><br><br>
                            <div class="hoverAbout"><img src="images/addbutton/thirdadd-button.png" alt=""></div><br>
                            <div class="borderAbout">
                                <div class="circleLeft"></div>
                                <div class="shortLineLeft"></div>
                                <div class="shortLineRight"></div>
                                <div class="circleRight"></div>
                            </div>
                        </a>
                    </div>
                    <div class="rightAbout">
                        <a href="aboutAchivement.php">
                            <div class="typeAbout"><h3>Achievement</h3></div><br><br>
                            <span class="hoverAbout"><img src="images/addbutton/thirdadd-button.png" alt=""></span><br>
                            <div class="borderAbout">
                                <div class="circleLeft"></div>
                                <div class="shortLineLeft"></div>
                                <div class="shortLineRight"></div>
                                <div class="circleRight"></div>
                            </div>
                        </a>
                    </div>
                </div>

                <br/>
                <br/>

                <div class="listAbout">
                    <div class="leftAbout"></div>
                    <div class="centerAbout">
                        <a href="aboutPartner.php">
                            <div class="typeAbout"><h3>Partner</h3></div><br><br>
                            <div class="hoverAbout"><img src="images/addbutton/thirdadd-button.png" alt=""></div><br>
                            <div class="borderAbout">
                                <div class="circleLeft"></div>
                                <div class="shortLineLeft"></div>
                                <div class="shortLineRight"></div>
                                <div class="circleRight"></div>
                            </div>
                        </a>
                    </div>
                    <div class="rightAbout"></div>
                </div>

            </div>
        </div>
    </article>
    <div id="mainHeader" class="headerAbout">   
        <h1 id="titleHeader" class="titleHeader">ABOUT US</h1>
        <nav id="subNavi">
            <ul id="subNaviItems">
                <li class="liSub"><a onclick="GoToHomePage()" href="javascript:void(0)">Home</a></li>
                <li class="liSub"><span class="spaceSub"><img src="images/titleline.png" alt=""/></span></li>
                <li class="liSub active"><a class="active" href="about.php">About us</a></li>           
            </ul>
        </nav>
    </div>
</div>


<?php include 'footer.php'; ?>