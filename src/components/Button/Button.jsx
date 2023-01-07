import "./button.css";

const Button = ({img, text}) => {
  return (
    <button className='btn flex'>
      <img src={img} alt="user" />
      {text}
    </button>
  )
}

export default Button
