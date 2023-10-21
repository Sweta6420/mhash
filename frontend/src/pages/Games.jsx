import { Link } from 'react-router-dom'
function Games(){
    return(
        <>
            <div className="games-container">
                <div className='binit-game'>
                    <Link to='/binit'>Binit!</Link> 
                </div>
                <div className='quiz-game'>
                    <Link to='/quizup'>QuizUp!</Link>
                </div>
            </div>
        </>
    )
}

export default Games;