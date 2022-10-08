


export default function Form() {
    

    const handleSubmit = async (event) => {

        

        event.preventDefault()
        
        const link = event.target.link.value;
        const chatId = Number(event.target.chatId.value)
        

        const data = {
            Url : link,
            chatID : chatId,
        }

        const JSONdata = JSON.stringify(data)

        const endpoint = 'https://serverlinktelbot-production.up.railway.app/link'

        const options = {
            method: 'POST',

            headers: {
                'content-Type': 'application/json',
            },

            body : JSONdata,

        }

        const response = await fetch(endpoint, options)

        const result = await response.json()
        alert(`This the data you will send: ${result.data.chatId}`)

      

        
        
    };

    

    return (
        <form onSubmit={handleSubmit}>
            <div class="form-container">
                <div class="column">
                    <label class="theLabels" htmlFor="link">Link: </label>
                    <input class="theInputs" type="text"  id="link" name="link" required />

                </div>
                <div class="column">
                    <label class="theLabels" htmlFor="chatId">ChatId: </label>
                    <input class="theInputs" type="text"  id="chatId" name="chatId" required />
                </div>
            </div>
            <button type="submit">Submit</button>

        </form>
    )
}
