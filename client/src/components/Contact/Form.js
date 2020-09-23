import React from "react";
import "./Form.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function Form() {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    reset();
    alert("Thanks, will get back to you soon :)");
    console.log(data);
    axios.post("/api/sendEmail", data);
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        className="input-field"
        type="text"
        name="name"
        ref={register({ required: "Name is required" })}
      />
      <p>{errors.name && errors.name.message}</p>
      <label>Subject</label>
      <input
        className="input-field"
        type="text"
        name="subject"
        ref={register({ required: "Subject is required" })}
      />
      <p>{errors.subject && errors.subject.message}</p>
      <label>Email</label>
      <input
        className="input-field"
        type="text"
        name="email"
        ref={register({
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address",
          },
        })}
      />
      <p>{errors.email && errors.email.message}</p>
      <label>Message</label>
      <textarea
        className="input-field"
        name="message"
        ref={register({ required: "Message cannot be empty" })}
      />
      <p>{errors.message && errors.message.message}</p>
      <input id="submit-btn" type="submit" value="Send" />
    </form>
  );
}

// class Form extends Component {
//   const { register, handleSubmit} = useForm();
//   renderInputFields() {
//     return FILEDS.map(({ label, name }) => {
//       return (
//         <div key={label}>
//           <label>{label}</label>
//           <input
//             className="input-field"
//             type="text"
//             name={name}
//             ref={register}
//           />
//         </div>
//       );
//     });
//   }
//   onSubmit(data) {
//     console.log(data);
//   }
//   render() {
//     return (
//       <form id="contact-form" onSubmit={handleSubmit(this.onSubmit())}>
//         {this.renderInputFields()}
//         <label>Message</label>
//         <textarea className="input-field" name="message" ref={register} />
//         <input id="submit-btn" type="submit" value="Send" />
//       </form>
//     );
//   }
// }
export default Form;
