var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b9d10470-8311-4150-a1ec-fefb3010ca1c","08588f32-6e46-40a5-97de-2bbbd41200e5","3bb126bc-ae43-4675-b696-a5ab0bc2cf0b","511c9d7b-8608-4383-88dd-13f16a74a9c8","64a53a65-5518-4eb4-be5d-f91ef2dad2e5"],"propsByKey":{"b9d10470-8311-4150-a1ec-fefb3010ca1c":{"name":"1","sourceUrl":null,"frameSize":{"x":20,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"QEoyRRkvQLpU47XfRa.trwZuRJkdNBpd","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":37},"rootRelativePath":"assets/b9d10470-8311-4150-a1ec-fefb3010ca1c.png"},"08588f32-6e46-40a5-97de-2bbbd41200e5":{"name":"2","sourceUrl":null,"frameSize":{"x":20,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"XIcIU_sMnaowPcgjffjiCJ4iBdvpow6o","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":37},"rootRelativePath":"assets/08588f32-6e46-40a5-97de-2bbbd41200e5.png"},"3bb126bc-ae43-4675-b696-a5ab0bc2cf0b":{"name":"3","sourceUrl":null,"frameSize":{"x":20,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"6oJkWMiXcNLHk6xT9fst_iFZ5yENmyD2","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":37},"rootRelativePath":"assets/3bb126bc-ae43-4675-b696-a5ab0bc2cf0b.png"},"511c9d7b-8608-4383-88dd-13f16a74a9c8":{"name":"4","sourceUrl":null,"frameSize":{"x":20,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"HzRaCdRmtPtUw1OGsVVLKtVO05xXUupp","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":37},"rootRelativePath":"assets/511c9d7b-8608-4383-88dd-13f16a74a9c8.png"},"64a53a65-5518-4eb4-be5d-f91ef2dad2e5":{"name":">:P","sourceUrl":null,"frameSize":{"x":15,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"7eKXmV2uxxcni_U8TEkBHtN1Oobi4ZxB","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":48},"rootRelativePath":"assets/64a53a65-5518-4eb4-be5d-f91ef2dad2e5.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Limite1 = createSprite(0,115,1000,10);
var Limite2 = createSprite(0,245,1000,10);
var Inici0 = createSprite(25,180,50,120);
Inici0.shapeColor=rgb(163,240,216);
var Auto1 = createSprite(100,180,20,20);
Auto1.setAnimation("1");
var Auto2 = createSprite(170,180,20,20);
Auto2.setAnimation("2");
var Auto3 = createSprite(240,180,20,20);
Auto3.setAnimation("3");
var Auto4 = createSprite(310,180,20,20);
Auto4.setAnimation("4");
var TLentes = createSprite(400,180,50,120);
TLentes.shapeColor=rgb(242,230,176);
var Sam = createSprite(25,180,10,10);
Sam.shapeColor=("green");

var vidas=0;

Auto1.velocityY= 8;
Auto2.velocityY= 8;
Auto3.velocityY= -8;
Auto4.velocityY= -8;

function draw() {
  
  background("white");

 textSize(15);
 fill("black");
 text("Vidas :"+vidas,280,20);

Auto1.bounceOff(Limite1);
Auto1.bounceOff(Limite2);
Auto2.bounceOff(Limite1);
Auto2.bounceOff(Limite2);
Auto3.bounceOff(Limite1);
Auto3.bounceOff(Limite2);
Auto4.bounceOff(Limite1);
Auto4.bounceOff(Limite2);

if (keyDown("LEFT_ARROW")){
  Sam.x=Sam.x-3;
}
if (keyDown("RIGHT_ARROW")){
  Sam.x=Sam.x+3;
}

if(Sam.isTouching(Auto1)){
  Sam.x = 25;
  Sam.y =180;
  vidas = vidas + 1;
}
if(Sam.isTouching(Auto2)){
 
  Sam.x = 25;
  Sam.y =180;
  vidas = vidas + 1;
}
if(Sam.isTouching(Auto3)){
  Sam.x = 25;
  Sam.y =180;
  vidas = vidas + 1;
}
if(Sam.isTouching(Auto4)){
  Sam.x = 25;
  Sam.y =180;
  vidas = vidas + 1;
}

drawSprites();}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
