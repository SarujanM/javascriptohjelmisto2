
doc = document.querySelector('#target')

doc.innerHTML += '<li>First item</li>\n\<li>Second item</li>\n<li>Third item</li>\n'




var second = doc.querySelectorAll('li')[1];

second.setAttribute('class', 'my-item')