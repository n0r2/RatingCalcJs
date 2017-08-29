/*
 *最終更新:2017/08/29 07:10
 *汚いけどjs初心者なのでゆるしてね！
 *プロの方、「こここうしたほうがいい」とかあったら遠慮なく叩いてください
 *／人◕ ‿‿ ◕人＼ 僕と契約して、魔法少女になってよ!
 */
 
const MUSIC = { //12+以上定数確定
    "6": ["Reach for the Stars", 12.3],
    "7": ["初音ミクの消失", 13.4],
    "19": ["DRAGONLADY", 13.2],
    "20": ["taboo tears you up", 12.8],
    "23": ["一触即発☆禅ガール", 12.1],
    "27": ["タイガーランペイジ", 12.5],
    "33": ["Blue Noise", 13],
    "35": ["Lapis", 12.4],
    "45": ["L9", 12.2],
    "47": ["六兆年と一夜物語", 12.1],
    "51": ["My First Phone", 12.8],
    "52": ["Cyberozar", 13.2],
    "53": ["Teriqma", 12.3],
    "61": ["GOLDEN RULE", 13.6],
    "62": ["名も無い鳥", 12.01],
    "63": ["Gate of Fate", 13.2],
    "64": ["今ぞ♡崇め奉れ☆オマエらよ！！～姫の秘メタル渇望～", 12.8],
    "66": ["明るい未来", 12.3],
    "69": ["The wheel to the right", 13.4],
    "70": ["STAR", 12.4],
    "71": ["Infantoon Fantasy", 12.3],
    "72": ["Genesis", 13.5],
    "73": ["MUSIC PЯAYER", 12.7],
    "76": ["luna blu", 13.4],
    "77": ["ケモノガル", 12.8],
    "82": ["Memories of Sun and Moon", 12.5],
    "83": ["ロストワンの号哭", 12.2],
    "88": ["The Concept of Love", 12.1],
    "90": ["L'épisode", 13.5],
    "92": ["最終鬼畜妹・一部声", 13],
    "93": ["蒼空に舞え、墨染の桜", 12.3],
    "94": ["セツナトリップ", 12.4],
    "95": ["砂漠のハンティングガール♡", 12.1],
    "101": ["Tango Rouge", 13],
    "102": ["Tuning Rangers", 12.5],
    "103": ["エンドマークに希望と涙を添えて", 13.7],
    "104": ["とーきょー全域★アキハバラ？", 12.5],
    "106": ["宛城、炎上！！", 13.8],
    "107": ["We Gonna Journey", 13.1],
    "108": ["The ether", 12.1],
    "118": ["腐れ外道とチョコレゐト", 12.0],
    "119": ["アウターサイエンス", 12.3],
    "120": ["四次元跳躍機関", 12.7],
    "121": ["東方妖々夢 ～the maximum moving about～", 12.7],
    "122": ["少女幻葬戦慄曲　～　Necro Fantasia", 12.7],
    "124": ["夏影", 12.2],
    "128": ["The Formula", 12.7],
    "131": ["チルドレンレコード", 12.7],
    "132": ["イカサマライフゲイム", 12.2],
    "134": ["HAELEQUIN (Original Remaster)", 13.8],
    "135": ["Vallista", 13.5],
    "136": ["Äventyr", 12.5],
    "137": ["Angel dust", 13.7],
    "138": ["conflict", 13.2],
    "141": ["閃鋼のブリューナク", 13.5],
    "142": ["Altale", 12.6],
    "144": ["Aragami", 13.5],
    "151": ["Alma", 12.6],
    "152": ["Gustav Battle", 13],
    "154": ["SAVIOR OF SONG", 12.8],
    "157": ["ギガンティックO.T.N", 12.9],
    "159": ["ジングルベル", 13.3],
    "161": ["私の中の幻想的世界観及びその顕現を想起させたある現実での出来事に関する一考察", 12.5],
    "165": ["ぼくらの16bit戦争", 12.8],
    "167": ["脳漿炸裂ガール", 12.7],
    "171": ["XL TECHNO", 12.4],
    "173": ["Halcyon", 13.3],
    "177": ["Jimang Shot", 12.7],
    "178": ["stella=steLLa", 12.7],
    "180": ["怒槌", 14],
    "187": ["患部で止まってすぐ溶ける～狂気の優曇華院", 13.1],
    "189": ["ひれ伏せ愚民どもっ！", 12.7],
    "190": ["エテルニタス・ルドロジー", 12.6],
    "192": ["Starlight Vision", 12.6],
    "193": ["Club Ibuki in Break All", 12.5],
    "194": ["Phantasm Brigade", 13],
    "195": ["永遠のメロディ", 12.3],
    "196": ["FREEDOM DiVE", 13.7],
    "197": ["Jack-the-Ripper◆", 13.1],
    "199": ["ハート・ビート", 12.1],
    "200": ["無敵We are one!!", 12.1],
    "201": ["Contrapasso -inferno-", 13.9],
    "202": ["GEMINI -C-", 13.1],
    "203": ["FLOWER", 12.0],
    "205": ["SNIPE WHOLE", 12.7],
    "208": ["SAMBISTA", 12.7],
    "210": ["アスノヨゾラ哨戒班", 12.4],
    "211": ["天樂", 12.2],
    "212": ["いろは唄", 12.1],
    "215": ["Falling Roses", 12.4],
    "216": ["放課後革命", 12.3],
    "218": ["サウンドプレイヤー", 12.4],
    "219": ["玩具狂奏曲 -終焉-", 14],
    "220": ["如月アテンション", 12.3],
    "222": ["Mr. Wonderland", 12.9],
    "223": ["カミサマネジマキ", 13],
    "225": ["ウミユリ海底譚", 12.1],
    "226": ["Garakuta Doll Play", 13.8],
    "228": ["このふざけた素晴らしき世界は、僕の為にある", 12.0],
    "229": ["紅華刑", 13.4],
    "230": ["Hyperion", 12.5],
    "232": ["Elemental Creation", 13.5],
    "233": ["アルストロメリア", 12.2],
    "234": ["Devastating Blaster", 13.9],
    "235": ["ファッとして桃源郷", 12.5],
    "240": ["夜咄ディセイブ", 12.6],
    "243": ["シュガーソングとビターステップ", 12.2],
    "244": ["回レ！雪月花", 12.3],
    "246": ["なるとなぎのパーフェクトロックンロール教室", 12.8],
    "248": ["Schrecklicher Aufstand", 13.9],
    "249": ["ドライヴ・オン・ザ・レインボー", 12.7],
    "250": ["Philosopher", 13.5],
    "251": ["Crazy ∞ nighT", 12.5],
    "252": ["愛迷エレジー", 12.3],
    "253": ["Warcry", 13.1],
    "256": ["札付きのワル　～マイケルのうた～", 12.7],
    "257": ["BOKUTO", 13],
    "258": ["TiamaT:F minor", 14],
    "259": ["Oshama Scramble! (Cranky Remix)", 13],
    "260": ["D.E.A.D.L.Y.", 12.4],
    "261": ["ロボットプラネットユートピア", 12.3],
    "262": ["Tidal Wave", 13.5],
    "264": ["My Dearest Song", 12.2],
    "265": ["猫祭り", 12.3],
    "266": ["ゲシュタルト！テスト期間！！", 12.7],
    "268": ["Bang Babang Bang!!!", 12.8],
    "270": ["エンヴィキャットウォーク", 12.3],
    "271": ["鬼KYOKAN", 12.8],
    "276": ["後夜祭", 12.3],
    "277": ["TRUST", 12.4],
    "281": ["ラクガキスト", 13.4],
    "283": ["神曲", 12.0],
    "284": ["幸せになれる隠しコマンドがあるらしい", 12.7],
    "289": ["ウソラセラ", 12.6],
    "291": ["Kronos", 12.4],
    "292": ["月に叢雲華に風", 12.1],
    "293": ["インビジブル", 13.2],
    "294": ["人生リセットボタン", 12.8],
    "295": ["響", 12.0],
    "296": ["かくしん的☆めたまるふぉ～ぜっ!", 12.1],
    "297": ["風仁雷仁", 12.3],
    "298": ["PRIVATE SERVICE", 12.6],
    "300": ["No Routine", 12.2],
    "301": ["白い雪のプリンセスは", 12.2],
    "302": ["Strahv", 13.3],
    "305": ["幻想のサテライト", 13.2],
    "306": ["凛として咲く花の如く", 12.2],
    "307": ["Paqqin", 12.7],
    "309": ["Rising Hope", 12.5],
    "310": ["覚醒楽奏メタフィクション", 13.3],
    "312": ["ぶいえす!!らいばる!!", 13.2],
    "317": ["Air", 13.2],
    "318": ["DataErr0r", 13],
    "319": ["Say A Vengeance", 12.6],
    "320": ["010", 12.6],
    "321": ["ERIS -Legend of Gaidelia-", 12.5],
    "322": ["Imperishable Night 2006 (2016 Refine)", 13.6],
    "323": ["Dreadnought", 13.6],
    "324": ["STAGER", 12.6],
    "325": ["Her Majesty", 12.6],
    "326": ["Sakura Fubuki", 12.5],
    "327": ["JULIAN", 12.7],
    "328": ["★LittlE HearTs★", 13.7],
    "329": ["STAIRWAY TO GENERATION", 12.3],
    "330": ["ドキドキDREAM!!!", 12.1],
    "331": ["猛進ソリストライフ！", 12.2],
    "332": ["空威張りビヘイビア", 12.3],
    "334": ["FLOATED CALM", 12.4],
    "335": ["Supersonic Generation", 13.4],
    "336": ["シジョウノコエ VOCALO ver.", 12.2],
    "338": ["SPICY SWINGY STYLE", 12.3],
    "340": ["Still", 12.5],
    "341": ["おまかせ！！トラブルメイ娘☆とれびちゃん", 13.1],
    "342": ["オススメ☆♂♀☆でぃすとぴあ", 13.5],
    "350": ["FEEL×ALIVE", 12.7],
    "351": ["ぶぉん！ぶぉん！らいど・おん！", 12.9],
    "352": ["Star☆Glitter", 12.1],
    "354": ["ラブリー☆えんじぇる!!", 12.3],
    "356": ["クローバー♣かくめーしょん", 12.3],
    "362": ["Face of Fact", 12.1],
    "368": ["おこちゃま戦争", 12.8],
    "370": ["虎視眈々", 12.4],
    "371": ["アンハッピーリフレイン", 12.7],
    "372": ["すきなことだけでいいです", 12.2],
    "373": ["デリヘル呼んだら君が来た", 12.4],
    "374": ["チュルリラ・チュルリラ・ダッダッダ！", 12.5],
    "376": ["ECHO", 12.2],
    "379": ["愛き夜道 feat. ランコ、雨天決行", 12.0],
    "381": ["Witches night", 12.0],
    "382": ["Help me, ERINNNNNN!! -Cranky remix-", 12.2],
    "383": ["仙酌絶唱のファンタジア", 12.6],
    "384": ["キュアリアス光吉古牌　－祭－", 12.4],
    "385": ["Evans", 13.4],
    "386": ["神威", 13.9],
    "388": ["GOODTEK", 13.3],
    "389": ["Name of oath", 13.5],
    "390": ["Bird Sprite", 12.2],
    "393": ["Dengeki Tube", 13.8],
    "396": ["あねぺったん", 12.1],
    "397": ["Like the Wind [Reborn]", 13.5],
    "399": ["最愛テトラグラマトン", 12.6],
    "402": ["悪戯", 12.2],
    "404": ["Barbed Eye", 12.0],
    "405": ["分からない", 13.2],
    "407": ["混沌を越えし我らが神聖なる調律主を讃えよ", 14.1],
    "409": ["Finite", 13.8],
    "410": ["MY LIBERATION", 12.7],
    "411": ["地球最後の告白を", 12.3],
    "414": ["We Gonna Party -Feline Groove Mix-", 13.3],
    "416": ["Through The Tower", 12.4],
    "417": ["Redo", 12.4],
    "427": ["儚きもの人間", 12.5],
    "430": ["ＧＯ！ＧＯ！ラブリズム♥ ～あーりん書類審査通過記念Ver.～", 12.1],
    "432": ["光線チューニング", 12.3],
    "433": ["立川浄穢捕物帳", 13],
    "434": ["眠れぬ夜君を想フ", 13.3],
    "435": ["JIGOKU STATION CENTRAL GATE", 13.3],
    "436": ["PinqPiq", 12.5],
    "437": ["トリスメギストス", 13.2],
    "438": ["WE GOTTA SOUL", 12.2],
    "439": ["哀しみ集め", 12.0],
    "440": ["キラメケ→Shoot it Now!", 12.9],
    "441": ["Kattobi KEIKYU Rider", 13.8],
    "504": ["Calamity Fortune", 13.7],
    "525": ["Paradisus-Paradoxum", 12.4],
    "526": ["ようこそジャパリパークへ", 12.1],
    "537": ["ハレ晴レユカイ", 12.0],
    "538": ["AMAZING MIGHTYYYY!!!!", 13.8],
    "540": ["砂の惑星 feat. HATSUNE MIKU", 12]
};

