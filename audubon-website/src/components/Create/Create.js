import React, {Component} from 'react';
import './Create.css';


class Create extends Component {
    constructor(props){
        super(props)
        this.state = {
          name: '',
          genus: '',
          image: '',
          homepage: '',
          conservation: '',
        }
     this.onChange=this.onChange.bind(this) 
     this.createBird=this.createBird.bind(this)
    }
    onChange(event){
        console.log(event.target)
        this.setState({[event.target.name]:event.target.value})
    }


    createBird(event){
        event.preventDefault()
        const {name,genus,image,homepage,conservation}=this.state
        const NewBird = {name:name, genus:genus, image:image, homepage:homepage, conservation:conservation}
        this.props.location.addNewBird(NewBird)
        this.props.history.push('/')
    }



    render() {
        return (
            <div>
                <div className= "form">

                    <h2>Add a New Bird</h2>
                    <form className='form'onSubmit={this.createBird}>
                        <p>Name</p>
                            <input className='forminput'name='name'type="text" onChange={this.onChange}/>
                        <p>Genus</p>
                            <input className='forminput' name='genus'type="text" onChange={this.onChange}/>
                        <p>Image</p>
                            <input className='forminput' name='image'type="text" onChange={this.onChange}/>
                        <p>Homepage</p>
                            <input className='forminput' name='homepage'type="text" onChange={this.onChange}/>
                        <p>Conservation status</p>
                            <input className='forminput textarea' name='conservation'type="textarea" onChange={this.onChange}/>
                        <button id='button'type="submit">Submit</button> 
                    </form>
                </div>
            </div>
        )
    }
}

export default Create;