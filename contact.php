<?php include 'header.php'; ?>
<style>
    #kontaktItem .menuOver {
        visibility: inherit !important;
        opacity: 1 !important;
    }
    #kontaktItem .menuOut {
        transform: matrix3d(0, 0, -1, 0.004, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1) !important;
    }
</style>
<script>var selectedTemplate = "quoteTextTMP";</script>  
<div id="content">
    <article id="mainArticle" class="mainAbout">
        <div id="scrollingSection">
            <div id="headerSection"><h2 id="titleHeader2" class="titleHeader2">"We are looking forward to hearing from you."</h2></div>
            <div id="fullText">            
                <div class="formContent">
                    <div id="formContact">
                        <form class="" action="" method="post">
                            <div class="newsName upper-text text-blue">
                                <h3>/ Send the messenger</h3>
                            </div>
                            <div class="liner">
                                <div class="circleLeft"></div>
                                <div class="linerSpace"></div>
                                <div class="circleRight"></div>
                            </div>
                            <textarea class="" rows="13" placeholder="your messenger..."></textarea>
                            <div class="liner lineTextare">
                                <div class="circleLeft"></div>
                                <div class="linerSpace"></div>
                                <div class="circleRight"></div>
                            </div>
                            <div class="email">
                                <input type="email" class="" placeholder="your email..."/>
                                <div class="liner lineEmail">
                                    <div class="circleLeft"></div>
                                    <div class="linerSpace"></div>
                                    <div class="circleRight"></div>
                                </div>
                            </div>
                            <button type="submit" class=""><img src="images/send.png" alt=""/></button>
                        </form>
                    </div>
                    <div id="textContact">
                        <div class="newsName upper-text text-blue">
                            <h3>/ Address</h3>
                        </div>
                        <p class="companyName upper-text">NEXTTECH GROUP OF TECHNOPRENEURS</p>
                        <address>
                            <p>12A floor, VTC Online building, No. 18 Tam Trinh street, Hai Ba Trung district, Hanoi city, Vietnam.</p>
                            <p><span class="text-blue">M.</span> (+84 4) 36320 986</p>
                            <p><span class="text-blue">W.</span> <a href="#">www.nexttech.asia</a> / <a href="#">www.peacesoft.net</a></p>
                            <p><span class="text-blue">E.</span> pr@peacesoft.net</p>
                        </address>
                    </div>

                </div>    

            </div>

        </div>
    </article>
    <div id="mainHeader" class="headerAbout">   
        <h1 id="titleHeader" class="titleHeader">Contact</h1>
        <nav id="subNavi">
            <ul id="subNaviItems">
                <li class="liSub"><a onclick="GoToHomePage()" href="javascript:void(0)">Home</a></li>
                <li class="liSub"><span class="spaceSub"><img src="images/titleline.png" alt=""/></span></li>
                <li class="liSub active"><a class="active" href="contact.php">Contact</a></li>           
            </ul>
        </nav>
    </div>
</div>
<?php include 'footer.php'; ?>