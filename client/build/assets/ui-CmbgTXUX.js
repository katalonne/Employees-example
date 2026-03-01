import{c as $,j as o,A as ee,F as te,T as q,B as Y,a as oe,b as se,d as le,e as ne,s as D,S as K,o as ie,f as re,r as E,M as Q,g as X,C as ae,h as ce,i as de,I as he,k as me,D as ue,l as pe,m as fe,n as xe,p as ge,q as be,t as H,u as ve,G as J,v as ye}from"./vendor-BIwpbMWZ.js";const Se=t=>{const e=$.c(9),{text:h,sx:n,onClick:a}=t,c=h===void 0?"":h;let i;e[0]!==n?(i=n===void 0?{}:n,e[0]=n,e[1]=i):i=e[1];const d=i,r=a===void 0?Ce:a;let s;e[2]!==d?(s={width:"200px",boxShadow:"none",borderRadius:1,px:2.5,gap:.5,...d},e[2]=d,e[3]=s):s=e[3];let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=o.jsx(ee,{}),e[4]=l):l=e[4];let m;return e[5]!==r||e[6]!==s||e[7]!==c?(m=o.jsxs(te,{onClick:r,color:"primary",sx:s,variant:"extended",size:"medium",children:[c,l]}),e[5]=r,e[6]=s,e[7]=c,e[8]=m):m=e[8],m};function Ce(){}const Re=t=>{const e=$.c(9),{logoText:h,logoutText:n}=t,a=h===void 0?"":h,c=n===void 0?"":n;let i;e[0]===Symbol.for("react.memo_cache_sentinel")?(i={flexGrow:1},e[0]=i):i=e[0];let d;e[1]===Symbol.for("react.memo_cache_sentinel")?(d={flexGrow:1},e[1]=d):d=e[1];let r;e[2]!==a?(r=o.jsx(q,{variant:"h6",color:"primary.light",fontWeight:"bold",component:"div",sx:d,children:a}),e[2]=a,e[3]=r):r=e[3];let s;e[4]!==c?(s=o.jsx(Y,{variant:"outlined",children:o.jsx(q,{variant:"body2",fontWeight:"bold",color:"primary.light",children:c})}),e[4]=c,e[5]=s):s=e[5];let l;return e[6]!==r||e[7]!==s?(l=o.jsx(oe,{sx:i,children:o.jsx(se,{position:"static",color:"white",elevation:0,children:o.jsxs(le,{children:[r,s]})})}),e[6]=r,e[7]=s,e[8]=l):l=e[8],l},L=ne({palette:{white:{main:"#fff",contrastText:"#000"}},typography:{button:{textTransform:"none"}},components:{MuiFab:{styleOverrides:{root:({theme:t})=>({boxShadow:"none",backgroundColor:t.palette.primary.light,"&:hover":{backgroundColor:t.palette.primary.dark}}),primary:({theme:t})=>({backgroundColor:t.palette.primary.light,"&:hover":{backgroundColor:t.palette.primary.dark}})}},MuiButton:{styleOverrides:{contained:({theme:t})=>({backgroundColor:t.palette.primary.light,boxShadow:"none","&:hover":{backgroundColor:t.palette.primary.dark,boxShadow:"none"}})},defaultProps:{disableElevation:!0}},MuiInput:{styleOverrides:{root:({theme:t})=>({"&:after":{borderBottomColor:t.palette.primary.light}})}},MuiInputLabel:{styleOverrides:{root:({theme:t})=>({"&.Mui-focused":{color:t.palette.primary.light}})}}}}),Le=["Working","On Vacation","Business Trip"],je={Working:L.palette.success.light,"On Vacation":L.palette.error.light,"Business Trip":L.palette.secondary.light},_e=D("div")(({theme:t,value:e})=>`
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
`),we=D(K)(({backgroundcolor:t,showborderbottom:e,padding:h="10px 0px 10px 0px",height:n="auto"})=>`
    height: ${n};
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
  `),Z=t=>{const e=$.c(32),{emptyValue:h,value:n,backgroundColor:a,showBorderBottom:c,padding:i,height:d,width:r,variant:s,options:l,onSelect:m}=t,u=h===void 0?"Select value":h,p=n===void 0?"":n,v=a===void 0?"transparent":a,y=c===void 0?!0:c,S=i===void 0?"10px 0px 10px 0px":i,C=d===void 0?"auto":d,g=r===void 0?"100%":r,j=s===void 0?"":s;let x;e[0]!==l?(x=l===void 0?[]:l,e[0]=l,e[1]=x):x=e[1];const f=x,b=m===void 0?ke:m;let _;e[2]!==p?(_={selectValue:p},e[2]=p,e[3]=_):_=e[3];const[w,M]=E.useState(_);let N,U;e[4]!==p?(N=()=>{M(k=>({...k,selectValue:p}))},U=[p],e[4]=p,e[5]=N,e[6]=U):(N=e[5],U=e[6]),E.useEffect(N,U);const{selectValue:G}=w;let W;e[7]!==b?(W=k=>{M(P=>({...P,selectValue:k})),b(k)},e[7]=b,e[8]=W):W=e[8];const z=W,R=j;let B;e[9]!==g?(B={minWidth:120,width:g},e[9]=g,e[10]=B):B=e[10];let I;e[11]!==y?(I=y.toString(),e[11]=y,e[12]=I):I=e[12];let T;e[13]!==z?(T=k=>z(k.target.value),e[13]=z,e[14]=T):T=e[14];let A;e[15]!==u?(A=k=>k?o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx(_e,{value:k}),k]}):o.jsx("div",{style:{opacity:.6},children:u}),e[15]=u,e[16]=A):A=e[16];let F;e[17]!==f?(F=f.map($e),e[17]=f,e[18]=F):F=e[18];let V;e[19]!==v||e[20]!==C||e[21]!==S||e[22]!==G||e[23]!==I||e[24]!==T||e[25]!==A||e[26]!==F?(V=o.jsx(we,{height:C,padding:S,showborderbottom:I,backgroundcolor:v,displayEmpty:!0,value:G,onChange:T,renderValue:A,children:F}),e[19]=v,e[20]=C,e[21]=S,e[22]=G,e[23]=I,e[24]=T,e[25]=A,e[26]=F,e[27]=V):V=e[27];let O;return e[28]!==R||e[29]!==B||e[30]!==V?(O=o.jsx(X,{variant:R,sx:B,children:V}),e[28]=R,e[29]=B,e[30]=V,e[31]=O):O=e[31],O};function ke(){}function $e(t){return o.jsx(Q,{value:t,children:t},t)}const Be=D(ae)(({theme:t})=>`
    border-radius: 6px;
    box-shadow: none;
    &:hover {
      box-shadow: -4px 8px 25px -5px ${t.palette.primary.light};
    }
  `),Ie=E.memo(t=>{const e=$.c(23),{userId:h,fullName:n,status:a,imgUrl:c,imgAlt:i,statuses:d,onStatusChange:r}=t,s=n===void 0?"":n,l=a===void 0?"":a,m=c===void 0?"https://ozgrozer.github.io/100k-faces/0/6/006689.jpg":c,u=i===void 0?"":i;let p;e[0]!==d?(p=d===void 0?[]:d,e[0]=d,e[1]=p):p=e[1];const v=p,y=r===void 0?Te:r;let S;e[2]===Symbol.for("react.memo_cache_sentinel")?(S={height:"180px",px:3.5,display:"flex",alignItems:"flex-end",gap:"25px"},e[2]=S):S=e[2];let C;e[3]===Symbol.for("react.memo_cache_sentinel")?(C={borderRadius:"50%",height:"100%",width:"auto",py:4},e[3]=C):C=e[3];let g;e[4]!==u||e[5]!==m?(g=o.jsx(ce,{component:"img",height:"",image:m,alt:u,sx:C}),e[4]=u,e[5]=m,e[6]=g):g=e[6];let j;e[7]===Symbol.for("react.memo_cache_sentinel")?(j={width:"100%",px:"0"},e[7]=j):j=e[7];let x;e[8]!==s?(x=o.jsx(q,{children:s}),e[8]=s,e[9]=x):x=e[9];let f;e[10]!==y||e[11]!==h?(f=M=>y(h,M),e[10]=y,e[11]=h,e[12]=f):f=e[12];let b;e[13]!==l||e[14]!==v||e[15]!==f?(b=o.jsx(Z,{variant:"standard",value:l,options:v,onSelect:f}),e[13]=l,e[14]=v,e[15]=f,e[16]=b):b=e[16];let _;e[17]!==x||e[18]!==b?(_=o.jsxs(de,{sx:j,children:[x,b]}),e[17]=x,e[18]=b,e[19]=_):_=e[19];let w;return e[20]!==g||e[21]!==_?(w=o.jsxs(Be,{sx:S,children:[g,_]}),e[20]=g,e[21]=_,e[22]=w):w=e[22],w},(t,e)=>t.userId===e.userId&&t.fullName===e.fullName&&t.status===e.status&&t.imgUrl===e.imgUrl&&t.imgAlt===e.imgAlt);function Te(){}const Ae=D(he)(({height:t="auto",width:e="auto"})=>`
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
  `),Fe=t=>{const e=$.c(9),{placeholder:h,height:n,width:a,value:c,onChange:i}=t,d=h===void 0?"Type to search":h,r=n===void 0?"40px":n,s=a===void 0?"auto":a,l=c===void 0?"":c,m=i===void 0?Ve:i;let u;e[0]!==m?(u=y=>m(y.target.value),e[0]=m,e[1]=u):u=e[1];let p;e[2]===Symbol.for("react.memo_cache_sentinel")?(p=o.jsx(me,{}),e[2]=p):p=e[2];let v;return e[3]!==r||e[4]!==d||e[5]!==u||e[6]!==l||e[7]!==s?(v=o.jsx(Ae,{height:r,width:s,value:l,onChange:u,placeholder:d,startAdornment:p}),e[3]=r,e[4]=d,e[5]=u,e[6]=l,e[7]=s,e[8]=v):v=e[8],v};function Ve(){}const qe=t=>{const e=$.c(26),{open:h,onClose:n,statuses:a}=t,c=h===void 0?!1:h,i=n===void 0?Ee:n;let d;e[0]!==a?(d=a===void 0?[]:a,e[0]=a,e[1]=d):d=e[1];const r=d;let s;e[2]===Symbol.for("react.memo_cache_sentinel")?(s=o.jsx(ue,{sx:{borderBottom:"2px solid rgba(0,0,0,0.08)"},children:"Create New User"}),e[2]=s):s=e[2];let l,m,u;e[3]===Symbol.for("react.memo_cache_sentinel")?(l=o.jsx(pe,{autoFocus:!0,required:!0,margin:"dense",id:"name",name:"name",label:"Full Name",type:"text",fullWidth:!0,variant:"standard",color:"primary"}),m=o.jsx("br",{}),u=o.jsx("br",{}),e[3]=l,e[4]=m,e[5]=u):(l=e[3],m=e[4],u=e[5]);let p,v;e[6]===Symbol.for("react.memo_cache_sentinel")?(v={minWidth:"100%"},p=o.jsx(fe,{id:"demo-simple-select-standard-label",children:"Status"}),e[6]=p,e[7]=v):(p=e[6],v=e[7]);let y;e[8]!==r?(y=r.map(Ue),e[8]=r,e[9]=y):y=e[9];let S;e[10]!==y?(S=o.jsx(xe,{children:o.jsxs("form",{onSubmit:Me,id:"subscription-form",children:[l,m,u,o.jsxs(X,{variant:"standard",sx:v,children:[p,o.jsx(K,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:"",onChange:Ne,label:"Age",children:y})]})]})}),e[10]=y,e[11]=S):S=e[11];let C;e[12]===Symbol.for("react.memo_cache_sentinel")?(C={justifyContent:"flex-start",padding:"20px 24px"},e[12]=C):C=e[12];let g;e[13]!==i?(g=o.jsx(Y,{variant:"contained",onClick:i,children:"Create"}),e[13]=i,e[14]=g):g=e[14];let j;e[15]===Symbol.for("react.memo_cache_sentinel")?(j={color:"#000"},e[15]=j):j=e[15];let x;e[16]!==i?(x=o.jsx(Y,{sx:j,onClick:i,children:"Cancel"}),e[16]=i,e[17]=x):x=e[17];let f;e[18]!==g||e[19]!==x?(f=o.jsxs(ge,{sx:C,children:[g,x]}),e[18]=g,e[19]=x,e[20]=f):f=e[20];let b;return e[21]!==i||e[22]!==c||e[23]!==S||e[24]!==f?(b=o.jsx(E.Fragment,{children:o.jsxs(be,{open:c,onClose:i,fullWidth:!0,maxWidth:"xs",children:[s,S,f]})}),e[21]=i,e[22]=c,e[23]=S,e[24]=f,e[25]=b):b=e[25],b};function Ee(){}function Me(){}function Ne(){}function Ue(t){return o.jsx(Q,{value:t,children:t},t)}const Ye=t=>{const e=$.c(4),{error:h}=t;let n,a;e[0]===Symbol.for("react.memo_cache_sentinel")?(n=o.jsx("p",{children:"Something went wrong:"}),a={color:"red"},e[0]=n,e[1]=a):(n=e[0],a=e[1]);let c;return e[2]!==h.message?(c=o.jsxs("div",{role:"alert",children:[n,o.jsx("pre",{style:a,children:h.message})]}),e[2]=h.message,e[3]=c):c=e[3],c},He=t=>{const e=$.c(23),{onCreateClick:h,searchValue:n,onSearchChange:a,statuses:c,selectedStatus:i,onStatusFilterChange:d}=t,r=h===void 0?We:h,s=n===void 0?"":n,l=a===void 0?Oe:a;let m;e[0]!==c?(m=c===void 0?[]:c,e[0]=c,e[1]=m):m=e[1];const u=m,p=i===void 0?"All":i,v=d===void 0?De:d;let y;e[2]===Symbol.for("react.memo_cache_sentinel")?(y={height:60},e[2]=y):y=e[2];let S;e[3]===Symbol.for("react.memo_cache_sentinel")?(S={height:"100%"},e[3]=S):S=e[3];let C;e[4]!==r?(C=o.jsx(Se,{text:"Create",sx:S,onClick:r}),e[4]=r,e[5]=C):C=e[5];let g;e[6]===Symbol.for("react.memo_cache_sentinel")?(g={flexGrow:1,height:"100%"},e[6]=g):g=e[6];let j;e[7]!==l||e[8]!==s?(j=o.jsx(Fe,{height:"100%",width:"100%",value:s,onChange:l}),e[7]=l,e[8]=s,e[9]=j):j=e[9];let x;e[10]===Symbol.for("react.memo_cache_sentinel")?(x=["All"],e[10]=x):x=e[10];let f;e[11]!==u?(f=x.concat(u),e[11]=u,e[12]=f):f=e[12];let b;e[13]!==v||e[14]!==p||e[15]!==f?(b=o.jsx(Z,{emptyValue:"Filter by status",height:"100%",width:"300px",backgroundColor:"#fff",showBorderBottom:!1,padding:"10px 0px 10px 25px",options:f,value:p,onSelect:v}),e[13]=v,e[14]=p,e[15]=f,e[16]=b):b=e[16];let _;e[17]!==j||e[18]!==b?(_=o.jsxs(H,{direction:"row",sx:g,children:[j,b]}),e[17]=j,e[18]=b,e[19]=_):_=e[19];let w;return e[20]!==C||e[21]!==_?(w=o.jsxs(H,{direction:"row",spacing:2,sx:y,children:[C,_]}),e[20]=C,e[21]=_,e[22]=w):w=e[22],w};function We(){}function Oe(){}function De(){}const Je=E.memo(t=>{const e=$.c(14),{users:h,isLoading:n,isError:a,statuses:c,onStatusChange:i}=t;let d;e[0]===Symbol.for("react.memo_cache_sentinel")?(d={xs:1,sm:2,md:4},e[0]=d):d=e[0];let r;e[1]!==a?(r=a&&o.jsx(H,{sx:{width:"100%"},spacing:2,children:o.jsx(ve,{severity:"error",children:String(a.message||a)})}),e[1]=a,e[2]=r):r=e[2];let s;e[3]!==n?(s=n&&Array.from({length:3}).map(Ge),e[3]=n,e[4]=s):s=e[4];let l;e[5]!==n||e[6]!==i||e[7]!==c||e[8]!==h?(l=!n&&h.map(u=>o.jsx(J,{size:{xs:12,sm:12,md:6,lg:4},children:o.jsx(Ie,{userId:u.id,fullName:u.name,status:u.status,imgUrl:u.img??"",imgAlt:`${u.name} img`,statuses:c,onStatusChange:i})},u.id)),e[5]=n,e[6]=i,e[7]=c,e[8]=h,e[9]=l):l=e[9];let m;return e[10]!==r||e[11]!==s||e[12]!==l?(m=o.jsxs(J,{container:!0,spacing:d,children:[r,s,l]}),e[10]=r,e[11]=s,e[12]=l,e[13]=m):m=e[13],m});function Ge(t,e){return o.jsx(J,{size:{xs:12,sm:12,md:6,lg:4},children:o.jsx(ye,{variant:"rectangular",height:180})},`skeleton-${e}`)}export{He as C,Ye as E,qe as F,Re as N,Le as S,Je as U,L as t};
