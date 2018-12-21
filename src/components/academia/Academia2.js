import React from 'react';

import Header from "../Header";
import Action from "../Action";

import connect from "react-redux/lib/connect/connect";
import {addAcademia1, addName} from "../../actions/actions";
//import state from "../../reducers-list";

import configureStore from '../../store/configureStore';
//import { addName } from '../actions/actions';
import { addAcademia2 } from '../../actions/actions';

import DittoraRegularLogo from '../../images-logos/dittora-regular-logo/dittora-regular-logo.svg';
import UniversityLogo from '../../images-logos/academia/academia1-university.svg';
import Link from "react-router-dom/Link";

class Academia2 extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);

        this.handleTypeOfStudent = this.handleTypeOfStudent.bind(this);

        this.sendToStore = this.sendToStore.bind(this);

        this.state = {
        id: this.props.match.params.id,
            typeOfStudent: ''};
        //const store = configureStore();
    }

    setStateCallBack() {
        this.sendToStore();
    }

    sendToStore() {
        console.log('Here in Send Function');
        this.props.dispatch(addAcademia2(this.state.id, {typeOfStudent:this.state.typeOfStudent}));
    }

    handleTypeOfStudent(event) {
        const check = event.target.id;
        console.log("Hey I am here!");
        console.log(check);


    /*,
        () => {
            this.setStateCallBack();
            console.log(this.state.typeOfStudent);
            this.render();
        }*/

        if(check==1){
            this.setState({typeOfStudent: "Undergrad"},
                () => {
                    this.setStateCallBack();
                    console.log(this.state.typeOfStudent);
                })
        }else if(check==2){
            this.setState({typeOfStudent: "Doctorate"},
                () => {
                    this.setStateCallBack();
                    console.log(this.state.typeOfStudent);
                })
        }
        else if(check==3){
            this.setState({typeOfStudent: "Masters"},
                () => {
                    this.setStateCallBack();
                    console.log(this.state.typeOfStudent);
                })
        }
        else if(check==4){
            this.setState({typeOfStudent: "Higher Diploma"},
                () => {
                    this.setStateCallBack();
                    console.log(this.state.typeOfStudent);
                })
        }
    }

    handleOnChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {

        console.log('Academia Page 2!');



        const title = "Let's talk about your academic status";
        const action1 = "/academia3";
        const action2 = "/academia3";
        const actionButtonData1 = "High School";
        const actionButtonData2 = "CEGEP";
        const actionButtonData3 = "Undergrad";
        const actionButtonData4 = "Graduate";
        const actionButtonData5 = "Doctorate";
        const actionButtonData6 = "Higher Diploma";
        const actionButtonClass = "home-button-default-in";


        const actionButtonClass1 = "home-button-left-in";
        const actionButtonClass2 = "home-button-right-in";

        //const store = configureStore();

        return(
            <div>
                {/*<Header title={title}/>*/}

                <img className='dittora-regular-logo' src={DittoraRegularLogo} alt='dittora-regular-logo' />
                <img className='university-logo' src={UniversityLogo} alt='university-logo' />
                <span className="academia1-border-header">Let’s talk about your
                    <span style={{'color':'#DD417C'}}>Academic Status...</span>
                </span>
                {



                    <div className='container'>

                        <span className='academia2-border'></span>

                        <p className='academia2-inner-border-header'>What type of student are you?</p>

                        <button id="1" className='academia2-button-1' onClick={this.handleTypeOfStudent}>
                            Undergrad
                        </button>

                        <button id="2" className='academia2-button-2' onClick={this.handleTypeOfStudent}>
                            Doctorate
                        </button>


                        <button id="3" className='academia2-button-3' onClick={this.handleTypeOfStudent}>
                            Masters
                        </button>


                        <button id="4" className='academia2-button-4' onClick={this.handleTypeOfStudent}>
                            Higher Diploma
                        </button>


                        {this.state.typeOfStudent==="Undergrad" ? <Action action="/academia4"
                                                                          actionButtonData="Next"
                                                                          classButton='academia2-button'
                                                                          sendID={this.state.id}
                        /> :
                            <Action action="/academia5"
                                    actionButtonData="Next"
                                    classButton='academia2-button'
                                    sendID={this.state.id}
                            />}

                        {console.log(this.state.typeOfStudent)}



                    </div>
                }
            </div>
        );


    }

}

