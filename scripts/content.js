
console.log(123);

{
    let tmp = document.getElementById("content_left");
    //tmp.removeChild(tmp.childNodes[1]);//可以这样删除

    let contentlist = [];
    for(let child = tmp.firstElementChild;child!=null;child=child.nextElementSibling){
        contentlist.push(getContentFromDiv(child));
    }
    
    console.log(document.getElementById("content_left"));
    //console.log(document.getElementsByClassName("result c-container new-pmd"))
    console.log(contentlist);
}
function getContentFromDiv(thisdiv){
    let result='0';
    try{
        let tmp = thisdiv.getElementsByClassName('c-abstract');
        result = tmp[0].innerText;
        //console.log(result);
    }catch(err){
        //console.log(err);
    }
    
    return result;
}

