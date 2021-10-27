const canvas = document.querySelector('canvas')
const size = document.querySelector('.size')
const colors = document.querySelector('.color')
let ctx = canvas.getContext('2d')

canvas.width = window.innerWidth - 10
canvas.height = window.innerHeight - 10

var drawing = false;

window.addEventListener('mousedown', (e) => { drawing = true; drawCircle(e) })
window.addEventListener('touchstart', (e) => { drawing = true; drawCircle(e) })
window.addEventListener('mouseup', () => { drawing = false; console.log('point up '); ctx.beginPath() })
window.addEventListener('touchend', () => { drawing = false; console.log('point up '); ctx.beginPath() })

canvas.addEventListener('mousemove', drawCircle)
canvas.addEventListener('touchmove', drawCircle2)

function drawCircle(e) {
	let radius = size.value;
	let color = colors.value;
	if (!drawing) return;
	const arr = ['red', 'green', 'blue', 'orange', 'yellow', 'darkcyan', 'purple'];
	arr[Math.floor(Math.random() * arr.length)]
	let x = e.clientX
	let y = e.clientY


	//ctx.arc(x , y , radius , 0 , Math.PI * 2 , true)
	ctx.lineWidth = radius
	ctx.lineCap = 'round'
	ctx.lineTo(x, y)
	ctx.strokeStyle = color
	ctx.stroke()
	ctx.beginPath()
	ctx.moveTo(x, y)
}


// draw on touch
function drawCircle2(e) {
	let radius = size.value;
	let color = colors.value;
	if (!drawing) return;
	const arr = ['red', 'green', 'blue', 'orange', 'yellow', 'darkcyan', 'purple'];
	arr[Math.floor(Math.random() * arr.length)]
	let x = e.touches.clientX
	let y = e.touches.clientY


	//ctx.arc(x , y , radius , 0 , Math.PI * 2 , true)
	ctx.lineWidth = radius
	ctx.lineCap = 'round'
	ctx.lineTo(x, y)
	ctx.strokeStyle = color
	ctx.stroke()
	ctx.beginPath()
	ctx.moveTo(x, y)
	console.log(3)
}
window.addEventListener('touchstart', touch)
function touch(e) {
	console.log(e.touches)
}
// ctx.fillStyle = '#009875'
// ctx.fillRect(100, 100, 50 , 50)

// // arc / circle
// ctx.beginPath()
// ctx.arc(200 , 150  ,20, 0 , Math.PI * 2, true);
// ctx.moveTo(220  ,150)
// ctx.lineTo(180 , 150)
// ctx.strokeStyle = 'pink'
// ctx.stroke()


// for (var i = 0; i < 50;i ++) {
// 	const arr = ['red', 'green', 'blue', 'orange', 'yellow' , 'darkcyan' , 'purple'];
// 	let color = arr[Math.floor(Math.random() * arr.length)]
// 	let x = Math.random() * window.innerWidth;
// 	let y = Math.random() * window.innerHeight;

// 	ctx.beginPath()
// 	ctx.arc(x , y , 20 , 0 , Math.PI * 2 , true)
// 	ctx.strokeStyle  = color
// 	ctx.stroke()

// }