function musicRating(lv, score) {
    var a;
    if(score >= 1007500) {
        a = 2;
    } else if(score >= 1005000) {
        a = 1.5;
        a += (score-1005000) * (0.5/2500);
    } else if(score >= 1000000) {
        a = 1;
        a += (score-1000000) * (0.5/5000);
    } else if(score >= 975000) {
        a = 0;
        a += (score-975000) * (1/25000);
    } else if(score >= 925000) {
        a = -3;
        a += (score-925000) * (3/50000);
    } else {
        a = -5;
    }
    a = Math.floor(a*100);
    return Math.max((lv*100 + a) / 100, 0);
};

function createResultBox(text, result) {
    var d = document.createElement('div');
    d.classList.add('score_list');
    var left = document.createElement('div');
    var right = document.createElement('div');
    left.classList.add('score_list_left');
    left.textContent = text;
    right.classList.add('score_list_right');
    right.textContent = result;
    d.appendChild(left);
    d.appendChild(right);
    return d;
};

var url = location.href;
var ee = document.getElementsByClassName('w388 musiclist_box bg_master');
if(url.indexOf('MusicGenre.html') == -1) {
    alert("URLを確認してください。");
    end();
} else if(ee.length < 370) {
    alert("読み込みが完了していません。len="+ee.length);
    end();
}

