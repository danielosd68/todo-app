import React, { Component, useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import DateComponent from "../components/date/date";


class AddingForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            items: [
                
            ]
        }
    }

    addNewItem = (element) => {
        
        const prevList = this.state.items;
        const listLength = prevList.length;

        

        prevList.push({
            id: listLength,
            value: element.value,
            isCompleted: false,
            date: <DateComponent/>
        })

        const currentList = prevList;

        const myStorage = localStorage;
        myStorage.setItem("indeks",JSON.stringify(currentList))

        this.setState({
            items: currentList
        })
       
    }

    saveAsCompleted = (index) => {
        const prevList = this.state.items;
        prevList[index].isCompleted = true;

  

        this.setState({
            items: prevList
        })
    }

    deleteItem = (index) => {
        const prevList = this.state.items;
        prevList.splice(index,1);



        this.setState({
            items: prevList
        })
    }
    
    render(){
        return(
            <div>
               
            <Formik initialValues={{
                id: "",
                value: "",
                isCompleted: false
            }}
    
            onSubmit={(item)=>{
           
                this.addNewItem(item);
                
               
            }}>
                
                <Form>
                    <div className="form">
                        <label>
                            
                            <Field type="text" name="value" id="value" placeholder="Zapisz myśl..."/>
                            
                                <input type="submit" value="Dodaj" id="btn"/>
                            
                            
                        </label>
                    </div>
    
                </Form>
                
            </Formik>
    
            <div>
                {
                this.state.items.length < 1 ? 
                <div className="blank-info">
                <h2>Na razie tu pusto...</h2>
                <p>Dodaj nowy element aby zobaczyć go tutaj</p>
                </div>
                :
                this.state.items.map((element,id) => <div className={element.isCompleted === true ? "element-container is-completed": "element-container"} key={id}>
                    <div className='description'>
                        <div className="element-content">
                        {id+1}. {element.value}
                        </div>
                        <div className="element-date">
                        {element.date}
                        </div>
                        <div className="element-button">
                        <button onClick={()=>{element.isCompleted === false? this.saveAsCompleted(id) : this.deleteItem(id)}}>{element.isCompleted === true ? "Usuń" : "Oznacz jako wykonane"}</button>
                        </div>
                        
                        
                        
                        
                    </div>
    
                </div>)
    
                }
    
            </div> 
            </div>
    
        )
    }

    



    
}

export default AddingForm;