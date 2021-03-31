function CopyToTextarea(el){
  let text = el.textContent;
  let textarea = document.getElementById('bodymail');
  textarea.value = textarea.value + text +" ";
}