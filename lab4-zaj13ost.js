document.addEventListener('DOMContentLoaded', () => {

    canvas = document.getElementById('c')
    if (!canvas.getContext) {throw new Error('Brak f. "getContext"!')}
    c = canvas.getContext('2d')

    // Rysowanie czworokatami prostokatnymi:
    // c.fillRect(x,y,w,h)
    // c.strokeRect(x,y,w,h)
    // c.clearRect(x,y,w,h)
    c.fillRect(50,50,100,100)
    c.strokeRect(50,250,100,100)
    c.clearRect(70,70,60,60)

    // Rysowanie liniami prostymi:
    c.beginPath()
    // c.lineTo(x,y)
    // c.moveTo(x,y)
    c.moveTo(250,250)
    c.lineTo(300,350)
    c.lineTo(250,350)
    // c.lineTo(250,250)
    c.lineWidth = 5
    c.strokeStyle = '#a00'
    c.stroke()
    c.fillStyle = '#0a0'
    c.fill()
    c.closePath()

    c.beginPath()
    c.moveTo(100,260)
    c.lineTo(140,340)
    c.lineTo(60,340)
    c.lineWidth = 1
    c.closePath()
    c.stroke()

    // Rysowanie lukami po okregu:
    // c.arc(x,y,r,s,e,*c)
    // c.moveTo(270,100)
    // c.arc(250,100,20,0,Math.PI*2)
    c.beginPath()
    c.moveTo(250,100)
    c.arc(250,100,25,0,Math.PI*0.5)
    c.moveTo(320,100)
    c.arc(320,100,25,0,Math.PI)
    c.moveTo(390,100)
    c.arc(390,100,25,0,Math.PI*1.5)
    c.moveTo(460,100)
    c.arc(460,100,25,0,Math.PI*2)
    c.fill()
    c.stroke()
    c.closePath()

    // Text:
    // c.fillText('text',x,y)
    // c.strokeText('text',x,y)
    c.font = '30px Arial'
    c.fillText('Fill Text',400,250)
    c.strokeText('Stroke Text',400,350)

})