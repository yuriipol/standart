import{u as L,j as e,c as S,d as T,r as n,N as w,O as I}from"./index-d5fe204f.js";import{n as O}from"./index.browser-7e542916.js";import{u as B,g as D,a as M}from"./useAuth-1328309a.js";import{l as F,m as $,F as q,n as E,i as A,k as U}from"./Footer-f385431a.js";import"./TextField-254e3e66.js";import{g as f,d as R,c as G}from"./api-6141b390.js";const H="_container_iymaa_1",J="_containerLogOut_iymaa_24",K="_nameLogOut_iymaa_30",Q="_logout_iymaa_39",V="_userName_iymaa_62",v={container:H,containerLogOut:J,nameLogOut:K,logout:Q,userName:V},W=()=>{const l=B(),_=()=>{l(T())},{email:a}=L(D);return M()?e.jsx("div",{className:v.containerLogOut,children:e.jsxs("div",{className:v.nameLogOut,children:[e.jsx("span",{className:v.userName,children:a}),e.jsx(F,{onClick:_,className:v.logout})]})}):e.jsx(S,{to:"/"})},X="_container_1v3zy_1",Y="_bgcolor_1v3zy_24",Z="_bgContainer_1v3zy_28",ee="_title_1v3zy_33",te="_addProductButton_1v3zy_60",se="_plusButton_1v3zy_98",ae="_listProductsTitle_1v3zy_110",oe="_headerProducts_1v3zy_135",ne="_headerProductsTitle_1v3zy_147",ce="_productItem_1v3zy_219",re="_itemContainer_1v3zy_231",ie="_name_1v3zy_235",de="_description_1v3zy_279",le="_imgContainer_1v3zy_326",ue="_image_1v3zy_332",me="_priceContainer_1v3zy_350",_e="_price_1v3zy_350",pe="_category_1v3zy_398",he="_editProduct_1v3zy_443",ge="_deleteProduct_1v3zy_464",xe="_loadMore_1v3zy_482",t={container:X,bgcolor:Y,bgContainer:Z,title:ee,addProductButton:te,plusButton:se,listProductsTitle:ae,headerProducts:oe,headerProductsTitle:ne,productItem:ce,itemContainer:re,name:ie,description:de,imgContainer:le,image:ue,priceContainer:me,price:_e,category:pe,editProduct:he,deleteProduct:ge,loadMore:xe},Ne="_container_1w138_1",je="_form_1w138_24",Pe="_title_1w138_31",ve="_addName_1w138_48",ye="_addDescription_1w138_72",Ce="_addLink_1w138_93",fe="_addPrice_1w138_94",be="_add_1w138_48",r={container:Ne,form:je,title:Pe,addName:ve,addDescription:ye,addLink:Ce,addPrice:fe,add:be},ke=({onSubmit:l,id:_,toggleModal:a})=>{const[i,d]=n.useState(""),[g,x]=n.useState(""),[N,j]=n.useState(""),[u,P]=n.useState(""),m=p=>{const{name:h,value:s}=p.currentTarget;switch(h){case"name":d(s);break;case"link":x(s);break;case"price":j(s);break;case"description":P(s);break;default:return}},y=p=>{p.preventDefault();const h={name:i,gallery:g,price:parseFloat(N),description:u};l(_,h),C(),a()},C=()=>{d(""),x(""),P(""),j("")};return e.jsx("div",{children:e.jsxs("form",{onSubmit:y,className:r.ChangeForm,children:[e.jsxs("div",{className:r.form,children:[e.jsx("h1",{className:r.title,children:"Заповніть інформацію"}),e.jsx("input",{value:i,onChange:m,name:"name",placeholder:"назва товару",required:!0,type:"text",className:r.addName}),e.jsx("textarea",{value:u,onChange:m,name:"description",placeholder:"опис продукту",required:!0,type:"text",autoFocus:!0,className:r.addDescription}),e.jsx("input",{value:g,onChange:m,name:"link",placeholder:"посилання на товар",required:!0,type:"text",className:r.addLink}),e.jsx("input",{value:N,onChange:m,name:"price",placeholder:"Введіть вартість",required:!0,type:"text",className:r.addPrice})]}),e.jsx("button",{type:"submit",className:r.add,children:"Додати товар"})]})})},Oe=()=>{const[l,_]=n.useState(!1),[a,i]=n.useState([]),[d,g]=n.useState(1),[x,N]=n.useState({});console.log(d),console.log(a),n.useEffect(()=>{(async()=>{const o=await f(d);i(c=>[...c,...o])})()},[d]);const j=async()=>{const s=await f(d);i([...s])},u=()=>{_(!l)},P=s=>{const o=a.find(c=>c.id===s.currentTarget.id);N(o)},m=s=>{R(s);const o=a.filter(c=>c.id!==s);i(o)},y=(s,o)=>{G(s,o)},C=()=>{g(s=>s+1)},p=a==null?void 0:a.map(({id:s,gallery:o,name:c,category:b,price:k,description:z})=>e.jsx("li",{className:t.productItem,id:s,onClick:P,children:e.jsxs("div",{className:t.itemContainer,children:[e.jsx("p",{className:t.name,children:c}),e.jsx("p",{className:t.description,children:z}),e.jsxs("div",{className:t.imgContainer,children:[e.jsx("img",{className:t.image,src:o,alt:c,id:s}),e.jsxs("div",{className:t.priceContainer,children:[e.jsxs("p",{className:t.price,children:[k," грн."]}),e.jsx("p",{className:t.category,children:b}),e.jsx($,{className:t.editProduct,id:s,onClick:u}),e.jsx(q,{className:t.deleteProduct,onClick:()=>m(s)})]})]})]})},O())),{id:h}=x;return e.jsxs("div",{className:t.bgcolor,children:[e.jsx(W,{}),e.jsxs("div",{className:t.bgContainer,children:[e.jsx("h1",{className:t.title,children:"Додавайте товари та редагуйте асортимент"}),e.jsx(w,{to:"/add",children:e.jsxs("button",{type:"button",className:t.addProductButton,children:[e.jsx(E,{className:t.plusButton}),e.jsx("span",{children:"Додати новий товар"})]})}),e.jsx(I,{}),e.jsx("h2",{className:t.listProductsTitle,onClick:j,children:"Список товарів"}),e.jsxs("div",{className:t.headerProducts,children:[e.jsx("p",{className:t.headerProductsTitle,children:"Назва"}),e.jsx("p",{className:t.headerProductsTitle,children:"Опис"}),e.jsx("p",{className:t.headerProductsTitle,children:"Вартість"}),e.jsx("p",{className:t.headerProductsTitle,children:"Категорія"}),e.jsx("p",{className:t.headerProductsTitle,children:"Редагувати"})]}),e.jsx("ul",{className:t.products,children:p}),e.jsx("button",{type:"button",className:t.loadMore,onClick:C,children:"Загурзити ще"}),l&&e.jsx(A,{onClose:u,children:e.jsx(ke,{onSubmit:y,id:h,toggleModal:u})})]}),e.jsx(U,{})]})};export{Oe as default};
