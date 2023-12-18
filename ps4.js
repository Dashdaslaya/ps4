// ps4.js

// Define a function to initialize the PS4 controller.
function initPS4Controller() {
  // Add event listeners for controller input.
  window.addEventListener("gamepadconnected", (event) => {
    console.log("Gamepad connected:", event.gamepad);
    pollController();
  });

  window.addEventListener("gamepaddisconnected", (event) => {
    console.log("Gamepad disconnected:", event.gamepad);
  });
}

// Define a function to continuously poll controller input.
function pollController() {
  requestAnimationFrame(pollController);

  // Get the first connected gamepad (assumes only one is connected).
  const gamepad = navigator.getGamepads()[0];

  if (gamepad) {
    // Check button presses.
    if (gamepad.buttons[0].pressed) {
      console.log("Cross button pressed");
      // Add your custom logic for the button press here.
    }

    // Check other buttons as needed.

    // Check analog stick values.
    const xAxis = gamepad.axes[0];
    const yAxis = gamepad.axes[1];
    console.log("Analog stick values:", xAxis, yAxis);
    // Add your custom logic for analog stick input here.
  }
}

// Call the initialization function.
initPS4Controller();
