var convertBtn = document.querySelector(".convert_btn");
var URLinput = document.querySelector(".url_input");

convertBtn.addEventListener("click", function () {
  console.log(`URL : ${URLinput.value}`);
  sendURL(URLinput.value);
});

function sendURL(URL) {
  window.location.href = `https://server.ppekkungz-ytdl-core.repl.co/download?URL=${URL}`;
  // server ที่สองถ้าจะใช้เปิดใช้ได้เลย
  // window.location.href = `http://server.ppekkungz.repli.co/download?URL=${URL}`;
}