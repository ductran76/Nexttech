<?php include 'header.php'; ?>
<style>
    #zalozycielkaItem .menuOver {
        visibility: inherit !important;
        opacity: 1 !important;
    }
    #zalozycielkaItem .menuOut {
        transform: matrix3d(0, 0, -1, 0.004, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1) !important;
    }
</style>
<script>var selectedTemplate = "quoteTextTMP";</script>  
<div id="content">
    <article id="mainArticle" class="mainAbout">
        <div id="scrollingSection">
            <div id="fullText">            
                <div class="recruitHeaderDetail">
                    <span class="recuitImage">
                        <a href="servicesChodientu.php"><img src="images/chodientuDetail.png" alt=""/></a>
                    </span>
                    <span class="recruitNameHeader">
                        <span class="upper-text text-blue lineRecuit recruitBig">Accountant and admin manager</span>
                        <span class="upper-text lineRecuit recruitBig">Chodientu.vn</span>
                        <span class="recruitMoreInfo">
                            <span class="lineRecuit">Deadline: 03/02/2016</span>
                            <span class="lineRecuit">Manager | <b><i>USD 600 - 1200</i></b></span>
                        </span>
                        <span class="recuitApplyButton">
                            <a href="#upload" class="upper-text recruitUpload"><i class="fa fa-file-text"></i> &nbsp; Apply now</a>
                        </span>
                    </span>               
                </div>

                <div  class="modal hiddenForm" id="upload" aria-hidden="true" onclick="closePopup();"></div>
                <div class="modal-dialog recruitForm">
                    <div class="modal-header">
                        <h2 class="textHeader">
                            <span class="upper-text lineRecuit text-color">Accountant and admin manager</span>
                            <span class="upper-text lineRecuit">Chodientu.vn</span>
                        </h2>
                        <a href="#" class="btn-close" aria-hidden="true"><img src="images/close.png" alt=''/></a>
                    </div>
                    <div class="modal-body">
                        <div class="inputInfo">
                            <span class="leftInput">
                                <input type="text" class="" placeholder="Name" required/>
                                <input type="text" class="" placeholder="Email" required/>
                            </span>
                            <span class="rightInput">
                                <input type="text" placeholder="Phone" class="" />
                            </span>
                        </div>
                        <div class="inputIntroduce">
                            <div class="textGuide">
                                <span class="leftGuide">Make your Pitch! (Recommend)</span>
                                <span class="rightGuide">0/300 Character</span>
                            </div>
                            <textarea class="inputText" rows="10" placeholder="Tell the employer why you are suited for this role"></textarea>
                        </div>                    
                    </div>
                    <div class="modal-footer">
                        <div class="buttonSubmit">
                            <input type="file" id="fileElem" multiple onchange="handleFiles(this.files)">
                            <button id="fileSelect">Upload your CV</button>
                            <a href="#success" class="seeMore">Send &nbsp; <img src="images/arrowtest.png" alt=""/></a>
                        </div>
                    </div>
                </div>

                <div  class="modal hiddenForm" id="success" aria-hidden="true" onclick="closePopup();"></div>
                <div class="modal-dialog recruitForm">
                    <div class="modal-header">                   
                        <a href="#" class="btn-close" aria-hidden="true"><img src="images/close.png" alt=''/></a>
                    </div>
                    <div class="modal-body">                   
                        <div class="emailSuccess">
                            <img src="images/emailSuccess.png" alt=""/>
                        </div>                 
                        <div class="emailLinerSuccess">
                            <div class="liner">
                                <div class="circleLeft"></div>
                                <div class="linerSpaceEmail"></div>
                                <div class="circleRight"></div>
                            </div>
                        </div>                 
                    </div>
                    <div class="modal-footer">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                </div>

                <div class="recruitDetailContent">
                    <div class="listRecruitContent">
                        <div class="text-blue upper-text titleRecruitContent">
                            <h4>1. Job Responsibilities</h4>
                        </div>
                        <div class="">
                            <ul class="subListContent">
                                <li>Develop components on MS .NET framework (Windows Forms/ASP.net/WPF/SL) for the global component market</li>
                                <li>Research and prototype the features for foreign product managers</li>
                                <li>Design and write the design document, specification document</li>
                                <li>Implement the features according to the design</li>
                                <li>Follow the company software development process</li>
                            </ul>
                        </div>
                    </div>

                    <div class="listRecruitContent">
                        <div class="text-blue upper-text titleRecruitContent">
                            <h4>2. Job Requirement</h4>
                        </div>
                        <div class="">
                            <ul class="subListContent">
                                <li>Computer sclence or an equivalent college/bachelor degree.</li>
                                <li>Having a good knowledge about data structure and algorithm is a big plus</li>
                                <li>Good at logical thinking and problem solving</li>
                                <li>Have experience in the following programming languages: C/C++/C#.</li>
                                <li>Have OOP thinking and skill.</li>
                                <li>Computer sclence or an equivalent college/bachelor degree.</li>
                                <li>Having a good knowledge about data structure and algorithm is a big plus</li>
                            </ul>
                        </div>
                    </div>

                    <div class="listRecruitContent">
                        <div class="text-blue upper-text titleRecruitContent">
                            <h4>3. Benefits</h4>
                        </div>
                        <div class="">
                            <ul class="subListContent">
                                <li>Dynamic and conducive working environment working with global branch offices.</li>
                                <li>Attractive salary and bonus packages.</li>
                                <li>Annual bonuses base on Labor Law and GrapeCity policy </li>
                                <li>Being part of a professional team in an international company with strong growth potential.</li>                            
                            </ul>
                        </div>
                    </div>

                    <div class="listRecruitContent">
                        <div class="text-blue upper-text titleRecruitContent">
                            <h4>4. About our company</h4>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>

                    <a href="" class="linkCompany">See more information about this company <img src="images/arrow.png" alt=""></a>
                    <div class="downloadButton">
                        <a href="" class="recruitDownloadButton"><span class="breakKey">Download</span><span> Vietnamese Version</span></a>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        </div>
    </article>
    <div id="mainHeader" class="headerAbout">   
        <h1 id="titleHeader" class="titleHeader">Recruitment</h1>
        <nav id="subNavi">
            <ul id="subNaviItems">
                <li class="liSub"><a onclick="GoToHomePage()" href="javascript:void(0)">Home</a></li>
                <li class="liSub"><span class="spaceSub"><img src="images/titleline.png" alt=""/></span></li>
                <li class="liSub"><a href="recruitment.php">Recruitment</a></li>           
                <li class="liSub"><span class="spaceSub"><img src="images/titleline.png" alt=""/></span></li>
                <li class="liSub active"><a class="active" href="recruitmentDetail.php">Details</a></li>           
            </ul>
        </nav>
    </div>
</div>
<script>
    function click(el) {
        var evt = document.createEvent('Event');
        evt.initEvent('click', true, true);
        el.dispatchEvent(evt);
    }

    document.querySelector('#fileSelect').addEventListener('click', function (e) {
        var fileInput = document.querySelector('#fileElem');
        fileInput.click();
    }, false);

    function handleFiles(files) {
        alert('Upload CV thành công!');
    }
    $(".recruitCollapse").hide();
    $(".recruitFind").click(function () {
        $(this).find('.removeSpace2').toggleClass('displayFlex');
        $(this).find('.removeSpace').toggle();
        $(this).find('.offerQuestion').toggleClass('displayBlock');
        $(this).find('.recruitCollapse').slideToggle('slow');

    });
</script>
<?php include 'footer.php'; ?>