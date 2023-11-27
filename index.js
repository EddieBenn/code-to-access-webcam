let camera = document.getElementById("camera");

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    camera.srcObject = stream;
  })
  .catch((error) => {
    console.error(`error accessing camera`, error);
  });
