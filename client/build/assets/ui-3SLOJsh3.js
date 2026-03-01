import{c as w,j as o,A as U,F as R,T as B,B as F,a as z,b as G,d as q,e as L,s as T,S as W,f as A,o as V,r as $,g as N,M as O,C as Y,h as H,i as J,I as K,k as Q,D as X,l as Z,m as P,n as ee,p as te,q as oe,t as M}from"./vendor-cjz40oFG.js";const se=t=>{const e=w.c(9),{text:u,sx:m,onClick:d}=t,h=u===void 0?"":u;let a;e[0]!==m?(a=m===void 0?{}:m,e[0]=m,e[1]=a):a=e[1];const n=a,i=d===void 0?le:d;let s;e[2]!==n?(s={width:"200px",boxShadow:"none",borderRadius:1,px:2.5,gap:.5,...n},e[2]=n,e[3]=s):s=e[3];let r;e[4]===Symbol.for("react.memo_cache_sentinel")?(r=o.jsx(U,{}),e[4]=r):r=e[4];let c;return e[5]!==i||e[6]!==s||e[7]!==h?(c=o.jsxs(R,{onClick:i,color:"primary",sx:s,variant:"extended",size:"medium",children:[h,r]}),e[5]=i,e[6]=s,e[7]=h,e[8]=c):c=e[8],c};function le(){}const Ce=t=>{const e=w.c(9),{logoText:u,logoutText:m}=t,d=u===void 0?"":u,h=m===void 0?"":m;let a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a={flexGrow:1},e[0]=a):a=e[0];let n;e[1]===Symbol.for("react.memo_cache_sentinel")?(n={flexGrow:1},e[1]=n):n=e[1];let i;e[2]!==d?(i=o.jsx(B,{variant:"h6",color:"primary.light",fontWeight:"bold",component:"div",sx:n,children:d}),e[2]=d,e[3]=i):i=e[3];let s;e[4]!==h?(s=o.jsx(F,{variant:"outlined",children:o.jsx(B,{variant:"body2",fontWeight:"bold",color:"primary.light",children:h})}),e[4]=h,e[5]=s):s=e[5];let r;return e[6]!==i||e[7]!==s?(r=o.jsx(z,{sx:a,children:o.jsx(G,{position:"static",color:"white",elevation:0,children:o.jsxs(q,{children:[i,s]})})}),e[6]=i,e[7]=s,e[8]=r):r=e[8],r},I=L({palette:{white:{main:"#fff",contrastText:"#000"}},typography:{button:{textTransform:"none"}},components:{MuiFab:{styleOverrides:{root:({theme:t})=>({boxShadow:"none",backgroundColor:t.palette.primary.light,"&:hover":{backgroundColor:t.palette.primary.dark}}),primary:({theme:t})=>({backgroundColor:t.palette.primary.light,"&:hover":{backgroundColor:t.palette.primary.dark}})}},MuiButton:{styleOverrides:{contained:({theme:t})=>({backgroundColor:t.palette.primary.light,boxShadow:"none","&:hover":{backgroundColor:t.palette.primary.dark,boxShadow:"none"}})},defaultProps:{disableElevation:!0}},MuiInput:{styleOverrides:{root:({theme:t})=>({"&:after":{borderBottomColor:t.palette.primary.light}})}},MuiInputLabel:{styleOverrides:{root:({theme:t})=>({"&.Mui-focused":{color:t.palette.primary.light}})}}}}),Se=["Working","On Vacation","Business Trip"],ae={Working:I.palette.success.light,"On Vacation":I.palette.error.light,"Business Trip":I.palette.secondary.light},re=T("div")(({theme:t,value:e})=>`
    position: relative;
    width: 12px;
    height: 12px;
    background-color: ${ae[e]||t.palette.success.main};
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
`),ne=T(W)(({theme:t,backgroundcolor:e,showborderbottom:u,padding:m="10px 0px 10px 0px",height:d="auto"})=>`
    height: ${d};
    background-color: ${e};

    // &.${A.focused} .${V.notchedOutline} {
    //   border-color: ${t.palette.primary.light}
    // }
    
    & .${V.notchedOutline} {
      border-top: none;
      border-left: none;
      border-right: none;
      ${u==="true"?"":"border-bottom: none;"}
      border-radius: 0;
      padding: 0 4px;
    }

    & .${A.select} {
      padding: ${m};
      display:flex;
      height: 100%;
      align-items: center;
    }
  `),E=({emptyValue:t="Select value",value:e="",backgroundColor:u="transparent",showBorderBottom:m=!0,padding:d="10px 0px 10px 0px",height:h="auto",width:a="100%",variant:n="",options:i=[],onSelect:s=()=>{}})=>{const[r,c]=$.useState({selectValue:e});$.useEffect(()=>{c(l=>({...l,selectValue:e}))},[e]);const{selectValue:p}=r,x=$.useCallback(l=>{c(g=>({...g,selectValue:l})),s(l)},[p]);return o.jsx(N,{variant:n,sx:{minWidth:120,width:a},children:o.jsx(ne,{height:h,padding:d,showborderbottom:m.toString(),backgroundcolor:u,displayEmpty:!0,value:p,onChange:l=>x(l.target.value),renderValue:l=>l?o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx(re,{value:l}),l]}):o.jsx("div",{style:{opacity:.6},children:t}),children:i.map(l=>o.jsx(O,{value:l,children:l},l))})})},ie=T(Y)(({theme:t})=>`
    border-radius: 6px;
    box-shadow: none;
    &:hover {
      box-shadow: -4px 8px 25px -5px ${t.palette.primary.light};
    }
  `),je=$.memo(t=>{const e=w.c(23),{userId:u,fullName:m,status:d,imgUrl:h,imgAlt:a,statuses:n,onStatusChange:i}=t,s=m===void 0?"":m,r=d===void 0?"":d,c=h===void 0?"https://ozgrozer.github.io/100k-faces/0/6/006689.jpg":h,p=a===void 0?"":a;let x;e[0]!==n?(x=n===void 0?[]:n,e[0]=n,e[1]=x):x=e[1];const l=x,g=i===void 0?ce:i;let C;e[2]===Symbol.for("react.memo_cache_sentinel")?(C={height:"180px",px:3.5,display:"flex",alignItems:"flex-end",gap:"25px"},e[2]=C):C=e[2];let S;e[3]===Symbol.for("react.memo_cache_sentinel")?(S={borderRadius:"50%",height:"100%",width:"auto",py:4},e[3]=S):S=e[3];let b;e[4]!==p||e[5]!==c?(b=o.jsx(H,{component:"img",height:"",image:c,alt:p,sx:S}),e[4]=p,e[5]=c,e[6]=b):b=e[6];let j;e[7]===Symbol.for("react.memo_cache_sentinel")?(j={width:"100%",px:"0"},e[7]=j):j=e[7];let y;e[8]!==s?(y=o.jsx(B,{children:s}),e[8]=s,e[9]=y):y=e[9];let f;e[10]!==g||e[11]!==u?(f=D=>g(u,D),e[10]=g,e[11]=u,e[12]=f):f=e[12];let v;e[13]!==r||e[14]!==l||e[15]!==f?(v=o.jsx(E,{variant:"standard",value:r,options:l,onSelect:f}),e[13]=r,e[14]=l,e[15]=f,e[16]=v):v=e[16];let _;e[17]!==y||e[18]!==v?(_=o.jsxs(J,{sx:j,children:[y,v]}),e[17]=y,e[18]=v,e[19]=_):_=e[19];let k;return e[20]!==b||e[21]!==_?(k=o.jsxs(ie,{sx:C,children:[b,_]}),e[20]=b,e[21]=_,e[22]=k):k=e[22],k},(t,e)=>t.userId===e.userId&&t.fullName===e.fullName&&t.status===e.status&&t.imgUrl===e.imgUrl&&t.imgAlt===e.imgAlt);function ce(){}const de=T(K)(({height:t="auto",width:e="auto"})=>`
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
  `),he=t=>{const e=w.c(9),{placeholder:u,height:m,width:d,value:h,onChange:a}=t,n=u===void 0?"Type to search":u,i=m===void 0?"40px":m,s=d===void 0?"auto":d,r=h===void 0?"":h,c=a===void 0?ue:a;let p;e[0]!==c?(p=g=>c(g.target.value),e[0]=c,e[1]=p):p=e[1];let x;e[2]===Symbol.for("react.memo_cache_sentinel")?(x=o.jsx(Q,{}),e[2]=x):x=e[2];let l;return e[3]!==i||e[4]!==n||e[5]!==p||e[6]!==r||e[7]!==s?(l=o.jsx(de,{height:i,width:s,value:r,onChange:p,placeholder:n,startAdornment:x}),e[3]=i,e[4]=n,e[5]=p,e[6]=r,e[7]=s,e[8]=l):l=e[8],l};function ue(){}const _e=t=>{const e=w.c(26),{open:u,onClose:m,statuses:d}=t,h=u===void 0?!1:u,a=m===void 0?me:m;let n;e[0]!==d?(n=d===void 0?[]:d,e[0]=d,e[1]=n):n=e[1];const i=n;let s;e[2]===Symbol.for("react.memo_cache_sentinel")?(s=o.jsx(X,{sx:{borderBottom:"2px solid rgba(0,0,0,0.08)"},children:"Create New User"}),e[2]=s):s=e[2];let r,c,p;e[3]===Symbol.for("react.memo_cache_sentinel")?(r=o.jsx(Z,{autoFocus:!0,required:!0,margin:"dense",id:"name",name:"name",label:"Full Name",type:"text",fullWidth:!0,variant:"standard",color:"primary"}),c=o.jsx("br",{}),p=o.jsx("br",{}),e[3]=r,e[4]=c,e[5]=p):(r=e[3],c=e[4],p=e[5]);let x,l;e[6]===Symbol.for("react.memo_cache_sentinel")?(l={minWidth:"100%"},x=o.jsx(P,{id:"demo-simple-select-standard-label",children:"Status"}),e[6]=x,e[7]=l):(x=e[6],l=e[7]);let g;e[8]!==i?(g=i.map(fe),e[8]=i,e[9]=g):g=e[9];let C;e[10]!==g?(C=o.jsx(ee,{children:o.jsxs("form",{onSubmit:pe,id:"subscription-form",children:[r,c,p,o.jsxs(N,{variant:"standard",sx:l,children:[x,o.jsx(W,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:"",onChange:xe,label:"Age",children:g})]})]})}),e[10]=g,e[11]=C):C=e[11];let S;e[12]===Symbol.for("react.memo_cache_sentinel")?(S={justifyContent:"flex-start",padding:"20px 24px"},e[12]=S):S=e[12];let b;e[13]!==a?(b=o.jsx(F,{variant:"contained",onClick:a,children:"Create"}),e[13]=a,e[14]=b):b=e[14];let j;e[15]===Symbol.for("react.memo_cache_sentinel")?(j={color:"#000"},e[15]=j):j=e[15];let y;e[16]!==a?(y=o.jsx(F,{sx:j,onClick:a,children:"Cancel"}),e[16]=a,e[17]=y):y=e[17];let f;e[18]!==b||e[19]!==y?(f=o.jsxs(te,{sx:S,children:[b,y]}),e[18]=b,e[19]=y,e[20]=f):f=e[20];let v;return e[21]!==a||e[22]!==h||e[23]!==C||e[24]!==f?(v=o.jsx($.Fragment,{children:o.jsxs(oe,{open:h,onClose:a,fullWidth:!0,maxWidth:"xs",children:[s,C,f]})}),e[21]=a,e[22]=h,e[23]=C,e[24]=f,e[25]=v):v=e[25],v};function me(){}function pe(){}function xe(){}function fe(t){return o.jsx(O,{value:t,children:t},t)}const ke=t=>{const e=w.c(23),{onCreateClick:u,searchValue:m,onSearchChange:d,statuses:h,selectedStatus:a,onStatusFilterChange:n}=t,i=u===void 0?ge:u,s=m===void 0?"":m,r=d===void 0?be:d;let c;e[0]!==h?(c=h===void 0?[]:h,e[0]=h,e[1]=c):c=e[1];const p=c,x=a===void 0?"All":a,l=n===void 0?ye:n;let g;e[2]===Symbol.for("react.memo_cache_sentinel")?(g={height:60},e[2]=g):g=e[2];let C;e[3]===Symbol.for("react.memo_cache_sentinel")?(C={height:"100%"},e[3]=C):C=e[3];let S;e[4]!==i?(S=o.jsx(se,{text:"Create",sx:C,onClick:i}),e[4]=i,e[5]=S):S=e[5];let b;e[6]===Symbol.for("react.memo_cache_sentinel")?(b={flexGrow:1,height:"100%"},e[6]=b):b=e[6];let j;e[7]!==r||e[8]!==s?(j=o.jsx(he,{height:"100%",width:"100%",value:s,onChange:r}),e[7]=r,e[8]=s,e[9]=j):j=e[9];let y;e[10]===Symbol.for("react.memo_cache_sentinel")?(y=["All"],e[10]=y):y=e[10];let f;e[11]!==p?(f=y.concat(p),e[11]=p,e[12]=f):f=e[12];let v;e[13]!==l||e[14]!==x||e[15]!==f?(v=o.jsx(E,{emptyValue:"Filter by status",height:"100%",width:"300px",backgroundColor:"#fff",showBorderBottom:!1,padding:"10px 0px 10px 25px",options:f,value:x,onSelect:l}),e[13]=l,e[14]=x,e[15]=f,e[16]=v):v=e[16];let _;e[17]!==j||e[18]!==v?(_=o.jsxs(M,{direction:"row",sx:b,children:[j,v]}),e[17]=j,e[18]=v,e[19]=_):_=e[19];let k;return e[20]!==S||e[21]!==_?(k=o.jsx("div",{children:o.jsxs(M,{direction:"row",spacing:2,sx:g,children:[S,_]})}),e[20]=S,e[21]=_,e[22]=k):k=e[22],k};function ge(){}function be(){}function ye(){}export{ke as C,_e as F,Ce as N,je as P,Se as S,I as t};
