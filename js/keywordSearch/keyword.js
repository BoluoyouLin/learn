let keywords = ['董允','此皆良实','三分']
let text = '先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。'+
'宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。'+
'侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。'

function buildTree(keywords) {
    var tblCur = {},
    key, str_key, Length, j, i;
    var tblRoot = tblCur;
    
    for(j = keywords.length - 1; j >= 0; j -= 1) {
    str_key = keywords[j];
    Length = str_key.length;
    for(i = 0; i < Length; i += 1) {
     key = str_key.charAt(i);
     if(tblCur.hasOwnProperty(key)) {
     tblCur = tblCur[key];
     } else {
     tblCur = tblCur[key] = {};
     }
    }
    tblCur.end = true; //最后一个关键字
    tblCur = tblRoot;
    }
    return tblRoot;
   }
   
   function search(content,tblRoot) {
    var tblCur,
    p_star = 0,
    n = content.length,
    p_end,
    match, //是否找到匹配
    match_key,
    match_str,
    arrMatch = [], //存储结果
    arrLength = 0; //arrMatch的长度索引
    
    while(p_star < n) {
    tblCur = tblRoot; //回溯至根部
    p_end = p_star;
    match_str = "";
    match = false;
    do {
     match_key = content.charAt(p_end);
     if(!(tblCur = tblCur[match_key])) { //本次匹配结束
     p_star += 1;
     break;
     } else {
     match_str += match_key;
     }
     p_end += 1;
     if(tblCur.end) //是否匹配到尾部
     {
     match = true;
     }
    } while (true);
    
    if(match) { //最大匹配
     arrMatch[arrLength] = { 
     key: match_str,
     begin: p_star - 1,
     end: p_end
     };
     arrLength += 1;
     p_star = p_end;
    }
    }
    return arrMatch;
   } 

   function execute(){
       let tblRoot = buildTree(keywords);
       let result = search(text,tblRoot)
       console.log(result)
   }