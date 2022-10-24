"use strict";var SSN=(()=>{var u=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var w=u(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});var le=e=>{if(typeof e=="number"&&(e=e.toString()),typeof e=="string")return e.length;throw new Error("Cannot pad "+e)};O.default=(e,t)=>`${"0".repeat(t-le(e))}${e}`});var k=u(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.default=(e,{length:t=15}={})=>{if(typeof e=="number"&&(e=e.toString()),typeof e!="string")throw new Error(`Input must be a string or a ${t} digits number`);if(e=e.replace(/[^0-9ab]/gi,""),e.length!==t)throw new Error(`Input must be ${t} characters long`);if(!/^\d{6}[0-9abAB]\d*$/.test(e))throw new Error("French Social Security Number only allows digits, except for the letters A and B in 7th position");return e}});var M=u(_=>{"use strict";var z=_&&_.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_,"__esModule",{value:!0});var se=z(w()),ce=z(k()),de=e=>{let t=0;return e=e.replace(/a/gi,()=>(t+=1e6,"0")),e=e.replace(/b/gi,()=>(t+=2e6,"0")),parseInt(e)-t};_.default=e=>{let t=de((0,ce.default)(e,{length:13}));return(0,se.default)(97-t%97,2)}});var F=u(p=>{"use strict";var fe=p&&p.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(p,"__esModule",{value:!0});var he=fe(M());p.default=(e,t)=>{if(t!=="98"){let r=(0,he.default)(e);if(t!=r)throw new Error(`Control key does not match (expected ${r})`)}}});var D=u(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});j.default=e=>Object.assign({unknown:!0},e?{error:e}:{})});var Y=u(m=>{"use strict";var _e=m&&m.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(m,"__esModule",{value:!0});var pe=_e(D());m.default=e=>{switch(Number(e)){case 1:case 3:case 7:return{name:"male",title:"M"};case 2:case 4:case 8:return{name:"female",title:"Mme"};default:return(0,pe.default)("has to be among 1, 2, 3, 4, 7 and 8")}}});var L=u(B=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0});B.default=(e,t,r)=>e<=t&&t<=r});var x=u(y=>{"use strict";var J=y&&y.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(y,"__esModule",{value:!0});var T=J(L()),$=J(D()),me=["janvier","f\xE9vrier","mars","avril","mai","juin","juillet","ao\xFBt","septembre","octobre","novembre","d\xE9cembre"];y.default=e=>{let t=Number(e);return(0,T.default)(1,t,12)?{name:me[t-1],index:t,unknown:void 0}:(0,T.default)(30,t,42)||(0,T.default)(50,t,99)||t===20?(0,$.default)():(0,$.default)("appears to be incorrect")}});var Z=u((rt,ye)=>{ye.exports={"100":"France","101":"Danemark","102":"Islande","103":"Norv\xE8ge","104":"Su\xE8de","105":"Finlande","106":"Estonie","107":"Lettonie","108":"Lituanie","109":"Allemagne","110":"Autriche","111":"Bulgarie","112":"Hongrie","113":"Liechtenstein","114":"Roumanie","116":"Tch\xE8que, R\xE9publique","117":"Slovaquie","118":"Bosnie-Herz\xE9govine","119":"Croatie","121":"Serbie","122":"Pologne","123":"Russie, F\xE9d\xE9ration De","125":"Albanie","126":"Gr\xE8ce","127":"Italie","128":"Saint-Marin","129":"Saint-Si\xE8ge (\xE9tat De La Cit\xE9 Du Vatican)","130":"Andorre","131":"Belgique","132":"Royaume-Uni","134":"Espagne","135":"Pays-Bas","136":"Irlande","137":"Luxembourg","138":"Monaco","139":"Portugal","140":"Suisse","144":"Malte","145":"Slov\xE9nie","148":"B\xE9larus","151":"Moldova, R\xE9publique De","155":"Ukraine","156":"Mac\xE9doine, L'Ex-R\xE9publique Yougoslave De","201":"Arabie Saoudite","203":"Iraq","204":"Iran, R\xE9publique Islamique D'","205":"Liban","206":"Syrienne, R\xE9publique Arabe","207":"Isra\xEBl","208":"Turquie","212":"Afghanistan","213":"Pakistan","214":"Bhoutan","215":"N\xE9pal","216":"Chine","217":"Japon","219":"Tha\xEFlande","220":"Philippines","222":"Jordanie","223":"Inde","224":"Myanmar","225":"Brun\xE9i Darussalam","226":"Singapour","227":"Malaisie","229":"Maldives","231":"Indon\xE9sie","234":"Cambodge","235":"Sri Lanka","236":"Ta\xEFwan, Province De Chine","238":"Cor\xE9e, R\xE9publique Populaire D\xE9mocratique De","239":"Cor\xE9e, R\xE9publique De","240":"Kowe\xEFt","241":"Lao, R\xE9publique D\xE9mocratique Populaire","242":"Mongolie","243":"Viet Nam","246":"Bangladesh","247":"\xC9mirats Arabes Unis","248":"Qatar","249":"Bahre\xEFn","250":"Oman","251":"Y\xE9men","252":"Arm\xE9nie","253":"Azerba\xEFdjan","254":"Chypre","255":"G\xE9orgie","256":"Kazakhstan","257":"Kirghizistan","258":"Ouzb\xE9kistan","259":"Tadjikistan","260":"Turkm\xE9nistan","261":"Palestine","262":"Timor-Leste","301":"\xC9gypte","302":"Lib\xE9ria","303":"Afrique Du Sud","304":"Gambie","309":"Tanzanie, R\xE9publique-Unie De","310":"ZIMBABWE","311":"Namibie","312":"Congo, La R\xE9publique D\xE9mocratique Du","314":"Guin\xE9e \xC9quatoriale","315":"\xC9thiopie","316":"Libyenne, Jamahiriya Arabe","317":"\xC9rythr\xE9e","318":"Somalie","321":"Burundi","322":"Cameroun","323":"Centrafricaine, R\xE9publique","324":"Congo","326":"C\xF4te D'Ivoire","327":"B\xE9nin","328":"Gabon","329":"Ghana","330":"Guin\xE9e","331":"Burkina Faso","332":"Kenya","333":"Madagascar","334":"Malawi","335":"Mali","336":"Mauritanie","337":"Niger","338":"Nig\xE9ria","339":"Ouganda","340":"Rwanda","341":"S\xE9n\xE9gal","342":"Sierra Leone","343":"Soudan","344":"Tchad","345":"Togo","346":"Zambie","347":"Botswana","348":"Lesotho","350":"Maroc","351":"Tunisie","352":"Alg\xE9rie","390":"Maurice","391":"Swaziland","392":"Guin\xE9e-Bissau","393":"Mozambique","394":"Sao Tom\xE9-Et-Principe","395":"Angola","396":"Cap-Vert","397":"Comores","398":"Seychelles","399":"Djibouti","401":"Canada","404":"\xC9tats-Unis","405":"Mexique","406":"Costa Rica","407":"Cuba","408":"Dominicaine, R\xE9publique","409":"Guatemala","410":"Ha\xEFti","411":"Honduras","412":"Nicaragua","413":"Panama","414":"El Salvador","415":"Argentine","416":"Br\xE9sil","417":"Chili","418":"Bolivie","419":"Colombie","420":"\xC9quateur","421":"Paraguay","422":"P\xE9rou","423":"Uruguay","424":"Venezuela","426":"Jama\xEFque","428":"Guyana","429":"Belize","433":"Trinit\xE9-Et-Tobago","434":"Barbade","435":"Grenade","436":"Bahamas","437":"Suriname","438":"Dominique","439":"Sainte-Lucie","440":"Saint-Vincent-Et-Les Grenadines","441":"Antigua-Et-Barbuda","442":"Saint-Christophe-Et-Nieves","501":"Australie","502":"Nouvelle-Z\xE9lande","506":"Samoa","507":"Nauru","508":"Fidji","509":"Tonga","510":"Papouasie-Nouvelle-Guin\xE9e","511":"Tuvalu","512":"Salomon, \xCEles","513":"Kiribati","514":"Vanuatu","515":"Marshall, \xCEles","516":"Micron\xE9sie, \xC9tats F\xE9d\xE9r\xE9s De","517":"Palaos"}});var W=u((at,be)=>{be.exports={"01":"Ain","02":"Aisne","03":"Allier","04":"Alpes-de-Haute-Provence","05":"Hautes-Alpes","06":"Alpes-Maritimes","07":"Ard\xE8che","08":"Ardennes","09":"Ari\xE8ge","10":"Aube","11":"Aude","12":"Aveyron","13":"Bouches-du-Rh\xF4ne","14":"Calvados","15":"Cantal","16":"Charente","17":"Charente-Maritime","18":"Cher","19":"Corr\xE8ze","2A":"Corse-du-Sud","2B":"Haute-Corse","21":"C\xF4te-d'Or","22":"C\xF4tes-d'Armor","23":"Creuse","24":"Dordogne","25":"Doubs","26":"Dr\xF4me","27":"Eure","28":"Eure-et-Loir","29":"Finist\xE8re","30":"Gard","31":"Haute-Garonne","32":"Gers","33":"Gironde","34":"H\xE9rault","35":"Ille-et-Vilaine","36":"Indre","37":"Indre-et-Loire","38":"Is\xE8re","39":"Jura","40":"Landes","41":"Loir-et-Cher","42":"Loire","43":"Haute-Loire","44":"Loire-Atlantique","45":"Loiret","46":"Lot","47":"Lot-et-Garonne","48":"Loz\xE8re","49":"Maine-et-Loire","50":"Manche","51":"Marne","52":"Haute-Marne","53":"Mayenne","54":"Meurthe-et-Moselle","55":"Meuse","56":"Morbihan","57":"Moselle","58":"Ni\xE8vre","59":"Nord","60":"Oise","61":"Orne","62":"Pas-de-Calais","63":"Puy-de-D\xF4me","64":"Pyr\xE9n\xE9es-Atlantiques","65":"Hautes-Pyr\xE9n\xE9es","66":"Pyr\xE9n\xE9es-Orientales","67":"Bas-Rhin","68":"Haut-Rhin","69":"Rh\xF4ne","70":"Haute-Sa\xF4ne","71":"Sa\xF4ne-et-Loire","72":"Sarthe","73":"Savoie","74":"Haute-Savoie","75":"Paris","76":"Seine-Maritime","77":"Seine-et-Marne","78":"Yvelines","79":"Deux-S\xE8vres","80":"Somme","81":"Tarn","82":"Tarn-et-Garonne","83":"Var","84":"Vaucluse","85":"Vend\xE9e","86":"Vienne","87":"Haute-Vienne","88":"Vosges","89":"Yonne","90":"Territoire de Belfort","91":"Essonne","92":"Hauts-de-Seine","93":"Seine-Saint-Denis","94":"Val-de-Marne","95":"Val-d'Oise","971":"Guadeloupe","972":"Martinique","973":"Guyane","974":"La R\xE9union","976":"Mayotte","975":"Saint-Pierre-et-Miquelon","977":"Saint-Barth\xE9l\xE9my","978":"Saint-Martin","984":"Terres australes et antarctiques fran\xE7aises","986":"Wallis et Futuna","987":"Polyn\xE9sie fran\xE7aise","988":"Nouvelle-Cal\xE9donie","989":"\xCEle de Clipperton"}});var N=u(f=>{"use strict";var q=f&&f.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(f,"__esModule",{value:!0});f.getParts=void 0;var ge=q(L()),ve=q(Z()),Me=q(W()),P=q(D()),Q=({items:e,error:t})=>r=>{let a=e[r];return a?{insee:r,name:a,unknown:void 0}:Object.assign({insee:r},(0,P.default)(t))},g=Q({items:ve.default}),De=Q({items:Me.default,error:"appears to be incorrect"}),b=({country:e,county:t=(0,P.default)(),city:r=(0,P.default)()})=>({country:e||(t.unknown?(0,P.default)():g("100")),county:t,city:r}),Pe=/^([0-8][0-9]|2[abAB]|9[0-69]|9[78][0-9])(\d+)$/,qe=e=>{let t=Pe.exec(e);if(!t)throw new Error("Unkown error");let[r,a]=t.slice(1);return{countyCode:r,code:a}};f.getParts=qe;f.default=(e,t)=>{let{countyCode:r,code:a}=(0,f.getParts)(e);if(r==="99")return b({country:g(a)});if(t){if((0,ge.default)(91,Number(r),94)&&t<=1962)return b({country:g("352"),city:{insee:e}});if(r==="95"&&t<=1964)return b({country:g("350"),city:{insee:e}});if(r==="96"&&t<=1964)return b({country:g("351"),city:{insee:e}})}return b({county:De(r),city:{insee:e}})}});var X=u(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.default=e=>{let t=Number(e),r=new Date(Date.now()).getFullYear(),a=r%100,n=(t-a+99)%100+1;return r-100+n}});var te=u(h=>{"use strict";var Ce=h&&h.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},R=h&&h.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(h,"__esModule",{value:!0});var Se=R(x()),Oe=R(N()),we=R(X()),E=class{constructor(t,r,a){this.month=(0,Se.default)(t),this.year=(0,we.default)(r);let{country:n,county:o,city:l}=(0,Oe.default)(a,this.year);this.country=n,this.county=o,this.city=l}get approximateDate(){return ke(this)}get approximateAge(){return je(this.approximateDate)}toJSON(){let{month:t,year:r,country:a,county:n,city:o,approximateDate:l,approximateAge:c}=this;return{month:I(t),year:r,country:I(a),county:I(n),city:o,approximateDate:l,approximateAge:c}}};h.default=E;function I(e){var{unknown:t}=e,r=Ce(e,["unknown"]);return t?Object.assign({unknown:t},r):r}var Ae=1e3*60*60*24,ee=(e,t)=>{let r=new Date(e.valueOf());return r.setUTCDate(r.getUTCDate()+Math.round((t.valueOf()-e.valueOf())/Ae/2)),r},ke=({year:e,month:t})=>{let r=new Date(Date.UTC(e,0,1));if(!t.unknown){r.setUTCMonth(t.index-1);let n=new Date(r.valueOf());return n.setUTCMonth(t.index),ee(r,n)}let a=new Date(r.valueOf());return a.setUTCFullYear(e+1),ee(r,a)},je=e=>{let t=new Date(Date.now()),r=(t.getFullYear()-e.getFullYear())*12+t.getMonth()-e.getMonth();return Math.floor(r/12)}});var K=u(s=>{"use strict";var Be=s&&s.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},C=s&&s.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0});s.getParts=void 0;var Le=C(F()),Te=C(k()),Ne=C(Y()),Ge=C(te()),Ie=/^((\d)(\d{2})(\d{2})(\d{5}|2[abAB]\d{3})(\d{3}))(\d{2})$/,Ee=e=>{e=(0,Te.default)(e);let t=Ie.exec(e);if(!t)throw new Error("Unexpected error");let[r,a,n,o,l,c,d]=t.slice(1);return{partialSsn:r,gender:a,year:n,month:o,place:l,rank:c,controlKey:d}};s.getParts=Ee;var H=class{constructor(t){let{partialSsn:r,gender:a,year:n,month:o,place:l,rank:c,controlKey:d}=(0,s.getParts)(t);(0,Le.default)(r,d),this.gender=(0,Ne.default)(a),this.birth=new Ge.default(o,n,l),this.provisional=Re(a,d)}toJSON(){let{gender:t,provisional:r}=this,a=this.birth.toJSON(),{approximateAge:n}=a;return{birth:Be(a,["approximateAge"]),gender:t,provisional:r,approximateAge:n}}};function Re(e,t){return Number(e)>2||t==="98"}s.default=e=>new H(e).toJSON()});var ae=u(v=>{"use strict";var re=v&&v.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(v,"__esModule",{value:!0});var He=re(M()),Ke=re(w()),Ue=[1,2,2,5,3];v.default=({gender:e="2",year:t="89",month:r="04",place:a="78650",rank:n="163",controlKey:o})=>{let l=[e,t,r,a,n].map((c,d)=>(0,Ke.default)(c,Ue[d])).join("");return`${l}${o||(0,He.default)(l)}`}});var ne=u(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});var Ve=K(),ze=N();U.default=e=>{let{gender:t,year:r,month:a,place:n,rank:o,controlKey:l}=(0,Ve.getParts)(e),{countyCode:c,code:d}=(0,ze.getParts)(n);return[t,r,a,c,d,o,l].join(" ")}});var Ye=u(i=>{var S=i&&i.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(i,"__esModule",{value:!0});i.validate=i.format=i.make=i.parse=i.getControlKey=void 0;var ue=S(M());i.getControlKey=ue.default;var V=S(K());i.parse=V.default;var ie=S(ae());i.make=ie.default;var oe=S(ne());i.format=oe.default;var Fe=e=>{try{return(0,V.default)(e),!0}catch(t){return!1}};i.validate=Fe;i.default={getControlKey:ue.default,parse:V.default,validate:i.validate,make:ie.default,format:oe.default}});return Ye();})();
