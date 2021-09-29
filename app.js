const cvs = document.getElementById('game')
const ctx = cvs.getContext('2d')

const drawRect=(x,y,w,h,color) => {
    ctx.fillStyle=color
    ctx.fillRect(x,y,w,h)
}

const drawCricleF=(x,y,r,color)=>{
    ctx.fillStyle=color
    ctx.beginPath()
    ctx.arc(x,y,r,0,2 * Math.PI,false)
    ctx.closePath()
    ctx.fill()
}
const drawCricleS=(x,y,r,w,color)=>{
    ctx.strokeStyle=color
    ctx.lineWidth=w
    ctx.beginPath()
    ctx.arc(x,y,r,0,2 * Math.PI)
    ctx.closePath()
    ctx.stroke()
}
const drawText = (text,x,y,color)=>{
    ctx.fillStyle=color
    ctx.font='50px sans-serif'
    ctx.fillText(text,x,y)
}

const com={
    x:cvs.width -30,
    y:cvs.height/2 -50,
    w:10,
    h:100,
    color:'#fff',
    score:0
}


const user={
    x:20,
    y:cvs.height/2 -50,
    w:10,
    h:100,
    color:'#fff',
    score:0
}

const ball={
    x:cvs.width/2,
    y:cvs.height/2,
    r:13,
    color:'#a51890',
    speed:5,
    velocityX:3,
    velocityY:4,
    stop:true
}

const render = () => {
    drawRect(0,0,cvs.width,cvs.height,'#008374')
    drawRect(cvs.width/2 -2,0,4,cvs.height,'#fff')
    drawCricleF(cvs.width/2,cvs.height/2,8,'#fff')
    drawCricleS(cvs.width/2,cvs.height/2,50,8,'#fff')
    drawText(user.score,cvs.width/5,100,'#fff')
    drawText(com.score,3*cvs.width/4,100,'#fff')
    drawRect(user.x,user.y,user.w,user.h,user.color)
    drawRect(com.x,com.y,com.w,com.h,com.color)
    drawCricleF(ball.x,ball.y,ball.r,ball.color)
}
render()
