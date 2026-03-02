import{r as $,c as T,j as o,A as ee,F as te,T as q,B as Y,a as oe,b as se,d as le,e as ne,s as G,S as K,o as ie,f as re,M as Q,g as X,C as ae,h as ce,i as de,I as he,k as me,D as ue,l as pe,m as fe,n as xe,p as ge,q as be,t as H,u as ve,G as J,v as ye}from"./vendor-C6bAvrsq.js";const Se=$.memo(t=>{const e=T.c(9),{text:h,sx:i,onClick:a}=t,c=h===void 0?"":h;let s;e[0]!==i?(s=i===void 0?{}:i,e[0]=i,e[1]=s):s=e[1];const d=s,r=a===void 0?Ce:a;let l;e[2]!==d?(l={width:"200px",boxShadow:"none",borderRadius:1,px:2.5,gap:.5,...d},e[2]=d,e[3]=l):l=e[3];let n;e[4]===Symbol.for("react.memo_cache_sentinel")?(n=o.jsx(ee,{}),e[4]=n):n=e[4];let m;return e[5]!==r||e[6]!==l||e[7]!==c?(m=o.jsxs(te,{onClick:r,color:"primary",sx:l,variant:"extended",size:"medium",children:[c,n]}),e[5]=r,e[6]=l,e[7]=c,e[8]=m):m=e[8],m});function Ce(){}const ze=$.memo(t=>{const e=T.c(9),{logoText:h,logoutText:i}=t,a=h===void 0?"":h,c=i===void 0?"":i;let s;e[0]===Symbol.for("react.memo_cache_sentinel")?(s={flexGrow:1},e[0]=s):s=e[0];let d;e[1]===Symbol.for("react.memo_cache_sentinel")?(d={flexGrow:1},e[1]=d):d=e[1];let r;e[2]!==a?(r=o.jsx(q,{variant:"h6",color:"primary.light",fontWeight:"bold",component:"div",sx:d,children:a}),e[2]=a,e[3]=r):r=e[3];let l;e[4]!==c?(l=o.jsx(Y,{variant:"outlined",children:o.jsx(q,{variant:"body2",fontWeight:"bold",color:"primary.light",children:c})}),e[4]=c,e[5]=l):l=e[5];let n;return e[6]!==r||e[7]!==l?(n=o.jsx(oe,{sx:s,children:o.jsx(se,{position:"static",color:"white",elevation:0,children:o.jsxs(le,{children:[r,l]})})}),e[6]=r,e[7]=l,e[8]=n):n=e[8],n}),D=ne({palette:{white:{main:"#fff",contrastText:"#000"}},typography:{button:{textTransform:"none"}},components:{MuiFab:{styleOverrides:{root:({theme:t})=>({boxShadow:"none",backgroundColor:t.palette.primary.light,"&:hover":{backgroundColor:t.palette.primary.dark}}),primary:({theme:t})=>({backgroundColor:t.palette.primary.light,"&:hover":{backgroundColor:t.palette.primary.dark}})}},MuiButton:{styleOverrides:{contained:({theme:t})=>({backgroundColor:t.palette.primary.light,boxShadow:"none","&:hover":{backgroundColor:t.palette.primary.dark,boxShadow:"none"}})},defaultProps:{disableElevation:!0}},MuiInput:{styleOverrides:{root:({theme:t})=>({"&:after":{borderBottomColor:t.palette.primary.light}})}},MuiInputLabel:{styleOverrides:{root:({theme:t})=>({"&.Mui-focused":{color:t.palette.primary.light}})}}}}),Re=["Working","On Vacation","Lunch Time","Business Trip"],qe="http://localhost:3001",je={Working:D.palette.success.light,"On Vacation":D.palette.error.light,"Lunch Time":D.palette.warning.light,"Business Trip":D.palette.secondary.light},_e=G("div")(({theme:t,value:e})=>`
    position: relative;
    width: 12px;
    height: 12px;
    background-color: ${je[e]||t.palette.success.main};
    border-radius: 50%;
    &:after {
      content: '';
      width: 6px;
      height: 6px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      border-radius: 50%;
    }
`),we=G(K)(({backgroundcolor:t,showborderbottom:e,padding:h="10px 0px 10px 0px",height:i="auto"})=>`
    height: ${i};
    background-color: ${t};
    
    & .${ie.notchedOutline} {
      border-top: none;
      border-left: none;
      border-right: none;
      ${e==="true"?"":"border-bottom: none;"}
      border-radius: 0;
      padding: 0 4px;
    }

    & .${re.select} {
      padding: ${h};
      display:flex;
      height: 100%;
      align-items: center;
    }
  `),Z=t=>{const e=T.c(32),{emptyValue:h,value:i,backgroundColor:a,showBorderBottom:c,padding:s,height:d,width:r,variant:l,options:n,onSelect:m}=t,u=h===void 0?"Select value":h,p=i===void 0?"":i,v=a===void 0?"transparent":a,y=c===void 0?!0:c,S=s===void 0?"10px 0px 10px 0px":s,C=d===void 0?"auto":d,g=r===void 0?"100%":r,j=l===void 0?"":l;let x;e[0]!==n?(x=n===void 0?[]:n,e[0]=n,e[1]=x):x=e[1];const f=x,b=m===void 0?ke:m;let _;e[2]!==p?(_={selectValue:p},e[2]=p,e[3]=_):_=e[3];const[w,U]=$.useState(_);let M,N;e[4]!==p?(M=()=>{U(k=>({...k,selectValue:p}))},N=[p],e[4]=p,e[5]=M,e[6]=N):(M=e[5],N=e[6]),$.useEffect(M,N);const{selectValue:L}=w;let W;e[7]!==b?(W=k=>{U(P=>({...P,selectValue:k})),b(k)},e[7]=b,e[8]=W):W=e[8];const z=W,R=j;let I;e[9]!==g?(I={minWidth:120,width:g},e[9]=g,e[10]=I):I=e[10];let A;e[11]!==y?(A=y.toString(),e[11]=y,e[12]=A):A=e[12];let B;e[13]!==z?(B=k=>z(k.target.value),e[13]=z,e[14]=B):B=e[14];let F;e[15]!==u?(F=k=>k?o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx(_e,{value:k}),k]}):o.jsx("div",{style:{opacity:.6},children:u}),e[15]=u,e[16]=F):F=e[16];let V;e[17]!==f?(V=f.map($e),e[17]=f,e[18]=V):V=e[18];let E;e[19]!==v||e[20]!==C||e[21]!==S||e[22]!==L||e[23]!==A||e[24]!==B||e[25]!==F||e[26]!==V?(E=o.jsx(we,{height:C,padding:S,showborderbottom:A,backgroundcolor:v,displayEmpty:!0,value:L,onChange:B,renderValue:F,children:V}),e[19]=v,e[20]=C,e[21]=S,e[22]=L,e[23]=A,e[24]=B,e[25]=F,e[26]=V,e[27]=E):E=e[27];let O;return e[28]!==R||e[29]!==I||e[30]!==E?(O=o.jsx(X,{variant:R,sx:I,children:E}),e[28]=R,e[29]=I,e[30]=E,e[31]=O):O=e[31],O};function ke(){}function $e(t){return o.jsx(Q,{value:t,children:t},t)}const Te=G(ae)(({theme:t})=>`
    border-radius: 6px;
    box-shadow: none;
    &:hover {
      box-shadow: -4px 8px 25px -5px ${t.palette.primary.light};
    }
  `),Ie=$.memo(t=>{const e=T.c(23),{userId:h,fullName:i,status:a,imgUrl:c,imgAlt:s,statuses:d,onStatusChange:r}=t,l=i===void 0?"":i,n=a===void 0?"":a,m=c===void 0?"https://ozgrozer.github.io/100k-faces/0/6/006689.jpg":c,u=s===void 0?"":s;let p;e[0]!==d?(p=d===void 0?[]:d,e[0]=d,e[1]=p):p=e[1];const v=p,y=r===void 0?Ae:r;let S;e[2]===Symbol.for("react.memo_cache_sentinel")?(S={height:"180px",px:3.5,display:"flex",alignItems:"flex-end",gap:"25px"},e[2]=S):S=e[2];let C;e[3]===Symbol.for("react.memo_cache_sentinel")?(C={borderRadius:"50%",height:"100%",width:"auto",py:4},e[3]=C):C=e[3];let g;e[4]!==u||e[5]!==m?(g=o.jsx(ce,{component:"img",height:"",image:m,alt:u,sx:C}),e[4]=u,e[5]=m,e[6]=g):g=e[6];let j;e[7]===Symbol.for("react.memo_cache_sentinel")?(j={width:"100%",px:"0"},e[7]=j):j=e[7];let x;e[8]!==l?(x=o.jsx(q,{children:l}),e[8]=l,e[9]=x):x=e[9];let f;e[10]!==y||e[11]!==h?(f=U=>y(h,U),e[10]=y,e[11]=h,e[12]=f):f=e[12];let b;e[13]!==n||e[14]!==v||e[15]!==f?(b=o.jsx(Z,{variant:"standard",value:n,options:v,onSelect:f}),e[13]=n,e[14]=v,e[15]=f,e[16]=b):b=e[16];let _;e[17]!==x||e[18]!==b?(_=o.jsxs(de,{sx:j,children:[x,b]}),e[17]=x,e[18]=b,e[19]=_):_=e[19];let w;return e[20]!==g||e[21]!==_?(w=o.jsxs(Te,{sx:S,children:[g,_]}),e[20]=g,e[21]=_,e[22]=w):w=e[22],w},(t,e)=>t.userId===e.userId&&t.fullName===e.fullName&&t.status===e.status&&t.imgUrl===e.imgUrl&&t.imgAlt===e.imgAlt);function Ae(){}const Be=G(he)(({height:t="auto",width:e="auto"})=>`
    position: relative;
    display: flex;
    // border: 1px solid red;
    background: #fff;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    height: ${t};
    width: ${e};
    padding-left: 20px;
    & svg {
      color: gray;
      width: 18px;
      height: 18px;
      pointer-events: none;
    }
    & input {
      padding-left:10px;
    }
    &:after {
      content: '';
      height: 50%;
      background: gray;
      width: 1px;
      position: absolute;
      right: 0px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.4;
    }
  `),Fe=$.memo(t=>{const e=T.c(9),{placeholder:h,height:i,width:a,value:c,onChange:s}=t,d=h===void 0?"Type to search":h,r=i===void 0?"40px":i,l=a===void 0?"auto":a,n=c===void 0?"":c,m=s===void 0?Ve:s;let u;e[0]!==m?(u=y=>m(y.target.value),e[0]=m,e[1]=u):u=e[1];let p;e[2]===Symbol.for("react.memo_cache_sentinel")?(p=o.jsx(me,{}),e[2]=p):p=e[2];let v;return e[3]!==r||e[4]!==d||e[5]!==u||e[6]!==n||e[7]!==l?(v=o.jsx(Be,{height:r,width:l,value:n,onChange:u,placeholder:d,startAdornment:p}),e[3]=r,e[4]=d,e[5]=u,e[6]=n,e[7]=l,e[8]=v):v=e[8],v});function Ve(){}const Ye=t=>{const e=T.c(26),{open:h,onClose:i,statuses:a}=t,c=h===void 0?!1:h,s=i===void 0?Ee:i;let d;e[0]!==a?(d=a===void 0?[]:a,e[0]=a,e[1]=d):d=e[1];const r=d;let l;e[2]===Symbol.for("react.memo_cache_sentinel")?(l=o.jsx(ue,{sx:{borderBottom:"2px solid rgba(0,0,0,0.08)"},children:"Create New User"}),e[2]=l):l=e[2];let n,m,u;e[3]===Symbol.for("react.memo_cache_sentinel")?(n=o.jsx(pe,{autoFocus:!0,required:!0,margin:"dense",id:"name",name:"name",label:"Full Name",type:"text",fullWidth:!0,variant:"standard",color:"primary"}),m=o.jsx("br",{}),u=o.jsx("br",{}),e[3]=n,e[4]=m,e[5]=u):(n=e[3],m=e[4],u=e[5]);let p,v;e[6]===Symbol.for("react.memo_cache_sentinel")?(v={minWidth:"100%"},p=o.jsx(fe,{id:"demo-simple-select-standard-label",children:"Status"}),e[6]=p,e[7]=v):(p=e[6],v=e[7]);let y;e[8]!==r?(y=r.map(Ne),e[8]=r,e[9]=y):y=e[9];let S;e[10]!==y?(S=o.jsx(xe,{children:o.jsxs("form",{onSubmit:Ue,id:"subscription-form",children:[n,m,u,o.jsxs(X,{variant:"standard",sx:v,children:[p,o.jsx(K,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:"",onChange:Me,label:"Age",children:y})]})]})}),e[10]=y,e[11]=S):S=e[11];let C;e[12]===Symbol.for("react.memo_cache_sentinel")?(C={justifyContent:"flex-start",padding:"20px 24px"},e[12]=C):C=e[12];let g;e[13]!==s?(g=o.jsx(Y,{variant:"contained",onClick:s,children:"Create"}),e[13]=s,e[14]=g):g=e[14];let j;e[15]===Symbol.for("react.memo_cache_sentinel")?(j={color:"#000"},e[15]=j):j=e[15];let x;e[16]!==s?(x=o.jsx(Y,{sx:j,onClick:s,children:"Cancel"}),e[16]=s,e[17]=x):x=e[17];let f;e[18]!==g||e[19]!==x?(f=o.jsxs(ge,{sx:C,children:[g,x]}),e[18]=g,e[19]=x,e[20]=f):f=e[20];let b;return e[21]!==s||e[22]!==c||e[23]!==S||e[24]!==f?(b=o.jsx($.Fragment,{children:o.jsxs(be,{open:c,onClose:s,fullWidth:!0,maxWidth:"xs",children:[l,S,f]})}),e[21]=s,e[22]=c,e[23]=S,e[24]=f,e[25]=b):b=e[25],b};function Ee(){}function Ue(){}function Me(){}function Ne(t){return o.jsx(Q,{value:t,children:t},t)}const He=t=>{const e=T.c(4),{error:h}=t;let i,a;e[0]===Symbol.for("react.memo_cache_sentinel")?(i=o.jsx("p",{children:"Something went wrong:"}),a={color:"red"},e[0]=i,e[1]=a):(i=e[0],a=e[1]);const c=h||h?.message;let s;return e[2]!==c?(s=o.jsxs("div",{role:"alert",children:[i,o.jsx("pre",{style:a,children:c})]}),e[2]=c,e[3]=s):s=e[3],s},Je=$.memo(t=>{const e=T.c(22),{onCreateClick:h,searchValue:i,onSearchChange:a,statuses:c,selectedStatus:s,onStatusFilterChange:d}=t,r=h===void 0?We:h,l=i===void 0?"":i,n=a===void 0?Oe:a;let m;e[0]!==c?(m=c===void 0?[]:c,e[0]=c,e[1]=m):m=e[1];const u=m,p=s===void 0?"All":s,v=d===void 0?De:d;let y;e[2]!==u?(y=["All",...u],e[2]=u,e[3]=y):y=e[3];const S=y;let C;e[4]===Symbol.for("react.memo_cache_sentinel")?(C={height:60},e[4]=C):C=e[4];let g;e[5]===Symbol.for("react.memo_cache_sentinel")?(g={height:"100%"},e[5]=g):g=e[5];let j;e[6]!==r?(j=o.jsx(Se,{text:"Create",sx:g,onClick:r}),e[6]=r,e[7]=j):j=e[7];let x;e[8]===Symbol.for("react.memo_cache_sentinel")?(x={flexGrow:1,height:"100%"},e[8]=x):x=e[8];let f;e[9]!==n||e[10]!==l?(f=o.jsx(Fe,{height:"100%",width:"100%",value:l,onChange:n}),e[9]=n,e[10]=l,e[11]=f):f=e[11];let b;e[12]!==v||e[13]!==p||e[14]!==S?(b=o.jsx(Z,{emptyValue:"Filter by status",height:"100%",width:"300px",backgroundColor:"#fff",showBorderBottom:!1,padding:"10px 0px 10px 25px",options:S,value:p,onSelect:v}),e[12]=v,e[13]=p,e[14]=S,e[15]=b):b=e[15];let _;e[16]!==f||e[17]!==b?(_=o.jsxs(H,{direction:"row",sx:x,children:[f,b]}),e[16]=f,e[17]=b,e[18]=_):_=e[18];let w;return e[19]!==j||e[20]!==_?(w=o.jsxs(H,{direction:"row",spacing:2,sx:C,children:[j,_]}),e[19]=j,e[20]=_,e[21]=w):w=e[21],w});function We(){}function Oe(){}function De(){}const Ke=$.memo(t=>{const e=T.c(14),{users:h,isLoading:i,isError:a,statuses:c,onStatusChange:s}=t;let d;e[0]===Symbol.for("react.memo_cache_sentinel")?(d={xs:1,sm:2,md:4},e[0]=d):d=e[0];let r;e[1]!==a?(r=a&&o.jsx(H,{sx:{width:"100%"},spacing:2,children:o.jsx(ve,{severity:"error",children:String(a.message||a)})}),e[1]=a,e[2]=r):r=e[2];let l;e[3]!==i?(l=i&&Array.from({length:3}).map(Ge),e[3]=i,e[4]=l):l=e[4];let n;e[5]!==i||e[6]!==s||e[7]!==c||e[8]!==h?(n=!i&&h.map(u=>o.jsx(J,{size:{xs:12,sm:12,md:6,lg:4},children:o.jsx(Ie,{userId:u.id,fullName:u.name,status:u.status,imgUrl:u.img??"",imgAlt:`${u.name} img`,statuses:c,onStatusChange:s})},u.id)),e[5]=i,e[6]=s,e[7]=c,e[8]=h,e[9]=n):n=e[9];let m;return e[10]!==r||e[11]!==l||e[12]!==n?(m=o.jsxs(J,{container:!0,spacing:d,children:[r,l,n]}),e[10]=r,e[11]=l,e[12]=n,e[13]=m):m=e[13],m});function Ge(t,e){return o.jsx(J,{size:{xs:12,sm:12,md:6,lg:4},children:o.jsx(ye,{variant:"rectangular",height:180})},`skeleton-${e}`)}export{qe as A,Je as C,He as E,Ye as F,ze as N,Re as S,Ke as U,D as t};
