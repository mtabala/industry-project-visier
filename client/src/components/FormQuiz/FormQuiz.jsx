import "./FormQuiz.scss";
import { useForm } from 'react-hook-form';
import React from "react";
import { useNavigate, Link } from "react-router-dom";

function FormQuiz() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // This will log the form data when the submit button is clicked
    };

    return (
        <section className="quiz">
            <h1 className="quiz__header">Tell us about your company</h1>
            <p className="quiz__subheader">Help us customize the information to your liking</p>

            <form onSubmit={handleSubmit(onSubmit)} className="quiz__form">

                <div className="quiz__form-name">
                    <label className="quiz__form-label" htmlFor="companyName"> What is the name of your company?</label>

                    <input className="quiz__form-input quiz__form-input--text" type="text" placeholder="American Express" name="companyName" id="companyName" {...register("name", { required: true })} />
                    {errors.name && <div className="quiz__form-error">This field is required</div>}
                </div>

                <div className="quiz__form-wrapper">
                    <div className="quiz__form-industry">
                        <div className="quiz__form-headers">
                            <h3 className="quiz__form-header">What is your industry?</h3>
                            <p className="quiz__form-text"> Choose at least one option: </p>
                        </div>

                        <div className="quiz__form-inputs">
                            <div className="quiz__forms-inputs-wrapper">
                                Healthcare
                                <input className="quiz__form-input" type="checkbox" value="option1" {...register("communityType")} />
                            </div>

                            <div className="quiz__forms-inputs-wrapper">
                                Financial Services
                                <input className="quiz__form-input" type="checkbox" value="option2" {...register("communityType")} />
                            </div>

                            <div className="quiz__forms-inputs-wrapper">
                                Retail
                                <input className="quiz__form-input" type="checkbox" value="option3" {...register("communityType")} />
                            </div>

                            <div className="quiz__forms-inputs-wrapper">
                                Technology
                                <input className="quiz__form-input" type="checkbox" value="option4" {...register("communityType")} />
                            </div>

                            <div className="quiz__forms-inputs-wrapper">
                                Hospitality
                                <input className="quiz__form-input" type="checkbox" value="option5" {...register("communityType")} />
                            </div>

                            <div className="quiz__forms-inputs-wrapper">
                                Transportation
                                <input className="quiz__form-input" type="checkbox" value="option6" {...register("communityType")} />
                            </div>

                            {errors.communityType && <div className="quiz__form-error">Please select at least one option</div>}
                        </div>
                    </div>

                    <div className="quiz__form-occupation">
                        <div className="quiz__form-headers">
                            <h3 className="quiz__form-header">What is your occupation?</h3>
                            <p className="quiz__form-text">Select one that applies:</p>
                        </div>

                        <div className="quiz__form-inputs">
                            <div className="quiz__forms-inputs-wrapper">
                                HR Professional
                                <input className="quiz__form-input" type="checkbox" value="occupation1" {...register("occupation")} />
                            </div>

                            <div className="quiz__forms-inputs-wrapper">
                                Business Analyst
                                <input className="quiz__form-input" type="checkbox" value="occupation2" {...register("occupation")} />
                            </div>

                            <div className="quiz__forms-inputs-wrapper">
                                CEO
                                <input className="quiz__form-input" type="checkbox" value="occupation3" {...register("occupation")} />
                            </div>

                            <div className="quiz__forms-inputs-wrapper">
                                Other
                                <input className="quiz__form-input" type="checkbox" value="occupation4" {...register("occupation")} />
                            </div>

                            {errors.occupation && <div className="quiz__form-error">Please select at least one option</div>}
                        </div>
                    </div>

                    <div className="quiz__form-goal">
                        <div className="quiz__form-headers">
                            <h3 className="quiz__form-header">Choose your goals?</h3>
                            <p className="quiz__form-text">Choose all that apply:</p>
                        </div>

                        <div className="quiz__form-inputs">

                            <div className="quiz__forms-inputs-wrapper">
                                Business Solution
                                <input className="quiz__form-input" type="checkbox" value="goal1" {...register("goals")} />
                            </div>

                            <div className="quiz__forms-inputs-wrapper">
                                People Solution
                                <input className="quiz__form-input" type="checkbox" value="goal2" {...register("goals")} />
                            </div>

                            {errors.goals && <div className="quiz__form-error">Please select at least one option</div>}
                        </div>
                    </div>
                </div>

                <button className="quiz__btn"> Get Started </button>
            </form>
        </section>
    );
}

export default FormQuiz;