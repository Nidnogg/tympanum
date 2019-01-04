/*
  For general use functions 
*/

import {Howl, Howler} from 'howler';


export const playSound = () => {
  let sound = new Howl({
    src: ['https://firebasestorage.googleapis.com/v0/b/cloudtop-nidnogg.appspot.com/o/audio%2Ftest.mp3?alt=media&token=c0ca5d7b-abcf-43c7-87af-764393e539af']
  });
  sound.play();
  console.log(`playing test tone` );

}
/*
sound.once('load', () => {
  sound.play();
  console.log(`playing test tone` );
});
*/

