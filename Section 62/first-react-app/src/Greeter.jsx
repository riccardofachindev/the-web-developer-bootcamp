export default function Greeter({ person = "all", from = "me" }) {
    return (
        <>
            <h1>Hi there, {person}!</h1>
            <h2>- {from}</h2>
        </>
    )
}