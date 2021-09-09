<?php include 'header.php'; ?>
<style>
    #inicjatywyItem .menuOver {
        visibility: inherit !important;
        opacity: 1 !important;
    }
    #inicjatywyItem .menuOut {
        transform: matrix3d(0, 0, -1, 0.004, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1) !important;
    }
</style>
<script>var selectedTemplate = "quoteTextTMP";</script> 
<div id="content">
    <article id="mainArticle" class="mainAbout">
        <div id="scrollingSection">
            <div id="headerSection">
                <h2 id="titleHeader2" class="titleHeader2">"Let us do the heavy lifting for you."</h2>
            </div>
            <div id="fullText">
                <div class="listPeople listAbout">
                    <div class="leftAbout">
                        <a href="peopleOurDNA.php">
                            <div class="typeAbout">
                                <h3>Our DNA</h3>
                            </div>
                            <br/>
                            <br/>
                            <div class="hoverAbout">
                                <img src="images/addbutton/thirdadd-button.png" alt="">
                            </div>
                            <br/>
                            <div class="borderAbout">
                                <div class="circleLeft"></div>
                                <div class="shortLineLeft"></div>
                                <div class="shortLineRight"></div>
                                <div class="circleRight"></div>                           
                            </div>
                        </a>
                    </div>
                    <div class="centerAbout">
                        <a href="peopleTreatmentSystem.php">
                            <div class="typeAbout">
                                <h3>Treatment system</h3>
                            </div>
                            <br/>
                            <br/>
                            <div class="hoverAbout"><img src="images/addbutton/thirdadd-button.png" alt=""></div>
                            <br/>
                            <div class="borderAbout">
                                <div class="circleLeft"></div>
                                <div class="shortLineLeft"></div>
                                <div class="shortLineRight"></div>
                                <div class="circleRight"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </article>
    <div id="mainHeader" class="headerAbout">   
        <h1 id="titleHeader" class="titleHeader">People</h1>
        <nav id="subNavi">
            <ul id="subNaviItems">
                <li class="liSub"><a onclick="GoToHomePage()" href="javascript:void(0)">Home</a></li>
                <li class="liSub"><span class="spaceSub"><img src="images/titleline.png" alt=""/></span></li>
                <li class="liSub active"><a class="active" href="people.php">People</a></li>           
            </ul>
        </nav>
    </div>

</div>
<?php include 'footer.php'; ?>