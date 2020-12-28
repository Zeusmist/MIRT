function adjust()
{
    let content = document.getElementsByClassName('feedboxContent');
    let text = document.getElementsByClassName('feedboxText');
    let tags = document.getElementsByClassName('feedboxTags');
    let actions = document.getElementsByClassName('feedboxActions');
    let comment = document.getElementsByClassName('feedboxEnterComment');
    let commentContents = document.getElementsByClassName('feedboxCommentContents');
    let height = [];
    let textHeight = [];
    let tagTop = [];
    let actionsTop = [];
    let commentTop = [];
    let commentContentsTop = [];
    for(let i = 0; i < content.length; i++)
        {
            height[i] = content[i].scrollHeight;
            textHeight[i] = text[i].scrollHeight;
            tagTop[i] = textHeight[i] + 67;
            tagTop[i] = tagTop[i].toString();
            actionsTop[i] = height[i] + 55;
            actionsTop[i] = actionsTop[i].toString();
            commentTop[i] = height[i] + 80;
            commentTop[i] = commentTop[i].toString();
            commentContentsTop[i] = height[i] + 125;
            commentContentsTop[i] = commentContentsTop[i].toString();
            tags[i].style.top = tagTop[i] + "px";
            actions[i].style.top = actionsTop[i] + "px";
            comment[i].style.top = commentTop[i] + "px";
            commentContents[i].style.top = commentContentsTop[i] + "px";
        }
}
function height()
{
    let background = document.getElementsByClassName('feedbox');
    let content = document.getElementsByClassName('feedboxContent');
    let images = document.getElementsByClassName('feedboxImages');
    let actions = document.getElementsByClassName('feedboxActions');
    let comment = document.getElementsByClassName('feedboxEnterComment');
    let commentContents = document.getElementsByClassName('feedboxCommentContents');
    let compare = [];
    let height = [];
    let increase = [];
    for(let i = 0; i < background.length; i++)
        {
            if(content[i].scrollHeight > images[i].scrollHeight)
            {compare[i] = content[i].scrollHeight;}
            else if(images[i].scrollHeight > content[i].scrollHeight)
                {
                    compare[i] = images[i].scrollHeight;
                    if(images[i].scrollHeight > content[i].scrollHeight + 10)
                        {
                            compare[i] = compare[i] - 10;
                            if(images[i].scrollHeight > content[i].scrollHeight + 10 + actions[i].scrollHeight)
                                {
                                    compare[i] = compare[i] - actions[i].scrollHeight;
                                    if(images[i].scrollHeight > content[i].scrollHeight + 10 + actions[i].scrollHeight + 10)
                                        {
                                            compare[i] = compare[i] - 10;
                                            if(images[i].scrollHeight > content[i].scrollHeight + 10 + actions[i].scrollHeight + 10 + comment[i].scrollHeight)
                                                {
                                                    compare[i] = compare[i] - comment[i].scrollHeight;
                                                    if(images[i].scrollHeight > content[i].scrollHeight + 10 + actions[i].scrollHeight + 10 + comment[i].scrollHeight + 5)
                                                        {
                                                            compare[i] = compare[i] - 5;
                                                        }
                                                }
                                        }
                                }
                        }
                }
            height[i] = 10 + compare[i] + 10 + actions[i].scrollHeight + 10 + comment[i].scrollHeight + 5 + 10;
            height[i] = height[i].toString();
            background[i].style.height = height[i] + "px";
        }
}
function showComment()
{
    let feedbox = document.getElementsByClassName('feedbox');
    let button = document.getElementsByClassName('feedboxComment');
    let comments = document.getElementsByClassName('feedboxCommentContents');
    let normal = [];
    let increase = [];
    for (let i = 0; i < button.length; i++)
        {
            normal[i] = feedbox[i].scrollHeight;
            normal[i] = normal[i].toString();
            button[i].onclick = function()
            {
                if(!comments[i].style.display || comments[i].style.display == "none"){comments[i].style.display = "block";}
                else
                    {
                        comments[i].style.display = "none";
                        feedbox[i].style.height = normal[i] + "px";
                    }
                if(!comments[i].style.display || comments[i].style.display == "block")
                    {
                        increase[i] = feedbox[i].scrollHeight + 5;
                        increase[i] = increase[i].toString();
                        feedbox[i].style.height = increase[i] + "px";
                    }
            }
        }
}
function like()
{
    let up = document.getElementsByClassName('feedboxLikeImg');
    let down = document.getElementsByClassName('feedboxDislikeImg')
    let commentUp = document.getElementsByClassName('commentLikeImg');
    let commentDown = document.getElementsByClassName('commentDislikeImg');
    
    for (let i = 0; i < up.length; i++)
        {
            up[i].onclick = function()
            {
                if(!up[i].style.color || up[i].style.color == "black")
                    {
                        up[i].style.color = "green";
                        down[i].style.color = "black";
                    }
                else
                    {
                        up[i].style.color = "black"
                    }
            }
            down[i].onclick = function()
            {
                if(!down[i].style.color || down[i].style.color == "black")
                    {
                        down[i].style.color = "red"
                        up[i].style.color = "black"
                    }
                else
                    {
                        down[i].style.color = "black"
                    }
            }
        }
    for (let j = 0; j < commentUp.length; j++)
        {
            commentUp[j].onclick = function()
            {
                if(!commentUp[j].style.color || commentUp[j].style.color == "black")
                    {
                        commentUp[j].style.color = "green";
                        commentDown[j].style.color = "black";
                    }
                else
                    {
                        commentUp[j].style.color = "black"
                    }
            }
            commentDown[j].onclick = function()
            {
                if(!commentDown[j].style.color || commentDown[j].style.color == "black")
                    {
                        commentDown[j].style.color = "red"
                        commentUp[j].style.color = "black"
                    }
                else
                    {
                        commentDown[j].style.color = "black"
                    }
            }
        }
}
function mobile()
{
    let x = window.matchMedia("(max-width: 600px)");
    let text = document.getElementsByClassName('feedboxText');
    let topic = document.getElementsByClassName('feedboxTopic');
    let textTop = [];
    let tags = document.getElementsByClassName('feedboxTags');
    let tagTop = [];
    let images = document.getElementsByClassName('feedboxImages');
    let img1 = document.getElementsByClassName('FBI1');
    let img2 = document.getElementsByClassName('FBI2');
    let img3 = document.getElementsByClassName('FBI3');
    let content = document.getElementsByClassName('feedboxContent');
    let imageTop = [];
    
    let actions = document.getElementsByClassName('feedboxActions');
    let comment = document.getElementsByClassName('feedboxEnterComment');
    let actionTop = [];
    let commentTop = [];
    function doMobile(x)
    {
        for (let i = 0; i < images.length; i++)
        {
            textTop[i] = topic[i].scrollHeight + 30;
            textTop[i] = textTop[i].toString();
            tagTop[i] = text[i].scrollHeight + topic[i].scrollHeight + 35;
            tagTop[i] = tagTop[i].toString();
            imageTop[i] = content[i].scrollHeight + 15;
            imageTop[i] = imageTop[i].toString();
            actionTop[i] = content[i].scrollHeight + images[i].scrollHeight;
            actionTop[i] = actionTop[i].toString();
            commentTop[i] = Number(actionTop[i]) + actions[i].scrollHeight + 5;
            commentTop[i] = commentTop[i].toString();
            
            if (x.matches)
                {
                    text[i].style.top = textTop[i] + "px";
                    tags[i].style.top = tagTop[i] + "px";
                    images[i].style.width = "310px";
                    images[i].style.height = "205px";
                    images[i].style.right = "5px";
                    images[i].style.top = imageTop[i] + "px";
                    img1[i].style.width = "205px";
                    img1[i].style.height = "205px";
                    img2[i].style.width = "95px";
                    img2[i].style.height = "95px";
                    img2[i].style.left = "215px";
                    img3[i].style.width = "95px";
                    img3[i].style.height = "95px";
                    img3[i].style.left = "215px";
                    img3[i].style.top = "110px";
                    actions[i].style.top = actionTop[i] + "px";
                    comment[i].style.top = commentTop[i] + "px";
                }
        }
    }
    doMobile(x);
    x.addListener(doMobile);
//    x.addListener(adjust);
}








