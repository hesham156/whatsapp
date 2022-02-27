const data = [
    {
        name:'hesham ',
        img:'',
        time:'6:05pm',
        msg:'اهلا بكم'
    },
    {
        name:'Ahmed',
        img:'',
        time:'7:00pm',
        msg:'في'
    },
    {
        name:'Mohamed',
        img:'',
        time:'10:00am',
        msg:'محاكاه'
    },
    {
        name:'Ali',
        img:'',
        time:'6:00pm',
        msg:'واتساب'
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
    }}else{
        if(sett.height==='0px' ||sett.height===''){
            sett.height='170px'
        }else if(sett.height === '170px'){
            sett.height='0px'
        }
    }
}
const msguser = (i)=>{
    const msg = document.getElementById("msg") 
    const div = document.createElement('div')
    const div1 = document.createElement('div')
    div1.onclick = ()=>{clickTo(i);}
    div.classList.add('box','position-relative')
    div.innerHTML = `
    <div class="msg w-100 center justify-content-end position-relative">
    <div class="time center h-100 overflow-hidden flex-column justify-content-start">
    <p>${data[i].time}</p>
    
  </div>
  <div class="mscont center flex-column align-items-start justify-content-start h-100">
    <h4>${data[i].name}</h4>
    <p>${data[i].msg}</p>

  </div>
  <div class="msimg"></div>
  </div>
  <div  class="back w-100 h-100 position-absolute">
  <i onclick="setting('msg-id${data[i].name}')" class="fas fa-angle-down">
    </i>
    <ul id="msg-id${data[i].name}" class=" center flex-column position-absolute ">
      <li>${data[i].name}</li>
      <li>mmmmmm</li>
      <li>mmmmmm</li>
      <li>mmmmmm</li>
      <li>mmmmmm</li>
    </ul>
  </div>
    ` 
    div1.appendChild(div)
    msg.appendChild(div1)

}
onload = ()=>{
    for(let i=0;i<data.length;i++){
        msguser(i)
        userpage(i)
    }
}
const clickTo = (z)=>{
const ch = document.getElementById('msg').children
const pages = document.getElementById('userpage').children
for(let i = 0 ; i<data.length;i++){
    ch[i].classList.remove('per','d1')
    pages[i].classList.add('h-0')
    pages[i].classList.remove('h-100')
}
 ch[z].classList.add('per','d1')
 pages[z].classList.add('h-100','bg')
 pages[z].classList.remove('h-0')
}
const userpage = (i)=>{
    const page = document.getElementById('userpage')
    const div = document.createElement('div')
    div.classList.add('w-100','h-0','position-absolute','top-0','overflow-hidden','center','justify-content-start','flex-column')
    div.innerHTML=`
    <div class='page-top w-100 center'>
       <div class='opt w-50 h-100 center' >
          <ul class="w-100 center">
            <li><i class="fas fa-ellipsis-v"></i></li>
            <li><i class="fas fa-phone"></i></li>
            <li><i class="fas fa-video"></i></li>
          </ul>
       </div>
       <div class='user-info w-50 h-100 center'>
                <div class='text'><h4>${data[i].name}</h4></div>
                <div class='img'></div>
       </div>
    </div>
    `
    page.appendChild(div)
    page.classList.add('position-relative')
}