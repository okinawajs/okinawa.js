// engine already instanced
import engine from './src/engine';
import { addEvent } from './src/utils';

export default function Okinawa(canvasId, gameObject, callbackFunction) {
  // Game initialization

  // parameters:
  //   1) canvas DOM element id
  //   2) game object already instantiated
  //   3) optional callback function to inform of certain events inside the game

  // check document.readyState: if window is already loaded, the game wouldn't initialize

  if (document.readyState === 'complete')
    engine.initialize(canvasId, gameObject, callbackFunction);
  else
    addEvent('load', window, function() {
      engine.initialize(canvasId, gameObject, callbackFunction);
    });

  return engine;
}
