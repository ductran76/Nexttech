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
            <div id="headerSection">
                <h2 id="titleHeader2" class="titleHeader2">"Lorem Ipsum is simply dummy text of printing"</h2>
            </div>
            <div id="fullText">            
                <h3 class="text-blue upper-text peacesoftname">Peacetech JSc</h3>
                <div class="peacesoftcontent">
                    <h4 class="peacesofttitle text-blue">1. Introduction</h4>

                    <p >
                        - Name: Lorem Ipsum is simply dummy text of printing <br/>
                        - Established year: 2000<br/>
                        - Chairman-CEO: Lorem Ipsum is simply dummy text of printing
                    </p>
                </div>
                <div class="peacesoftcontent">
                    <h4 class="peacesofttitle text-blue">2. Services</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div class="peacesoftcontent">
                    <h4 class="peacesofttitle text-blue">3. Partner</h4>
                    <p class="peacesoftcontent">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                <li class="liSub"><a href="structureWebshop.php">Weshop intl'</a></li> 
                <li class="liSub"><span class="spaceSub"><img src="images/titleline.png" alt=""/></span></li>
                <li class="liSub active"><a class="active" href="peacesoftPeacetechSubWeshop.php">Weshop</a></li> 
            </ul>
        </nav>
    </div>
</div>
<?php include 'footer.php'; ?>

