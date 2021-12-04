class App extends React.Component {                      
    constructor(props) {
        super(props)
    
        this.state = {
             newWho: "Marceline the Vampire",
             newWhat: "A wild rocket girl, yeah",
             characters: [{
                 id: 1,
                 who: "Finn the Human",
                 wat: "A silly kid who wants to become a great hero one day.",
                 cool: 69
             },
             {
                 id: 2,
                 who: "Jake the Dog",
                 wat: "Finn's best friend is wise, old dog with a big heart.",
                 cool: 9
             }
            ]
        }
    }

    listOfDudes = () => {
        return this.state.characters.map(dude => 
            <li key = {dude.id} className = "dude"> 
                <a className = "ctrl">x</a> 

                <article className = {
                    dude.cool < 10 ? "faded" : dude.cool > 50 ? "gold" : ""
                }>
                    {dude.who}
                    <br />
                    <span>{dude.wat}</span>
                </article>

                <input className = "cislo" type = "number" value = {dude.cool} />
                <br />
            </li>
            
            )
    }

    handleWho = event => {
        this.setState({
            newWho: event.target.value
        })
    }

    handleWat = event => {
        this.setState({
            newWhat: event.target.value
        })
    }

    handleSubmit = event => {
        if( event.key === "Enter") {
            this.setState(state => {

                const newDude = {
                    id: Math.max(...state.characters.map(d => d.id)) + 1,
                         who: this.state.newWho,
                         wat: this.state.newWho,
                         wat: this.state.newWhat,
                         cool: 15
                }
    
                return {
                characters: [...state.characters, newDude]
                }
            })
        }
        

        

    }

    render() {
        return (
            <div>
                <ul>{this.listOfDudes()}</ul>

                <form className="add-new" onKeyPress = {this.handleSubmit}>
                
                    <input type="text" value={this.state.newWho} onChange={this.handleWho} />
                   <br />
                    <input type="text" value={this.state.newWhat} onChange={this.handleWat} />
                   
                </form>   
                
                <p className="preview">
                    {this.state.newWho}     
                    <br />
                    <small>{this.state.newWhat}</small>                                 
                </p>
            </div>                                        
                                                            
        )
    }
}                                

ReactDOM.render(<App />, document.getElementById("root")) //tady rikam kam chci umistit novy tag na strance   






