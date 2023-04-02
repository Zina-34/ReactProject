import { useParams } from 'react-router-dom';
import { addUser , getUserById , editUser} from './localstorage';
import useForm from '../hooks/useForm';
import uuid from 'react-uuid';
import { useState, useEffect} from 'react'
import '../component/home.css';
import Navbar from './Navbar';

const Home = () => {
  const { id } = useParams();
  const[showAlert, setShowAlert] = useState(false);
  const {inputValue, handleInput, resetForm, setForm} = useForm({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    if (id) {
      const user = getUserById(id);
      setForm(user);
    }
  }, [id]);

 

  const submitPage = (e) => {

    e.preventDefault();
    id ? editUser(id, inputValue) : addUser({ id: uuid(), ...inputValue});
    resetForm();
    setShowAlert(true);
    setTimeout(() =>{
      setShowAlert((false));
    },1000);
    
  };



  return (
    <>
      <section className='homePage'>
        <Navbar />

          <div className="createUser">
            <h2>{id ? "Edit" : "Create"} User</h2>
          </div>

        <form  className="formHome" onSubmit={submitPage}>
  
          <div className="form">
            <div className="form-floating mb-3 my-3">
              <input 
              type="text" 
              name="name" 
              value={inputValue.name}  
              onChange={handleInput} 
              id="name" 
              className="form-control" placeholder="Enter your name"  required/>
              <label htmlfor="name">Name<sup>*</sup></label>
            </div>

            <div className="form-floating mb-3">
              <input 
              type="email" 
              name="email" 
              value={inputValue.email}  
              onChange={handleInput}
              id="email" 
              className="form-control" placeholder="name@example.com" required />
              <label htmlfor="email">Email<sup>*</sup></label>
            </div>

            <div className="form-floating mb-3">
              <input 
              type="text" 
              name="phone"
              value={inputValue.phone}  
              onChange={handleInput} 
               id="phone"
                className="form-control" placeholder="Enter your phone number" required />
              <label htmlfor="phone">Phone Number<sup>*</sup></label>
            </div>

            <div className="form-floating mb-3">
              <input type="date" className="form-control" id="floatingInput" required />
              <label for="floatingInput">Date-of-Birth<sup>*</sup></label>
            </div>

            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Address
                </button>
                </h2>
                 <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <div className="addressForm">
                        <div className="form-floating addForm  mb-3">
                          <input type="text" className="form-control" id="floatingInput" placeholder="Enter your city" required />
                          <label forhtml="floatingInput">City<sup>*</sup></label>
                        </div>

                      <div className="form-floating addForm mb-3">
                        <input
                        type="text" 
                        name= "address" 
                        value={inputValue.address}  
                        onChange={handleInput}  
                        id="address" 
                        className="form-control" placeholder="Enter your district " required />
                        <label htmlfor="address">District<sup>*</sup></label>
                      </div>

                      <div className="form-floating addForm mb-3">
                        <select className="form-select" aria-label="Default select example">
                          <option selected>Province</option>
                          <option value="1">Province 1</option>
                          <option value="2">Province 2</option>
                          <option value="3">Province 3</option>
                          <option value="4">Province 4</option>
                          <option value="5">Province 5</option>
                          <option value="6">Province 6</option>
                          <option value="7">Province 7</option>
                        </select>
                      </div>

                      <div className="form-floating addForm mb-3">
                        <input type="text" className="form-control" id="floatingInput" value="Nepal" />
                        <label for="floatingInput" value="Nepal">Country</label>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 submitHome" >
                <button class="btn btn-primary"  type="submit"> {id ? "Edit" : "Submit"}</button>
              </div>
  
 
            </div>

            {
            showAlert && (
            <div className = "alertHome">
              <div className="alert">
                  {id ? "The form has been edited!!" : "User has been added!!"}
              </div>
            </div>
          )
        }
           
          </div> 

        </form>

      </section>
    </>
  )
}

export default Home
