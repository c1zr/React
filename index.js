class App extends React.Component {                      
    constructor(props) {
        super(props)

        this.input = React.createRef()
    
        this.state = {
             newWho: "Marceline the Vampire",
             newWat: "A wild rocket girl, yeah",
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


    componentDidMount = () => {

    }



    listOfDudes = () => {
        return this.state.characters.map(dude => 
            <li key = {dude.id} className = "dude"> 
                <a className = "ctrl" onClick={() => this.removeDude(dude)}>x</a> 

                <article className = {
                    dude.cool < 10 ? "faded" : dude.cool > 50 ? "gold" : ""
                }>
                    {dude.who}
                    <br />
                    <span>{dude.wat}</span>
                </article>

                <input className = "cislo" type = "number" value = {dude.cool} onChange = {this.handleCool(dude)} />
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
            newWat: event.target.value
        })
    }

    handleCool = dude => event => {
        const cool = +event.target.value
        this.setState(state => {
            return {
                characters: state.characters.map(item => 
                    item === dude ? {...dude, cool} : item
                )
            }
        })
    }

    removeDude = dude => {
        this.setState(state => {
            return {
                characters: state.characters.filter(item => item !== dude)
            }
        })
    }



    handleSubmit = event => {
        if( event.key === "Enter" && this.state.newWho && this.state.newWat) {
            this.setState(state => {

                const newDude = {
                    id: Math.max(...state.characters.map(d => d.id)) + 1,
                         who: this.state.newWho,
                         wat: this.state.newWat,
                         cool: 15
                }
    
                return {
                characters: [...state.characters, newDude]
                }
            })

            this.resetForm()
        }
    }

    resetForm = () => {
        this.setState({
            newWho: "",
            newWat: ""
        })

        this.input.current.focus()
    }


    render() {
        return (
            <div>
                <ul>{this.listOfDudes()}</ul>

                <form className="add-new" onKeyPress = {this.handleSubmit}>
                
                    <input autoFocus type="text" ref={this.input} value={this.state.newWho} onChange={this.handleWho} />
                   <br />
                    <input type="text" value={this.state.newWat} onChange={this.handleWat} />
                   
                </form>   
                
                <p className="preview">
                    {this.state.newWho}     
                    <br />
                    <small>{this.state.newWat}</small>                                 
                </p>
            </div>                                        
                                                            
        )
    }
}                                

ReactDOM.render(<App />, document.getElementById("root")) //tady rikam kam chci umistit novy tag na strance   






