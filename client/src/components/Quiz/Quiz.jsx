import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Quiz.scss";

function Quiz() {
  const [formData, setFormData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormData(data);
    saveData(data);
  };

  const saveData = (data) => {
    const jsonData = JSON.stringify(data);
    fetch(".data.json", {
      method: "POST",
      body: jsonData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" {...register("email", { required: true, pattern: /^[^@]+@[^@]+\.[^@]+$/i })} />
        {errors.email && <span>Please enter a valid email address</span>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...register("password", { required: true, minLength: 8 })} />
        {errors.password && <span>Please enter a password with at least 8 characters</span>}
      </div>
      <div>
        <label>Gender:</label>
        <label>
          <input type="radio" value="male" {...register("gender")} />
          Male
        </label>
        <label>
          <input type="radio" value="female" {...register("gender")} />
          Female
        </label>
      </div>
      <div>
        <label>Country:</label>
        <select {...register("country", { required: true })}>
          <option value="">Select a country</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="canada">Canada</option>
        </select>
        {errors.country && <span>Please select a country</span>}
      </div>
      <div>
        <label>Languages:</label>
        <select multiple {...register("languages", { required: true })}>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
        </select>
        {errors.languages && <span>Please select at least one language</span>}
      </div>
      <div>
        <label>
          <input type="checkbox" {...register("agreeTerms", { required: true })} />I agree to the terms and conditions
        </label>
        {errors.agreeTerms && <span>You must agree to the terms and conditions</span>}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
export default Quiz;
