import React from "react";
import { Formik, Form, Field } from "formik";
import Save from "../components/data/save";


const AddingForm = (props) => {
    let el = {}; //początkowa deklaracja elementu, który się zmienia
    return(
        <div>
           
        <Formik initialValues={{
            id: "",
            value: "",
            isCompleted: false
        }}

        onSubmit={(item)=>{
            el = item; //Zmiana po kliknięciu na obiekt z danymi z formularza
            console.log(el);
            
           
           
        }}>
            <Form>
                <div className="form">
                    <label>
                        <p>Treść: </p>
                        <Field type="text" name="value" id="value"/>
                        <div>
                            <input type="submit" value="Dodaj" id="btn"/>
                        </div>
                        
                    </label>
                </div>

            </Form>
            
        </Formik>

        <Save 
            element={el} //el zmienia się dynamicznie
            
        /> 
        </div>

        
        
    )

    
}

export default AddingForm;