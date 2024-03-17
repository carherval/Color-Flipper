import './style.css'

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker')

  colorPickerSelect.addEventListener('input', (event) => {
    //Almacenamos el código de color
    const newColor = event.target.value

    //Le aplicamos el background color con el código de color seleccionado
    document.body.style.backgroundColor = newColor

    const colorValue = document.querySelector('#color-value')
    colorValue.innerText = `${newColor}`.toUpperCase()
  })
}

addEventListenerToColorPicker()
