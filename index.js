document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#todo')
  const addButton = document.querySelector('#add-button')
  const todoList = document.querySelector('#todo-list')
  const alert = document.querySelector('span')


  const addTodo = () => {
      if (input.value !== '') {
          const item = document.createElement('div')
          
          const checkbox = document.createElement('input')
          checkbox.type='checkbox'
          checkbox.style.width = '20px';
          checkbox.style.height = '20px';
          checkbox.style.marginTop = "15px"
          
          const text = document.createElement('span');
          text.style.textAlign = "left";
          text.style.marginTop = "15px";
          text.style.fontSize = "18px";
          text.style.color = "#343a40";
          text.style.fontWeight = "bold";
          text.style.marginLeft = "8px";
          
          const deleteButton = document.createElement('button')
          deleteButton.textContent="제거하기"
          deleteButton.style.marginLeft = "8px";

          text.textContent = input.value
          input.value=''
      
          item.appendChild(checkbox)
          item.appendChild(text)
          item.appendChild(deleteButton)
          todoList.appendChild(item)


          checkbox.addEventListener('change', (event) =>{ 
              if (event.currentTarget.checked)
              {
                  text.style.textDecoration='2px line-through'

              }
              else {
                  text.style.textDecoration='none'
              }
          })

    
          deleteButton.addEventListener('click', (event) => {
              todoList.removeChild(event.currentTarget.parentNode)
          })
          input.value =''
          alert.textContent = ''
      }
      else
          alert.textContent = '할 일을 입력하세요!'
          alert.style.fontWeight = "bold";
  }

  addButton.addEventListener('click', addTodo)


  input.addEventListener('keypress', (event) => {
      const ENTER = 13
      if (event.keyCode === ENTER)
          addTodo();
  })
})