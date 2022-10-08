


export default function Form() {
    

    const handleSubmit = async (event) => {

        

        event.preventDefault()

        const data = {
            link : event.target.link.value,
            chatId : event.target.chatId.value,
        }

        const JSONdata = JSON.stringify(data)

        const endpoint = 'http://localhost:8080/link'

        const options = {
            method: 'POST',

            headers: {
                'content-Type': 'application/json',
            },

            body : JSONdata,

        }

        const response = await fetch(endpoint, options)

        const result = await response.json()
        alert(`Is this your Chat ID: ${result.data.chatId}`)

        console.log("Data submiting...")

        
        
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