const today = new Date()
const thisYear = today.getFullYear()

const footer = document.querySelector('footer')

const copyright = document.createElement('p')

copyright.innerHTML = `&copy; Linda Vu ${thisYear}`

footer.appendChild(copyright)

const skills = ['JavaScript', 'React', 'Node.JS', 'HTML/CSS']

const skillsSection = document.getElementById('skills')

const skillsList = skillsSection.querySelector('ul')

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li')
  skill.innerText = skills[i]
  skillsList.appendChild(skill)
}

const messageForm = document.querySelector('form[name=leave_message]')

messageForm.addEventListener('submit', function (event) {
  event.preventDefault()

  const nameEl = event.target.name.value
  const emailEl = event.target.email.value
  const textAreaEl = event.target.message.value

  console.log(nameEl, emailEl, textAreaEl)

  const messageSection = document.getElementById('messages')

  const messageList = messageSection.querySelector('ul')

  const newMessage = document.createElement('li')

  newMessage.innerHTML = `<span><a href="mailto:${emailEl}">${nameEl} </a><a>${textAreaEl} </a></span>`

  const removeButton = document.createElement('button')

  removeButton.innerText = 'remove'

  removeButton.addEventListener('click', function (event) {
    // event.target is the button
    // entry is the list item
    const entry = event.target.parentNode
    // create a variable selecting the parent el of entry, giving us the message list
    const list = entry.parentNode
    if (list.children.length <= 1) {
      messageSection.style.display = 'none'
    }
    entry.remove()
  })

  newMessage.appendChild(removeButton)

  messageList.appendChild(newMessage)

  messageSection.style.display = 'block'

  messageForm.reset()
})
