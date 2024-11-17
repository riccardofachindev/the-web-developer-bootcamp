export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;

    const styles = { color: num1 === num2 ? 'purple' : 'red', fontSize: '40px' };

    return (
        <>
            <h2 style={styles}>{num1 === num2 ? 'You win' : 'You lose'}</h2>
            {num1 === num2 ? <h2>Let's go</h2> : null}
            {num1 !== num2 && <h2>Gosh..</h2>}
            <h1>Num1 is: {num1}</h1>
            <h1>Num2 is: {num2}</h1>
        </>
    )
}