const clients = [
  {
    name: 'João',
    email: 'joao@test.com'
  },
  {
    name: 'Paulo',
    email: 'paulo@test.com'
  },
  {
    name: 'Ricardo',
    email: 'ricardo@test.com'
  },
  {
    name: 'Saulo',
    email: 'saulo@test.com'
  },
  {
    name: 'Ana',
    email: 'ana@test.com'
  },
]

const list = document.getElementById('clients');

const createParagraph = (textContent, parent) => {
  const paragraph = document.createElement('p');
  const text = document.createTextNode(textContent);
  paragraph.appendChild(text);

  parent.appendChild(paragraph);
}

clients.forEach((client) => {
  const listItem = document.createElement('li');

  createParagraph(client.name, listItem);
  createParagraph(client.email, listItem);

  list.appendChild(listItem);
});



