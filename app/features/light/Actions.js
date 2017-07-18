import blinkstick from 'blinkstick'
import PomidoriClient from '../../api/pomidoriClient';

function turnOnLight(minutes, workingState) {
  return function(dispatch) {
    const device = blinkstick.findFirst();
    const client = new PomidoriClient();
    let color = 'red';

    if (workingState === "break") {
      color = 'green';
    }

    // TODO: Warn the user that the device is not connected
    if (device) {
      let ledCount = 7;
      let index = 0;

      const ms = minutes * 60 * 1000;
      const interval = ms / ledCount

      function* startStopTaskLeds(i) {
        if (i == 0) {
          client.authenticatedPost('/task', { taskTime: minutes }).then((data) => {
            console.log(data);
          });
        }

        if (i == ledCount) {
          console.log("End the task on the server")
        }

        device.setColor(color, {'channel':0, 'index': i}, function() {

        })

        yield i + 1;
      }

      var setColor = function () {
        index  = startStopTaskLeds(index).next().value;

        if (index <= ledCount) {
          setTimeout(setColor, interval);
        }
      }

      //You need to set mode only once. Run the code below if you haven't already set
      //BlinkStick Pro to mode 2
      /*
      device.setMode(2, function() {
          setColor();
      });
      */

      setColor(0);
    }
  }
}

export {
  turnOnLight,
}
