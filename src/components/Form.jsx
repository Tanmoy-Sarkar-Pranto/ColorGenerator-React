import { useState } from "react"

const Form = ({ addColor }) => {
  const [color, setColor] = useState("")
  const handleChange = (e) => {
    e.preventDefault()
    addColor(color)
  }
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleChange}>
        <input
          type="color"
          name="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#ffffff"
        />
        <button type="submit" className="btn" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  )
}
export default Form
