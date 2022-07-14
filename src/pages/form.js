import React from "react";
import { Formik, Form, Field } from "formik";


const AddingForm = (props) => {

    let list = [{
        id: null,
        value: "",
        isCompleted: false
    }]

    return(
        <div>
        <Formik initialValues = {{
            id: "",
            value: "",
            isCompleted: false
        }}

        onSubmit={(item)=>{
            list.push({
                id: list.length,
                value: item.value,
                isCompleted: item.isCompleted
            })

            
            
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
        </div>
        
    )
}

export default AddingForm;