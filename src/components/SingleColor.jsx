import { toast } from "react-toastify"

const SingleColor = (props) => {
  //   console.log(props.color)
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${props.color.hex}`)
        toast.success("Color copied to clipboard")
      } catch (error) {
        toast.error("Failed to copy Color")
      }
    } else {
      toast.error("Clipboard access not available")
    }
  }
  return (
    <section
      className={props.index > 10 ? "color color-light" : "color"}
      style={{ background: `#${props.color.hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{props.color.weight}%</p>
      <p className="color-value">#{props.color.hex}</p>
    </section>
  )
}
export default SingleColor
