

//bools
var move_bools = {
up:false,down:false,left:false,right:false,punching:false,defending:false,emote:false,shunpo:false
}

//functions move
function disabled(){
    
    
    move_bools.up = false
    move_bools.down = false
    move_bools.left = false
    move_bools.right = false
    move_bools.punching = false
    move_bools.defending = false
    move_bools.emote = false
    move_bools.shunpo = false
}
function move_index(index){
    move_bools.up = true
    var sum_index = index
    console.log(index)
}
    







function screen_center(rect){
    //left
    var ancho_pagina = window.innerWidth/2 - 250
    
    var lefti = rect[0] + ancho_pagina + 'px'
    
    //top
    
    var alto_pagina = window.innerHeight/2 - 125
    
    var topi = rect[1] + alto_pagina + 'px'
    //width
    var widthi = rect[2] + 'px'
    //height
    var heighti = rect[3] + 'px'
    var list = [lefti,topi,widthi,heighti]
    //texto = String(list)
    return list
    
}

function Center_obj(){
    var listi = [document.querySelector('#boton_up'),document.querySelector('#boton_down'),document.querySelector('#boton_left'),document.querySelector('#boton_right'),document.querySelector('#boton_punch'),document.querySelector('#boton_defend'),document.querySelector('#boton_emote'),document.querySelector('#scene')]
   // var listi = ['#boton_up','#boton_down','#boton_left','#boton_right','#boton_punch','#boton_defend','#boton_emote','#p1','#p2']
    var listi_center = [screen_center([50,100,50,50]),screen_center([50,200,50,50]),screen_center([0,150,50,50]),screen_center([100,150,50,50]),screen_center([400,200,50,50]),screen_center([450,200,50,50]),screen_center([450,150,50,50]),screen_center([0,0,500,250])]
    //var element = document.querySelector(listi[clock(indexes.primero,8,1,min=0)])
    indexes.primero = clock(indexes.primero,8,1,min=0)
    var element = listi[indexes.primero]
    element.style.left = listi_center[indexes.primero][0]
    element.style.top = listi_center[indexes.primero][1]
    element.style.width = listi_center[indexes.primero][2]
    element.style.height = listi_center[indexes.primero][3]

   
}

function Hit_box(rect,rect2,distance){
    point_up = [rect[0] + rect[2]/2,rect[1] - distance]
    point_down = [rect[0] + rect[2]/2,rect[1] + rect[3] + distance]
    point_left = [rect[0] - distance,rect[1] + rect[3]/2]
    point_right = [rect[0] + rect[2] + distance,rect[1] + rect[3]/2]
    var lista_cols = [Hover(point_up,rect2),Hover(point_down,rect2),Hover(point_left,rect2),Hover(point_right,rect2)]
    return lista_cols
}


//utils
function Hover(surf_pos,rect){
    if (surf_pos[0] > rect[0] && surf_pos[0] < rect[0] + rect[2] && surf_pos[1] > rect[1] && surf_pos[1] < rect[1] + rect[3]){
        return true
    }
    else {
        return false
    }

}
function angle(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    //if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
}
function num_follow(num,num_follow,vel){
    if (num < num_follow){
        num += vel
    }
    if (num > num_follow){
        num = num - vel
    }
    return num
}
function clock(num,num_follow,vel,min=2){
    if (num < num_follow){
        num += vel
    }
    if (num >= num_follow){
        num = min
    }
    return num
}
function text(texto='txt',id='1',rect=[0,0,50,50]){
    //text
    var txt = document.createElement('h1');
    txt.id = id
    document.getElementById('body').appendChild(txt);
    txt.innerHTML=texto;
    
    //pos
    
    txt.style.left = rect[0] + 'px'
    txt.style.top = rect[1] + 'px'
    txt.style.width = rect[2] + 'px'
    txt.style.height = rect[3] + 'px'
}

function create_element(type='canvas',id='canvas'){
    //text
    var ele = document.createElement(type);
    ele.id = id
    console.log(ele)
    document.getElementById('body').appendChild(ele);
    }

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function auras(){
    
    
    img.style.setProperty("-webkit-filter", filters[0]+filters[1]+filters[2]);
    img_enem.style.setProperty("-webkit-filter", filters[0]+filters[1]);

}
//spritesheet
function return_spritesheet(rect, cantidad_frame = 10, hori_vert_bool = [true, false]) {
    const listi = [];
    
    let num = 0;
    for (let i = 1; i <= cantidad_frame; i++) {
        listi.push([...rect]);
        if (hori_vert_bool[0] === true) {
            rect[0] += rect[2];
        }
        if (hori_vert_bool[1] === true) {
            rect[1] += rect[3];
        }
    }
    return listi;
}
//mouse

window.onmousemove = MouseMove;
let mousePos = { x: 0, y: 0 }
function MouseMove(event) {
	e = event || window.event;	
	mousePos = { x: e.clientX, y: e.clientY };
	console.log(mousePos);
}

//bucle
var intervalId; 

function iniciarBucle(funct,fps) {
    var contador = 0; 

    
    intervalId = setInterval(function() {
        funct();
        contador++;
        
    }, fps); 
}



