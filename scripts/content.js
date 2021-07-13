
{
    let tmp = document.getElementById("content_left");
    //tmp.removeChild(tmp.childNodes[1]);//可以这样删除

    let rawlist = [];
    let contentlist = [];
    for(let child = tmp.firstElementChild;child!=null;child=child.nextElementSibling){
        rawlist.push(child);
        contentlist.push(getContentFromDiv(child));
    }
    
    //console.log(tmp);
    //console.log(document.getElementsByClassName("result c-container new-pmd"))
    //console.log(contentlist);
    for(let i =0;i+1<contentlist.length;++i){
        if( contentlist[i]=="0")
            continue;
        for(let j =i+1; j<contentlist.length;++j){
            if(contentlist[j]=="0")
                continue;
                
            let res = lcs(contentlist[i],contentlist[j])/contentlist[j].length;
            if(res >= 0.9){
                console.log(i,j,res);
                //tmp.removeChild(tmp.childNodes[j+1]);
                rawlist[j].remove();
            }
        }
    }
    /*
    //import sjs from 'simhash-js';
    
    var simhash = new SimHash();
    console.log(contentlist[1]);
    console.log(contentlist[3]);
    var x = simhash.hash(contentlist[1]);
    var y = simhash.hash(contentlist[3]);
    var s = Comparator.similarity(x,y);
    console.log(s);
    */
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

function lcs(wordX, wordY) {
    let m = wordX.length;
    let n = wordY.length;
    let solution = [];
    //初始化一个二维数组，长度宽度分别为两个字符串的长度+1,内容为动态规划当前两分串的最长公共
    for (let i = 0; i <= m; ++i) {
      solution[i] = []; //{1}
      for (let j = 0; j <= n; ++j) {
        solution[i][j] = ""; //{2}
      }
    }
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (wordX[i - 1] == wordY[j - 1]) {
          //因为字母长度少一位，我们二维数组从1，1开始用
          //如果正好相同取左上方+1
          //仅有这种情况的时候才会根据对角线添加一个字符
          solution[i][j] = solution[i-1][j-1] + wordX[i-1]; //{3}
        } else {
          //如果不同分情况取左或上复制过来
          let a = solution[i - 1][j].length;
          let b = solution[i][j - 1].length;
          solution[i][j] = a > b ? solution[i-1][j] : solution[i][j - 1]; //{4}
        }
      }
    }
    //console.log(solution[m][n])
    return solution[m][n].length;
}