var result = document.getElementById('scoreList_result');
var box01 = document.createElement('div');
box01.classList.add('box01', 'w420');
var box01_title = document.createElement('div');
box01_title.classList.add('box01_title');
box01_title.textContent = 'ベスト枠計算するやつ';
box01.appendChild(box01_title);
var narrow_block =  document.createElement('div');
narrow_block.classList.add('narrow_block', 'clearfix');
box01.appendChild(narrow_block);
var best1 = document.createElement('div');
best1.classList.add('box05', 'w400');
var best1_title = document.createElement('div');
best1_title.classList.add('genre');
best1_title.textContent = 'ベスト枠';
best1.appendChild(best1_title);
box01.appendChild(best1);
var best2 = document.createElement('div');
best2.classList.add('box05', 'w400');
var best2_title = document.createElement('div');
best2_title.classList.add('genre');
best2_title.textContent = 'ベスト枠外';
best2.appendChild(best2_title);
box01.appendChild(best2);
result.parentNode.insertBefore(box01, result.nextSibling);

var e = Array.prototype.slice.call(ee);
var id, score, rating, highscore;
var ratingList = [];
var ratingBox = {};
for(var i=0; i<e.length; i++) {
    id = e[i].firstElementChild.getAttribute('onclick').slice(54, -3);
    highscore = e[i].getElementsByClassName('play_musicdata_highscore');
    if (!(id in MUSIC)) continue;
    if (highscore.length == 0) continue;
    score = Number(e[i].getElementsByClassName('text_b')[0].textContent.split(',').join(""));
    rating = musicRating(MUSIC[id][1], score);
    ratingBox[id] = document.createElement('div');
    ratingBox[id].textContent = 'Rating: ';
    ratingBox[id].appendChild(highscore[0].getElementsByClassName('text_b')[0].cloneNode(true));
    ratingBox[id].lastChild.textContent = rating;
    highscore[0].appendChild(ratingBox[id]);
    ratingList.push({'pos':i, 'rating':rating});
}

ratingList.sort(function(a,b){
    if(a.rating>b.rating) return -1;
    if(a.rating < b.rating) return 1;
    return 0;
});

var bestRating = 0;
for(var i=0; i<ratingList.length; i++) {
    if(i<30) {
        bestRating += ratingList[i]['rating']*100;
        best1.appendChild(e[ratingList[i]['pos']]);
    } else {
        best2.appendChild(e[ratingList[i]['pos']]);
    }
}
bestRating /= 100;

toutatsu = (bestRating+ratingList[0]['rating']*10)/40;
toutatsu = Math.floor(toutatsu*100)/100
narrow_block.appendChild(createResultBox("合計",bestRating));
narrow_block.appendChild(createResultBox("平均",Math.floor(bestRating/30*100)/100));
narrow_block.appendChild(createResultBox("下限",ratingList[Math.min(29,ratingList.length-1)]['rating']));
narrow_block.appendChild(createResultBox("到達可能",toutatsu));
