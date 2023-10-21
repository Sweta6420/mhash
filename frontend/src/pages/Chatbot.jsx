function Chatbot(){

    return (
        <>
            <div className="chatbot-container">
                <section className="main-section-chatbot">
                    <h1>Shanti</h1>
                    <ul className="feed-chatbot">

                    </ul>
                    <div className="bottom-section-chatbot">
                        <div className="input-container-chatbot">
                            <input className="input-chatbot" />
                            <div id="submit-chatbot">
                            ➢
                            </div>
                        </div>
                        <p className="info-chatbot">
                            Disclaimer. This is not the absolute solution, we are just trying to provide an aid incase of an unreachable expert. If you're facing any serious concerns, please visit a counserlor or therapist. 
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Chatbot;