/*{store.dispatch(addName({ first: 'Suyash', last: 'Malthankar' }))}*/
//{this.props.users.dispatch(addName({ first: 'Suyash', last: 'Malthankar' }))}
function mapStateToProps(state) {
    return {
        users: state.users
    }
}

/*
function mapDispatchToProps(state) {
    return {
        users: dispatch(state)
    }
}
*/

export default connect(mapStateToProps)(Academia2);



{/*<div className='borderDiv'>
                            <p className='paragraphText'>
                                What is your <strong>Highest Academic Achievement?</strong>
                            </p>

                            <span className='border-span-buttons-2'>
                                <Action action={action1}
                                    actionButtonData={actionButtonData1}
                                    classButton={actionButtonClass}
                                        sendID={this.state.id}
                                />

                                <Action action={action2}
                                    actionButtonData={actionButtonData2}
                                    classButton={actionButtonClass}
                                        sendID={this.state.id}
                                />
                                <Action action={action2}
                                    actionButtonData={actionButtonData3}
                                    classButton={actionButtonClass}
                                        sendID={this.state.id}
                                />
                            </span>

                            <span className='border-span-buttons-2'>
                                <Action action={action1}
                                        actionButtonData={actionButtonData4}
                                        classButton={actionButtonClass}
                                        sendID={this.state.id}
                                />
                                <Action action={action2}
                                        actionButtonData={actionButtonData5}
                                        classButton={actionButtonClass}
                                        sendID={this.state.id}
                                />
                                <Action action={action2}
                                        actionButtonData={actionButtonData6}
                                        classButton={actionButtonClass}
                                        sendID={this.state.id}
                                />
                            </span>




                        </div>

                        <div>

                            {this.props.users.map(user => {
                                if(user.id == 1){
                                    //user.first: 'Malthankar';
                                    this.setState({user.first: });

                                }
                            })}




                            <ul>

                                //{this.props.dispatch(addName({ first: 'Suyash', last: 'Malthankar' }))}

                                {this.props.users.map(user => {
                                    return(
                                        <li key={user.id}>
                                            {user.first} {user.last}
                                            {user.id===1 ? user.profession : 'Nothing'}
                                        </li>

                                    );
                                })}
                            </ul>

                        </div>*/}



/*const AcademiaPage2 = () => {
    console.log('Academia Page 2!');

    const title = "Let's talk about your academic status";
    const action1 = "/academia2";
    const action2 = "/academia3";
    const actionButtonData1 = "High School";
    const actionButtonData2 = "CEGEP";
    const actionButtonClass = "home-button-default-in";
    //const

    const actionButtonClass1 = "home-button-left-in";
    const actionButtonClass2 = "home-button-right-in";
    return(
        <div>
            <Header title={title}/>
            {
                <div className='container'>

                    <div className='borderDiv'>
                        <p className='paragaphText'>
                            What is your <strong>Highest Academic Achievement?</strong>
                        </p>

                        <span className='border-span-buttons-2'>
                            <Action action={action1}
                                    actionButtonData={actionButtonData1}
                                    classButton={actionButtonClass}/>
                            <Action action={action2}
                                    actionButtonData={actionButtonData2}
                                    classButton={actionButtonClass}/>
                            <Action action={action2}
                                    actionButtonData={actionButtonData2}
                                    classButton={actionButtonClass}/>
                        </span>


                        <form onSubmit={}>
                            <label>
                                Pick your favorite flavor:
                                <select value={} onChange={}>
                                    <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select>
                            </label>
                            <input type="submit" value="Submit" />
                        </form>

                    </div>


                </div>
            }
        </div>
    );
};

export default AcademiaPage2;*/
