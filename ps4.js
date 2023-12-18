// ps4.js

function initPS4Controller() {
  window.addEventListener("gamepadconnected", (event) => {
    alert("Gamepad connected");
    pollController();
  });

  window.addEventListener("gamepaddisconnected", (event) => {
    alert("Gamepad disconnected");
  });
}

function pollController() {
  requestAnimationFrame(pollController);

  const gamepad = navigator.getGamepads()[0];

  if (gamepad) {
    if (gamepad.buttons[0].pressed) {
      alert("Cross button pressed");
    }

    // Check other buttons as needed.

    const xAxis = gamepad.axes[0];
    const yAxis = gamepad.axes[1];
    alert("Analog stick values: X = " + xAxis + ", Y = " + yAxis);
  }
}

initPS4Controller();
