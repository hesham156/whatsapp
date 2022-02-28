const data = [
    {
        name:'hesham ',
        img:'./img/download (1).png',
        time:'6:05pm',
        msg:'اهلا بكم',
        del:false,
    
    },
    {
        name:'Ahmed',
        img:'./img/download (2).png',
        time:'7:00pm',
        msg:'في',
        del:true,

    },
    {
        name:'Mohamed',
        img:'./img/download.jpg',
        time:'10:00am',
        msg:'محاكاه',
        del:false,


    },
    {
        name:'Hesham Ahmed',
        img:'./img/8b167af653c2399dd93b952a48740620.jpg',
        time:'6:00pm',
        msg:'واتساب',
        del:false,


    },
    {
        name:'Ali',
        img:'./img/download.png',
        time:'6:00pm',
        msg:'واتساب',
        del:true,

    },
    {
        name:'Ali',
        img:'./img/download.png',
        time:'6:00pm',
        msg:'واتساب',
        del:false,

    },
    {
        name:'Mahmoud',
        img:'./img/image-260nw-386032732-removebg-preview (1).png',
        time:'10:05pm',
        msg:'واتساب',
        del:false,

    },
    {
        name:'fatma',
        img:'./img/download (1).jpg',
        time:'6:00pm',
        msg:'واتساب',
        del:true,

    },


]
const setting = (id)=>{
    const sett = document.getElementById(id).style;
   if(id==="setting"){
    if(sett.height==='0px' ||sett.height===''){
        sett.height='170px'
        sett.width='190px'
    }else if(sett.height === '170px'){
        sett.height='0px'
        sett.width='0px'
    }
}else{
        if(sett.height==='0px' ||sett.height===''){
            sett.height='200px'
        }else if(sett.height === '200px'){
            sett.height='0px'
        }
    }
}
const msguser = (i)=>{
    const msg = document.getElementById("msg") 
    const div = document.createElement('div')
    const div1 = document.createElement('div')
    div1.onclick = ()=>{clickTo(i);userpage(i)}
    div1.id=`m${i}`
    div.classList.add('box','position-relative')
    div.innerHTML = `
    <div class="msg w-100 center justify-content-end position-absolute">
    <div class="time center h-100 overflow-hidden flex-column justify-content-start">
    <p>${data[i].time}</p>
    
  </div>
  <div class="mscont center flex-column align-items-start justify-content-start h-100">
    <h4>${data[i].name}</h4>
    <p>${data[i].msg}</p>

  </div>
  <div style="background-image: url('${data[i].img}')" class="msimg"></div>
  </div>
  <div  class="back w-100 h-100 ">
  <p class="f-r">${data[i].del?"Online":"Ofline"}</p>
  <i onclick="setting('msg-id${i}')" class="fas fa-angle-down">
    </i>
    <ul id="msg-id${i}" class=" center flex-column ">
      <li>ارشفه الدردشه</li>
      <li>كتم الاشعارات</li>
      <li onclick="delet(${i})">حذف</li>
      <li>تثبيت الدردشه</li>
      <li>تمييز كغير مقروءه</li>
    </ul>
  </div>
    ` 
    div1.appendChild(div)
    msg.appendChild(div1)

}
onload = ()=>{
    for(let i=0;i<data.length;i++){
        msguser(i)
        // userpage(i)
    }
}
const clickTo = (z)=>{
const ch = document.getElementById('msg').children
// const pages = document.getElementById('userpage').children
for(let i = 0 ; i<data.length;i++){
    ch[i].classList.remove('per','d1')
    
}
 ch[z].classList.add('per','d1')

}
let date = new Date()
const userpage = (i)=>{
    const page = document.getElementById('userpage')
    const div = document.createElement('div')
    div.classList.add('w-100','h-100','position-absolute','top-0','overflow-hidden','center','justify-content-start','flex-column')
    div.innerHTML=`
    <div class='page-top w-100 h-auto center'>
       <div class='opt w-50 h-100 center' >
          <ul class="w-100 center">
            <li class="position-relative" onclick="setting('msgp${i}')">
            <i class="fas fa-ellipsis-v"></i>
            <ul id="msgp${i}" class="position-absolute center flex-column h-0 overflow-hidden">
              <li>معلومات جهه الاتصال</li>
              <li>تحديد الرسائل</li>
              <li>اغلاق الدردشه</li>
              <li>كتم الاشعارات</li>
              <li>مسح الرسائل</li>
              <li>حذف الدردشه</li>
            </ul>
            </li>
            <li><i class="fas fa-phone"></i></li>
            <li><i class="fas fa-video"></i></li>
          </ul>
       </div>
       <div class='user-info w-50 h-100 center'>
                <div class='text'><h4>${data[i].name}</h4></div>
                <div style="background-image: url('${data[i].img}')" class='img'></div>
       </div>
    </div>
    <div class="page-body w-100 center align-items-end">
     <div class=" container">
        <div class="center text-center">
        <p>${date.getHours()}:${date.getMinutes()}</p>
        <h5>${data[i].msg}</h5>
        </div>
     </div>
    </div>
    <div class="page-bottom w-100 h-auto center">
      <ul class="center w-100">
         <li id="se${i}"> <i class="fas fa-microphone"></i>
         </li>
         <li class=" center w-75"> <form class=" w-100 center"><input onkeyup='cha(event,${i})' class="w-100" placeholder="كتابه رساله" type="text"></form> </li>
         <li><i class="fas fa-link"></i></li>
         <li><i class="fas fa-grin"></i></li>
      </ul>
    
    </div>
    `
    page.appendChild(div)
    page.classList.add('position-relative')}

const delet = (i)=>{
  document.getElementById(`m${i}`).style.display="none"
  data[i].del=true;
}
const cha = (event,i)=>{
     
    const send = document.getElementById(`se${i}`)
    if(event.target.value!==''){
        send.innerHTML=`<i  class="fas fa-paper-plane"></i>`
    }else{
        send.innerHTML='<i class="fas fa-microphone"></i>'
    }
}
