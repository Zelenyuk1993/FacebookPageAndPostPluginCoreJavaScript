//Function To switch between plugins
function checkPlagin() {
    var post = document.getElementById('Post');
    var page = document.getElementById('Page');
    var ambeddedPost = document.getElementById('ambedded-Post');
    var pagePlugin = document.getElementById('page-Plugin');

    if (post.checked) {
        pagePlugin.style.display = "none";
        ambeddedPost.style.display = "block";
    } else {
        ambeddedPost.style.display = "none";
        pagePlugin.style.display = "block";
    }
}


// Get the modal
var modal = document.getElementById('myModal');

// When the user clicks the button, open the modal Post and we obtain the generated code

function getCodePost() {
    var StepTwoPost1 = '<div class="fb-post" data-show-text="true" href="';
    var StepTwoPost2 = '"></div>';
    document.getElementById('StepTwoContent').value = (StepTwoPost1 + document.getElementById('postUrl').value + StepTwoPost2);
    modal.style.display = "block";
}

// When the user clicks the button, open the modal Page and we obtain the generated code
function getCodePage() {
    modal.style.display = "block";
    var dataTabsMess = "messages";
    var dataTabsTim = "timeline";
    var ShowFriend = document.getElementById('ShowFriend’sFace').checked
    var UseSmallHeader = document.getElementById('UseSmallHeader').checked
    var HideCoverPhoto = document.getElementById('HideCoverPhoto').checked

    var StepTwoPage1 = '<div class="fb-page" data-href="';
    var StepTwoPage2 = '" data-tabs="';
    var StepTwoPage3 = '" data-small-header="';
    var StepTwoPage4 = '" data-hide-cover="';
    var StepTwoPage5 = '" data-show-facepile="';
    var StepTwoPage6 = '"></div>';
    
    if (document.getElementById('ShowPagePost').checked == false) {
        document.getElementById('StepTwoContent').value = (StepTwoPage1 + document.getElementById('pageUrl').value + StepTwoPage2 + dataTabsTim + StepTwoPage3 + UseSmallHeader + StepTwoPage4 + HideCoverPhoto + StepTwoPage5 + ShowFriend + StepTwoPage6);
    }
    else {
        document.getElementById('StepTwoContent').value = (StepTwoPage1 + document.getElementById('pageUrl').value + StepTwoPage2 + dataTabsMess + StepTwoPage3 + UseSmallHeader + StepTwoPage4 + HideCoverPhoto + StepTwoPage5 + ShowFriend + StepTwoPage6);
    }
}

// When the user clicks on (x), close the modal
function closeGetCode() {
    modal.style.display = "none";
}