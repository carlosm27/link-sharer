import { useState } from "react";


export default function Form() {
    
    const [data, setData] = useState({
        Url: "",
        ChatID: Number,
    });
    
    const {Url, ChatID} = data;
    

    const handleSubmit = async (event) => {

        

        event.preventDefault()
        

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
        alert(`This the data you will send: ${result.data}`)
        
        setData({
            Url:"",
            ChatID:null,
        });
      
        
    };

    

    return (
        <form onSubmit={handleSubmit}>
            <div class="form-container">
                <div class="column">
                    <label class="theLabels" htmlFor="url">URL: </label>
                    <input class="theInputs" type="text"  id="url" name="url" required value={Url} onChange={(e) => setData({...data, Url: e.target.value})}/>

                </div>
                <div class="column">
                    <label class="theLabels" htmlFor="chatId">ChatId: </label>
                    <input class="theInputs" type="text"  id="chatId" name="chatId" required value={ChatID} onChange={(e) => setData({...data, ChatID: Number(e.target.value)})}  />
                </div>
            </div>
            <button onClick={handleSubmit} type="submit">Submit</button>

        </form>
    )
}
