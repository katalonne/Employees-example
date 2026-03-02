import{r as $,c as T,j as o,A as Q,F as X,T as q,B as Z,a as P,b as ee,d as te,e as oe,s as L,S as se,o as le,f as ne,M as ie,g as re,C as ae,h as ce,i as de,I as he,k as me,l as D,m as ue,G as H,n as pe}from"./vendor-DqEqM8TW.js";const ge=$.memo(t=>{const e=T.c(9),{text:d,sx:l,onClick:a}=t,c=d===void 0?"":d;let r;e[0]!==l?(r=l===void 0?{}:l,e[0]=l,e[1]=r):r=e[1];const h=r,i=a===void 0?xe:a;let s;e[2]!==h?(s={width:"200px",boxShadow:"none",borderRadius:1,px:2.5,gap:.5,...h},e[2]=h,e[3]=s):s=e[3];let n;e[4]===Symbol.for("react.memo_cache_sentinel")?(n=o.jsx(Q,{}),e[4]=n):n=e[4];let m;return e[5]!==i||e[6]!==s||e[7]!==c?(m=o.jsxs(X,{onClick:i,color:"primary",sx:s,variant:"extended",size:"medium",children:[c,n]}),e[5]=i,e[6]=s,e[7]=c,e[8]=m):m=e[8],m});function xe(){}const Ee=$.memo(t=>{const e=T.c(9),{logoText:d,logoutText:l}=t,a=d===void 0?"":d,c=l===void 0?"":l;let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r={flexGrow:1},e[0]=r):r=e[0];let h;e[1]===Symbol.for("react.memo_cache_sentinel")?(h={flexGrow:1},e[1]=h):h=e[1];let i;e[2]!==a?(i=o.jsx(q,{variant:"h6",color:"primary.light",fontWeight:"bold",component:"div",sx:h,children:a}),e[2]=a,e[3]=i):i=e[3];let s;e[4]!==c?(s=o.jsx(Z,{variant:"outlined",children:o.jsx(q,{variant:"body2",fontWeight:"bold",color:"primary.light",children:c})}),e[4]=c,e[5]=s):s=e[5];let n;return e[6]!==i||e[7]!==s?(n=o.jsx(P,{sx:r,children:o.jsx(ee,{position:"static",color:"white",elevation:0,children:o.jsxs(te,{children:[i,s]})})}),e[6]=i,e[7]=s,e[8]=n):n=e[8],n}),z=oe({palette:{white:{main:"#fff",contrastText:"#000"}},typography:{button:{textTransform:"none"}},components:{MuiFab:{styleOverrides:{root:({theme:t})=>({boxShadow:"none",backgroundColor:t.palette.primary.light,"&:hover":{backgroundColor:t.palette.primary.dark}}),primary:({theme:t})=>({backgroundColor:t.palette.primary.light,"&:hover":{backgroundColor:t.palette.primary.dark}})}},MuiButton:{styleOverrides:{contained:({theme:t})=>({backgroundColor:t.palette.primary.light,boxShadow:"none","&:hover":{backgroundColor:t.palette.primary.dark,boxShadow:"none"}})},defaultProps:{disableElevation:!0}},MuiInput:{styleOverrides:{root:({theme:t})=>({"&:after":{borderBottomColor:t.palette.primary.light}})}},MuiInputLabel:{styleOverrides:{root:({theme:t})=>({"&.Mui-focused":{color:t.palette.primary.light}})}}}}),Fe=["Working","On Vacation","Lunch Time","Business Trip"],Me="http://localhost:3001",fe={Working:z.palette.success.light,"On Vacation":z.palette.error.light,"Lunch Time":z.palette.warning.light,"Business Trip":z.palette.secondary.light},ve=L("div")(({theme:t,value:e})=>`
    position: relative;
    width: 12px;
    height: 12px;
    background-color: ${fe[e]||t.palette.success.main};
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
`),be=L(se)(({backgroundcolor:t,showborderbottom:e,padding:d="10px 0px 10px 0px",height:l="auto"})=>`
    height: ${l};
    background-color: ${t};
    
    & .${le.notchedOutline} {
      border-top: none;
      border-left: none;
      border-right: none;
      ${e==="true"?"":"border-bottom: none;"}
      border-radius: 0;
      padding: 0 4px;
    }

    & .${ne.select} {
      padding: ${d};
      display:flex;
      height: 100%;
      align-items: center;
    }
  `),J=t=>{const e=T.c(32),{emptyValue:d,value:l,backgroundColor:a,showBorderBottom:c,padding:r,height:h,width:i,variant:s,options:n,onSelect:m}=t,u=d===void 0?"Select value":d,p=l===void 0?"":l,v=a===void 0?"transparent":a,S=c===void 0?!0:c,w=r===void 0?"10px 0px 10px 0px":r,C=h===void 0?"auto":h,y=i===void 0?"100%":i,j=s===void 0?"":s;let b;e[0]!==n?(b=n===void 0?[]:n,e[0]=n,e[1]=b):b=e[1];const x=b,f=m===void 0?ye:m;let g;e[2]!==p?(g={selectValue:p},e[2]=p,e[3]=g):g=e[3];const[k,M]=$.useState(g);let U,O;e[4]!==p?(U=()=>{M(_=>({..._,selectValue:p}))},O=[p],e[4]=p,e[5]=U,e[6]=O):(U=e[5],O=e[6]),$.useEffect(U,O);const{selectValue:R}=k;let N;e[7]!==f?(N=_=>{M(K=>({...K,selectValue:_})),f(_)},e[7]=f,e[8]=N):N=e[8];const W=N,Y=j;let B;e[9]!==y?(B={minWidth:120,width:y},e[9]=y,e[10]=B):B=e[10];let I;e[11]!==S?(I=S.toString(),e[11]=S,e[12]=I):I=e[12];let A;e[13]!==W?(A=_=>W(_.target.value),e[13]=W,e[14]=A):A=e[14];let V;e[15]!==u?(V=_=>_?o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx(ve,{value:_}),_]}):o.jsx("div",{style:{opacity:.6},children:u}),e[15]=u,e[16]=V):V=e[16];let E;e[17]!==x?(E=x.map(Se),e[17]=x,e[18]=E):E=e[18];let F;e[19]!==v||e[20]!==C||e[21]!==w||e[22]!==R||e[23]!==I||e[24]!==A||e[25]!==V||e[26]!==E?(F=o.jsx(be,{height:C,padding:w,showborderbottom:I,backgroundcolor:v,displayEmpty:!0,value:R,onChange:A,renderValue:V,children:E}),e[19]=v,e[20]=C,e[21]=w,e[22]=R,e[23]=I,e[24]=A,e[25]=V,e[26]=E,e[27]=F):F=e[27];let G;return e[28]!==Y||e[29]!==B||e[30]!==F?(G=o.jsx(re,{variant:Y,sx:B,children:F}),e[28]=Y,e[29]=B,e[30]=F,e[31]=G):G=e[31],G};function ye(){}function Se(t){return o.jsx(ie,{value:t,children:t},t)}const Ce=L(ae)(({theme:t})=>`
    border-radius: 6px;
    box-shadow: none;
    &:hover {
      box-shadow: -4px 8px 25px -5px ${t.palette.primary.light};
    }
  `),je=$.memo(t=>{const e=T.c(23),{userId:d,fullName:l,status:a,imgUrl:c,imgAlt:r,statuses:h,onStatusChange:i}=t,s=l===void 0?"":l,n=a===void 0?"":a,m=c===void 0?"https://ozgrozer.github.io/100k-faces/0/6/006689.jpg":c,u=r===void 0?"":r;let p;e[0]!==h?(p=h===void 0?[]:h,e[0]=h,e[1]=p):p=e[1];const v=p,S=i===void 0?we:i;let w;e[2]===Symbol.for("react.memo_cache_sentinel")?(w={height:"180px",px:3.5,display:"flex",alignItems:"flex-end",gap:"25px"},e[2]=w):w=e[2];let C;e[3]===Symbol.for("react.memo_cache_sentinel")?(C={borderRadius:"50%",height:"100%",width:"auto",py:4},e[3]=C):C=e[3];let y;e[4]!==u||e[5]!==m?(y=o.jsx(ce,{component:"img",height:"",image:m,alt:u,sx:C}),e[4]=u,e[5]=m,e[6]=y):y=e[6];let j;e[7]===Symbol.for("react.memo_cache_sentinel")?(j={width:"100%",px:"0"},e[7]=j):j=e[7];let b;e[8]!==s?(b=o.jsx(q,{children:s}),e[8]=s,e[9]=b):b=e[9];let x;e[10]!==S||e[11]!==d?(x=M=>S(d,M),e[10]=S,e[11]=d,e[12]=x):x=e[12];let f;e[13]!==n||e[14]!==v||e[15]!==x?(f=o.jsx(J,{variant:"standard",value:n,options:v,onSelect:x}),e[13]=n,e[14]=v,e[15]=x,e[16]=f):f=e[16];let g;e[17]!==b||e[18]!==f?(g=o.jsxs(de,{sx:j,children:[b,f]}),e[17]=b,e[18]=f,e[19]=g):g=e[19];let k;return e[20]!==y||e[21]!==g?(k=o.jsxs(Ce,{sx:w,children:[y,g]}),e[20]=y,e[21]=g,e[22]=k):k=e[22],k},(t,e)=>t.userId===e.userId&&t.fullName===e.fullName&&t.status===e.status&&t.imgUrl===e.imgUrl&&t.imgAlt===e.imgAlt);function we(){}const ke=L(he)(({height:t="auto",width:e="auto"})=>`
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
  `),_e=$.memo(t=>{const e=T.c(9),{placeholder:d,height:l,width:a,value:c,onChange:r}=t,h=d===void 0?"Type to search":d,i=l===void 0?"40px":l,s=a===void 0?"auto":a,n=c===void 0?"":c,m=r===void 0?$e:r;let u;e[0]!==m?(u=S=>m(S.target.value),e[0]=m,e[1]=u):u=e[1];let p;e[2]===Symbol.for("react.memo_cache_sentinel")?(p=o.jsx(me,{}),e[2]=p):p=e[2];let v;return e[3]!==i||e[4]!==h||e[5]!==u||e[6]!==n||e[7]!==s?(v=o.jsx(ke,{height:i,width:s,value:n,onChange:u,placeholder:h,startAdornment:p}),e[3]=i,e[4]=h,e[5]=u,e[6]=n,e[7]=s,e[8]=v):v=e[8],v});function $e(){}const Ue=t=>{const e=T.c(4),{error:d}=t;let l,a;e[0]===Symbol.for("react.memo_cache_sentinel")?(l=o.jsx("p",{children:"Something went wrong:"}),a={color:"red"},e[0]=l,e[1]=a):(l=e[0],a=e[1]);const c=d||d?.message;let r;return e[2]!==c?(r=o.jsxs("div",{role:"alert",children:[l,o.jsx("pre",{style:a,children:c})]}),e[2]=c,e[3]=r):r=e[3],r},Oe=$.memo(t=>{const e=T.c(22),{onCreateClick:d,searchValue:l,onSearchChange:a,statuses:c,selectedStatus:r,onStatusFilterChange:h}=t,i=d===void 0?Te:d,s=l===void 0?"":l,n=a===void 0?Be:a;let m;e[0]!==c?(m=c===void 0?[]:c,e[0]=c,e[1]=m):m=e[1];const u=m,p=r===void 0?"All":r,v=h===void 0?Ie:h;let S;e[2]!==u?(S=["All",...u],e[2]=u,e[3]=S):S=e[3];const w=S;let C;e[4]===Symbol.for("react.memo_cache_sentinel")?(C={height:60},e[4]=C):C=e[4];let y;e[5]===Symbol.for("react.memo_cache_sentinel")?(y={height:"100%"},e[5]=y):y=e[5];let j;e[6]!==i?(j=o.jsx(ge,{text:"Create",sx:y,onClick:i}),e[6]=i,e[7]=j):j=e[7];let b;e[8]===Symbol.for("react.memo_cache_sentinel")?(b={flexGrow:1,height:"100%"},e[8]=b):b=e[8];let x;e[9]!==n||e[10]!==s?(x=o.jsx(_e,{height:"100%",width:"100%",value:s,onChange:n}),e[9]=n,e[10]=s,e[11]=x):x=e[11];let f;e[12]!==v||e[13]!==p||e[14]!==w?(f=o.jsx(J,{emptyValue:"Filter by status",height:"100%",width:"300px",backgroundColor:"#fff",showBorderBottom:!1,padding:"10px 0px 10px 25px",options:w,value:p,onSelect:v}),e[12]=v,e[13]=p,e[14]=w,e[15]=f):f=e[15];let g;e[16]!==x||e[17]!==f?(g=o.jsxs(D,{direction:"row",sx:b,children:[x,f]}),e[16]=x,e[17]=f,e[18]=g):g=e[18];let k;return e[19]!==j||e[20]!==g?(k=o.jsxs(D,{direction:"row",spacing:2,sx:C,children:[j,g]}),e[19]=j,e[20]=g,e[21]=k):k=e[21],k});function Te(){}function Be(){}function Ie(){}const Ne=$.memo(t=>{const e=T.c(14),{users:d,isLoading:l,isError:a,statuses:c,onStatusChange:r}=t;let h;e[0]===Symbol.for("react.memo_cache_sentinel")?(h={xs:1,sm:2,md:4},e[0]=h):h=e[0];let i;e[1]!==a?(i=a&&o.jsx(D,{sx:{width:"100%"},spacing:2,children:o.jsx(ue,{severity:"error",children:String(a.message||a)})}),e[1]=a,e[2]=i):i=e[2];let s;e[3]!==l?(s=l&&Array.from({length:3}).map(Ae),e[3]=l,e[4]=s):s=e[4];let n;e[5]!==l||e[6]!==r||e[7]!==c||e[8]!==d?(n=!l&&d.map(u=>o.jsx(H,{size:{xs:12,sm:12,md:6,lg:4},children:o.jsx(je,{userId:u.id,fullName:u.name,status:u.status,imgUrl:u.img??"",imgAlt:`${u.name} img`,statuses:c,onStatusChange:r})},u.id)),e[5]=l,e[6]=r,e[7]=c,e[8]=d,e[9]=n):n=e[9];let m;return e[10]!==i||e[11]!==s||e[12]!==n?(m=o.jsxs(H,{container:!0,spacing:h,children:[i,s,n]}),e[10]=i,e[11]=s,e[12]=n,e[13]=m):m=e[13],m});function Ae(t,e){return o.jsx(H,{size:{xs:12,sm:12,md:6,lg:4},children:o.jsx(pe,{variant:"rectangular",height:180})},`skeleton-${e}`)}export{Me as A,Oe as C,Ue as E,Ee as N,Fe as S,Ne as U,z as t};
