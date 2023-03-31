import "./FormQuiz.scss";
import { useForm } from "react-hook-form";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import HeaderForm from "../HeaderForm/HeaderForm";

function FormQuiz() {
    const navigate = useNavigate()


    const handleClick = () => {
        navigate("/dashboard")
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // This will log the form data when the submit button is clicked
    };

    return (
        <>
            <HeaderForm />
            <section className="quiz">
                <div className="quiz__header-wrap">
                    <h1 className="quiz__header">Welcome to Visier</h1>
                    <h2 className="quiz__subheader">
                        Let's create a dashboard that's aligned with your goals
                    </h2>
                </div>
                <div className="quiz__wrapper">
                    <form onSubmit={handleSubmit(onSubmit)} className="quiz__form">
                        <div className="quiz__form-name">
                            <label className="quiz__form-label" htmlFor="companyName">
                                {" "}
                                What is the name of your company?
                            </label>
                            <input
                                className="quiz__form-input quiz__form-input--text"
                                type="text"
                                placeholder="BrainStation"
                                name="companyName"
                                id="companyName"
                                {...register("name", { required: true })}
                            />
                            {errors.name && (
                                <div className="quiz__form-error">This field is required</div>
                            )}
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
                                        <input
                                            className="quiz__form-input"
                                            type="checkbox"
                                            value="option1"
                                            {...register("communityType")}
                                        />
                                    </div>
                                    <div className="quiz__forms-inputs-wrapper">
                                        Financial Services
                                        <input
                                            className="quiz__form-input"
                                            type="checkbox"
                                            value="option2"
                                            {...register("communityType")}
                                        />
                                    </div>

                                    <div className="quiz__forms-inputs-wrapper">
                                        Technology
                                        <input
                                            className="quiz__form-input"
                                            type="checkbox"
                                            value="option4"
                                            {...register("communityType")}
                                        />
                                    </div>
                                    <div className="quiz__forms-inputs-wrapper">
                                        Hospitality
                                        <input
                                            className="quiz__form-input"
                                            type="checkbox"
                                            value="option5"
                                            {...register("communityType")}
                                        />
                                    </div>

                                    {errors.communityType && (
                                        <div className="quiz__form-error">
                                            Please select at least one option
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="quiz__form-occupation">
                                <div className="quiz__form-headers">
                                    <h3 className="quiz__form-header">Size of the company?</h3>
                                    <p className="quiz__form-text">Select one that applies:</p>
                                </div>
                                <div className="quiz__form-inputs">
                                    <div className="quiz__forms-inputs-wrapper">
                                        30-50 employees
                                        <input
                                            className="quiz__form-input"
                                            type="checkbox"
                                            value="occupation1"
                                            {...register("occupation")}
                                        />
                                    </div>
                                    <div className="quiz__forms-inputs-wrapper">
                                        50-300 employees
                                        <input
                                            className="quiz__form-input"
                                            type="checkbox"
                                            value="occupation2"
                                            {...register("occupation")}
                                        />
                                    </div>
                                    <div className="quiz__forms-inputs-wrapper">
                                        300-1000 employees
                                        <input
                                            className="quiz__form-input"
                                            type="checkbox"
                                            value="occupation3"
                                            {...register("occupation")}
                                        />
                                    </div>
                                    <div className="quiz__forms-inputs-wrapper">
                                        1000 + employees
                                        <input
                                            className="quiz__form-input"
                                            type="checkbox"
                                            value="occupation4"
                                            {...register("occupation")}
                                        />
                                    </div>
                                    {errors.occupation && (
                                        <div className="quiz__form-error">
                                            Please select at least one option
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="quiz__form-goal">
                                <div className="quiz__form-headers">
                                    <h3 className="quiz__form-header">What are your goals?</h3>
                                    <p className="quiz__form-text">Choose all that apply:</p>
                                </div>
                                <div className="quiz__form-inputs">
                                    <div className="quiz__forms-inputs-wrapper">
                                        Talent Acquisition
                                        <input
                                            className="quiz__form-input"
                                            type="checkbox"
                                            value="goal1"
                                            {...register("goals")}
                                        />
                                    </div>
                                    <div className="quiz__forms-inputs-wrapper">
                                        Employee Engagement
                                        <input
                                            className="quiz__form-input"
                                            type="checkbox"
                                            value="goal2"
                                            {...register("goals")}
                                        />
                                    </div>

                                    <div className="quiz__forms-inputs-wrapper">
                                        Training and Development
                                        <input
                                            className="quiz__form-input"
                                            type="checkbox"
                                            value="goal2"
                                            {...register("goals")}
                                        />
                                    </div>

                                    <div className="quiz__forms-inputs-wrapper">
                                        Employee Retention
                                        <input
                                            className="quiz__form-input"
                                            type="checkbox"
                                            value="goal2"
                                            {...register("goals")}
                                        />
                                    </div>
                                    {errors.goals && (
                                        <div className="quiz__form-error">
                                            Please select at least one option
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <button className="quiz__btn" onClick={handleClick}> Create Dashboard </button>

                    </form>
                </div>
            </section>
        </>
    );
}

export default FormQuiz;
