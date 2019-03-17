let slides = document.querySelector('.slideshowImages');

let images=['Event0', 'Event1', 'Event2', 'Event3'];
let currentPic=0;


function changePic(x){
  currentPic+=x;
  if (currentPic> images.length-1){
    currentPic=0;
  }
  if(currentPic<0){
    currentPic=images.length-1;
  }
  slides.src=`./media/Event${currentPic}.jpg`;

}
