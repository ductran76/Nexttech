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
                <h2 id="titleHeader2" class="titleHeader2">"Advantages come from our DNA."</h2>
            </div>
            <div id="fullText">
                <div class="center-image"><img src="images/logoOurDNA.png" alt=""/></div>

                <div class="about-content">    

                    <div class="row">
                        <div class="leftAchivement">
                            <div class="timeAchivement upper-text">
                                <h4>Team</h4>
                            </div>
                            <div class="textContentAchivement">
                                <p>TEAM = Together Everyone Achieve More.</p>
                                <p>Less me or more we. It could only be solidariry!</p>
                            </div>
                            <div class="liner">
                                <div class="circleLeft"></div>
                                <div class="linerSpace"></div>
                                <div class="circleRight"></div>
                            </div>
                        </div>
                        <div class="centerAchivement">
                            <div class="timeAchivement upper-text">
                                <h4>Passion</h4>
                            </div>
                            <div class="textContentAchivement">
                                <p>Choose a job you LOVE, so you won’t have to work a day in your life!</p>
                            </div>
                            <div class="liner">
                                <div class="circleLeft"></div>
                                <div class="linerSpace"></div>
                                <div class="circleRight"></div>
                            </div>
                        </div>
                        <div class="rightAchivement">
                            <div class="timeAchivement upper-text">
                                <h4>Teach and learn</h4>
                            </div>
                            <div class="textContentAchivement">
                                <p>A good teaching can inspire hope, ignite the imagination and instill a love of learning</p>
                            </div>
                            <div class="liner">
                                <div class="circleLeft"></div>
                                <div class="linerSpace"></div>
                                <div class="circleRight"></div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="leftAchivement">
                            <div class="timeAchivement upper-text">
                                <h4>Customer first</h4>
                            </div>
                            <div class="textContentAchivement">
                                <p>Creating new VALUES to customers and partners, without BORDER and LIMIT</p>
                            </div>
                            <div class="liner">
                                <div class="circleLeft"></div>
                                <div class="linerSpace"></div>
                                <div class="circleRight"></div>
                            </div>
                        </div>
                        <div class="centerAchivement">
                            <div class="timeAchivement upper-text">
                                <h4>Embrace changes</h4>
                            </div>
                            <div class="textContentAchivement">
                                <p>Organization’s capacity = the weakest point. So change yourself, or to be changed!</p>
                            </div>
                            <div class="liner">
                                <div class="circleLeft"></div>
                                <div class="linerSpace"></div>
                                <div class="circleRight"></div>
                            </div>
                        </div>
                        <div class="rightAchivement">
                            <div class="timeAchivement upper-text">
                                <h4>Initative</h4>
                            </div>
                            <div class="textContentAchivement">
                                <p>Take chance, take risk, take responsibility.</p>
                                <p>Awareness -> Mentality -> Action -> Result -> Awareness</p>
                            </div>
                            <div class="liner">
                                <div class="circleLeft"></div>
                                <div class="linerSpace"></div>
                                <div class="circleRight"></div>
                            </div>
                        </div>
                    </div>

                    <div class="row peopleOurDNA">
                        <div class="leftAchivement">
                            <div class="timeAchivement upper-text">
                                <h4>Creative</h4>
                            </div>
                            <div class="textContentAchivement">
                                <p>Great minds discuss ideas. Average minds discuss events. Small minds discuss people</p>
                            </div>
                            <div class="liner">
                                <div class="circleLeft"></div>
                                <div class="linerSpace"></div>
                                <div class="circleRight"></div>
                            </div>
                        </div>
                        <div class="rightAchivement">
                            <div class="timeAchivement upper-text">
                                <h4>Faithful</h4>
                            </div>
                            <div class="textContentAchivement">
                                <p>Faith is like Wi-Fi, It is invisible but it has the power to connect you to what you need</p>
                            </div>
                            <div class="liner">
                                <div class="circleLeft"></div>
                                <div class="linerSpace"></div>
                                <div class="circleRight"></div>
                            </div>
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
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
                <li class="liSub"><a  href="people.php">People</a></li>
                <li class="liSub"><span class="spaceSub"><img src="images/titleline.png" alt=""/></span></li>
                <li class="liSub active"><a class="active" href="peopleOurDNA.php">People DNA</a></li>
            </ul>
        </nav>
    </div>
</div>
<?php include 'footer.php'; ?>