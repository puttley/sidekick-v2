
const connect = document.querySelector('#connect');

connect.addEventListener('click', async () => {
      port = await navigator.serial.requestPort();
      await port.open({
        baudRate: 115200,
        dateBits: 8,
        stopBits: 1
      });

    //  writer = port.writable.getWriter()
    //  reader = port.readable.getReader();

    //  readLoop();
      connect.disabled = true;
    //  disconnect.disabled = false;
    //  resetbutton.disabled = false;
    //  rawbutton.disabled = false;
    //  input.disabled = false;
    });
