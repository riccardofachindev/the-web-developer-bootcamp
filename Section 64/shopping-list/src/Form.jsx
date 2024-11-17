function handleEvent(e) {
    e.preventDefault();
    console.log('ciaone')
}

export default function Form() {
    return (
        <form onSubmit={handleEvent}>
            <button>Touch me</button>
        </form>
    )
}