const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const canvasWidth = canvas.width = 225;
const canvasHeight = canvas.height = 276;

const playerImage = new Image();
playerImage.src = 'sporty_boy.jpg';

const spriteWidth = 225;
const spriteHeight = 276;

let frameX = 0;
let gameFrame = 0;

const staggerFrame = 15;

function animation1(){
	const frameY = 0;
	ctx.clearRect(0,0, canvasWidth, canvasHeight);
	//ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
	ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
	if(gameFrame % staggerFrame == 0){
		if(frameX < 4)
		{
			frameX++;
		}
		else{
			frameX=0;
		}
	}
	gameFrame++;
	requestAnimationFrame(animation1);
}
function animation2(){
	const frameY = 1;
	ctx.clearRect(0,0, canvasWidth, canvasHeight);
	//ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
	ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
	if(gameFrame % staggerFrame == 0){
		if(frameX < 5)
		{
			frameX++;
		}
		else{
			frameX=0;
		}
	}
	gameFrame++;
	requestAnimationFrame(animation2);
}
function animation3(){
	const frameY = 2;
	ctx.clearRect(0,0, canvasWidth, canvasHeight);
	//ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
	ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
	if(gameFrame % staggerFrame == 0){
		if(frameX < 4)
		{
			frameX++;
		}
		else{
			frameX=0;
		}
	}
	gameFrame++;
	requestAnimationFrame(animation3);
}
// animation1();
// animation2();
animation3();
