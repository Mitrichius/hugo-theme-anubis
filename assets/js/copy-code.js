/*
This file has been taken from following blogpost with some modifications:
https://koki-nakamura22.github.io/blog/2019/10/03/hugo-adding-copy-button/
Many thanks to Koki Nakamura!
*/

document.addEventListener("DOMContentLoaded", function(event) {
  'use strict';

  if(!document.queryCommandSupported('copy')) {
    return;
  }

  let svgCopyCode = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25"><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"/></svg>';
  let svgSuccessCode = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>';
  let svgFailCode = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>';

  function changeIcon(el, innerHtml) {
    el.innerHTML = innerHtml;
    setTimeout(() => {
      el.innerHTML = svgCopyCode;
    }, 1000);
  }

  function selectText(node) {
    let selection = window.getSelection();
    let range = document.createRange();
    if (node.childElementCount === 2) {
      // Skip the title.
      range.selectNodeContents(node.children[1]);
    } else {
      range.selectNodeContents(node);
    }
    selection.removeAllRanges();
    selection.addRange(range);
    return selection;
  }

  function addCopyButton(containerEl) {
    let copyBtn = document.createElement("button");
    copyBtn.className = "highlight-copy-btn";
    copyBtn.innerHTML = svgCopyCode;

    let codeEl = containerEl.firstElementChild;
    copyBtn.addEventListener('click', () => {
      try {
        let selection = selectText(codeEl);
        document.execCommand('copy');
        selection.removeAllRanges();

        changeIcon(copyBtn, svgSuccessCode)
      } catch(e) {
        console && console.log(e);
        changeIcon(copyBtn, svgFailCode)
      }
    });

    containerEl.appendChild(copyBtn);
  }

  // Add copy button to code blocks
  let highlightBlocks = document.getElementsByClassName('highlight');
  Array.prototype.forEach.call(highlightBlocks, addCopyButton);
}, false);