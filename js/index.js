// изображение, идущее по периметру экрана

var point = document.createElement('img')
point.className = "personage"
point.currentPosition = [0,0]
point.currentDirection = "right"
point.src = "images/master.png"
document.body.appendChild(point)
point.interval = setInterval ( movePoint, 100 )
// 
// =======================  function setPointPosition
function setPointPosition () {
	point.style.top = point.currentPosition [1] + 'px'
	point.style.left = point.currentPosition [0] + 'px'
}
// ==============================  function movePoint
function movePoint () {
   var x = point.currentPosition [0]
	 var y = point.currentPosition [1]
	 var dir = point.currentDirection
	 var w = window.innerWidth - 55
	 var h = window.innerHeight - 65
	 var dx = 0
	 var dy = 0
	 switch ( point.currentDirection ) {
	   case "right":
		     dx = ( x < w ) ? 5 : 0
			   dy = ( x < w ) ? 0 : 5
			   dir = ( x < w )? dir : "bottom"
			   break
		 case "bottom":
		     dx = ( y < h ) ? 0 : -5
			   dy = ( y < h ) ? 5 : 0
			   dir = ( y < h )? dir : "left"
			   break
		 case "left":
		     dx = ( x > 0 ) ? -5 : 0
			   dy = ( x > 0 ) ? 0 : -5
			   dir = ( x > 0 )? dir : "top"
			   break
		 case "top":
		     dx = ( y > 0 ) ? 0 : 5
			   dy = ( y > 0 ) ? -5 : 0
			   dir = ( y > 0 )? dir : "right"
			   break
		 default:
		     break
	 }
	 point.currentDirection = dir
	 point.currentPosition [0] += dx
	 point.currentPosition [1] += dy
	 setPointPosition ()
}

// _______________________
// вывод описания знаков на экран
var text 

var request = new XMLHttpRequest()
request.onreadystatechange = function(event){
   if (this.readyState === 4)
      if (this.status ===200){
          text =  JSON.parse(this.responseText)
          for ( var elem of text){
              var text = document.createElement('div')
              text.src = elem.content
              document.body.appendChild(text)
              text.title = elem.name
              text.className = ""
          }    
      } 
}
request.open("GET","content.json")
request.send()
// ______________

// показ сообщения с контентом
// var messages = content.json.name
// var messageHeaders = content.json.content

// var messages = [ 
//   "тип события ('click', 'mousover', 'mouseenter')", 
//   "ссылка на элемент, на котором произошло событие", 
//   "координата Х указателя мышки в момент события", 
//   "координата Y указателя мышки в момент события"]

// var messageHeaders = [
//  "images/oven.png",
// 	"images/telets.png",
// 	"images/bliznetsy.png",
// 	"images/rak.png",
// 	"images/lev.png",
// 	"images/deva.png",
// 	"images/vesy.png",
// 	"images/scorpion.png",
// 	"images/strelets.png",
// 	"images/kozerog.png",
// 	"images/vodoley.png",
// 	"images/ryby.png"
// ]


// function createTitle (event) {
  
//   if ( !messages || !messageHeaders ) return
  
//   event.target.style.display = "none"
  
//   var messWin = document.createElement('p')
//   messWin.className = "textBox"
//   document.body.appendChild ( messWin )
//   messWin.style.display = 'none'
//   messWin.onclick = function ( event ) {
//     event.target.style.display = "none"
//   }
  
//   var pictBlock = document.createElement('img')
//   pictBlock.src = "messageHeaders [i]"
//   document.body.appendChild(pictBlock)

//   pictBlock.className = "menu"
  
//   for ( var i=0; i < messageHeaders.length; i++ ) {
//     var messHead = document.createElement('h3')
//     messHead.innerHTML = messageHeaders [i]
//     messHead.className = "textHeader"
//     messHead.txt = messages [i]
//     pictBlock.appendChild ( messHead )
    
//     pict.onclick = function ( event ) {
//       messWin.innerHTML = event.target.txt
//       messWin.style.display = 'block'
//     }
//   }
// }

