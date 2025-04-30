function generateId(length = 6) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < length; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

function saveText() {
  const text = document.getElementById("text").value;
  const id = generateId();
  const blob = new Blob([text], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${id}.txt`;
  a.click();

  document.getElementById("result").innerHTML = `
    保存完了！<br>
    表示URL: <code>${location.origin}/view.html?id=${id}</code><br>
    ※ このファイル（${id}.txt）を必ず保存してください。
  `;
}
