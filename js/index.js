const data = [
    {
        name:'hesham ',
        img:'./img/download (1).png',
        time:'6:05pm',
        msg:'اهلا بكم',
        del:false,
        pio:"صلي علي النبي"
    
    },
    {
        name:'Ahmed',
        img:'./img/download (2).png',
        time:'7:00pm',
        msg:'في',
        del:true,
        pio:'لسه في وقت كمل'

    },
    {
        name:'Mohamed',
        img:'./img/download.jpg',
        time:'10:00am',
        msg:'محاكاه',
        del:false,
        pio:'بكره ترووق وتحلي'


    },
    {
        name:'Hesham Ahmed',
        img:'./img/8b167af653c2399dd93b952a48740620.jpg',
        time:'6:00pm',
        msg:'واتساب',
        del:false,
        pio:'اي كلام'

    },
    {
        name:'Ali',
        img:'./img/download.png',
        time:'6:00pm',
        msg:'واتساب',
        del:true,
        'pio':'بعدين بعدين'

    },
    {
        name:'Ali',
        img:'./img/download.png',
        time:'6:00pm',
        msg:'واتساب',
        del:false,
        'pio':'انا عااطف معااكوا'

    },
    {
        name:'Mahmoud',
        img:'./img/image-260nw-386032732-removebg-preview (1).png',
        time:'10:05pm',
        msg:'واتساب',
        del:false,
        pio:'منور يصحبي'

    },
    {
        name:'fatma',
        img:'./img/download (1).jpg',
        time:'6:00pm',
        msg:'واتساب',
        del:true,
        'pio':'جمله مفيده مبين قوسين'

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
}else if(id==='frind'){
    if(sett.height==='0px' ||sett.height===''){
        sett.height='calc(100vh - 60px)'
    }else if(sett.height === 'calc(100vh - 60px)'){
        sett.height='0px'
    }
}

else{
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
    div1.onclick = ()=>{clickTo(i);userpage(i);}
    div1.id=`m${i}`
    div.classList.add('box','position-relative')
    div.innerHTML = `
    <div  class="msg w-100 center justify-content-end position-absolute">
    <div class="time center h-100 overflow-hidden flex-column justify-content-start">
    <p>${data[i].time}</p>
    <span style=${data[i].del?"background:#68ff68;box-shadow:0px 0px 7px #6af26a;":"background:#111b21;box-shadow:0px 0px 7px #222e35"} class="b-r-50 position-absolute">
      <p>${data[i].del?"Online":"Ofline"}</p>
    </span>

  </div>
  <div class="mscont center flex-column align-items-start justify-content-start h-100">
    <h4>${data[i].name}</h4>
    <p>${data[i].msg}</p>

  </div>
  <div style="background-image: url('${data[i].img}')" class="msimg"></div>
  </div>
  <div class="back h-100 w-100">
  <p class="f-r">${data[i].pio}</p>
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
    }
}
const clickTo = (z)=>{
const ch = document.getElementById('msg').children
for(let i = 0 ; i<data.length;i++){
    ch[i].classList.remove('per','d1')

    
}
 ch[z].classList.add('per','d1')

}
let date = new Date()
const userpage = (i)=>{
    const page = document.getElementById('userpage')
    page.innerHTML=`
    <div class='top-0 w-100 h-100 center overflow-hidden justify-content-start flex-column position-absolute'>
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
    <div id="page-body" class="page-body overflow-auto w-100">
     <div id="mus${i}" class=" container">
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
         <li class=" center w-75"> <form class=" w-100 center"><input id='themsg${i}' onkeyup='cha(event,${i})' class="w-100" placeholder="كتابه رساله" type="text"></form> </li>
         <li><i class="fas fa-link"></i></li>
         <li><i class="fas fa-grin"></i></li>
      </ul>
    
    </div>
    </div>
    `
    page.classList.add('position-relative')
}

const delet = (i)=>{
  document.getElementById(`m${i}`).style.display="none"
  data[i].del=true;
}
const cha = (event,i)=>{
    const send = document.getElementById(`se${i}`)
    if(event.target.value===''||event.target.value==="undefined"||event.target.value===' '){
        send.innerHTML='<i class="fas fa-microphone"></i>'

    }else{
        send.innerHTML=`<i  onclick="sendmsg('${event.target.value}',${i})" class="fas fa-paper-plane"></i>`
    }
}
const sendmsg = (msg,i)=>{
    if(msg!=="undefined"){
 const mus = document.getElementById(`mus${i}`)
 const page = document.getElementById(`page-body`)
 const themsg = document.getElementById(`themsg${i}`)
 const div = document.createElement('div')
 div.classList.add('mus','center','overflow-hidden')
 div.innerHTML=`
  <p>${date.getHours()}:${date.getMinutes()}</p>
 <h5>${msg}</h5>`
page.scrollTo(0,40*9000000)
 mus.appendChild(div)
 themsg.focus()
 themsg.value=''

}
}
