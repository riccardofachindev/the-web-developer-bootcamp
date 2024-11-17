import './Button.css'

function Button({ clickFunc, title = 'Click me' }) {
    return <button className='Button' onClick={clickFunc}>{title}</button>
}

export default Button;