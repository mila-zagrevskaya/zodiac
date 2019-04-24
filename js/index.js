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
	 var w = window.innerWidth - 60
	 var h = window.innerHeight - 80
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

function getInform (url) {
  var container = document.querySelector (".sign")
   var messWin = document.createElement("div")
    messWin.className = "textBox"
    container.appendChild ( messWin )
    messWin.style.display = "none"
    messWin.style.display = "block"
    messWin.innerHTML = getFileFromServer ( url )
    messWin.onclick = function ( event ) {
      event.target.style.display = "none"
    }


   function getFileFromServer ( url ) {
		 fetch ( url )
     .then(
         response => response.json()
            .then (
                response => response.forEach (
                    item => (
                         elem => [ { src: item.ref } , { title: item.title} ]
                              .forEach ( attr => Object.assign ( elem, attr ) )
                    )(
                       document.querySelector(".textBox")
                           .appendChild (
                              document
                                 .createElement("img")
                           )
                    )
                )
           )
    )
	}
}
