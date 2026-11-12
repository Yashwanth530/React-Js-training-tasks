import React, { useState } from "react";
import "../App.css";



export default function ConditionalUsehookstate() {

    const initialFormData = {
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
        dateOfBirth: "",
        gender: "",
        address: "",
        city: "",
      };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => {
      const updatedErrors = { ...currentErrors };
      delete updatedErrors[name];

      if (name === "password" || name === "confirmPassword") {
        delete updatedErrors.confirmPassword;
      }

      return updatedErrors;
    });

    setSuccessMessage("");
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Enter a 10-digit mobile number.";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required.";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select a gender.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage("Registration submitted successfully!");
    } else {
      setSuccessMessage("");
    }
  }

  function handleReset() {
    setFormData(initialFormData);
    setErrors({});
    setSuccessMessage("");
  }

  return (
    <main className="registration-page">
      <section className="registration-card">
        <h1>Registration Form</h1>
        <p className="form-description">Please enter your details below.</p>

        <form noValidate onSubmit={handleSubmit} onReset={handleReset}>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                aria-invalid={Boolean(errors.firstName)}
              />
              {errors.firstName && (
                <p className="error-message">{errors.firstName}</p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                aria-invalid={Boolean(errors.lastName)}
              />
              {errors.lastName && (
                <p className="error-message">{errors.lastName}</p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && (
                <p className="error-message">{errors.email}</p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                value={formData.mobileNumber}
                onChange={handleChange}
                aria-invalid={Boolean(errors.mobileNumber)}
              />
              {errors.mobileNumber && (
                <p className="error-message">{errors.mobileNumber}</p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                aria-invalid={Boolean(errors.password)}
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                aria-invalid={Boolean(errors.confirmPassword)}
              />
              {errors.confirmPassword && (
                <p className="error-message">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                aria-invalid={Boolean(errors.dateOfBirth)}
              />
              {errors.dateOfBirth && (
                <p className="error-message">{errors.dateOfBirth}</p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                aria-invalid={Boolean(errors.gender)}
              >
                <option value="">Select gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              {errors.gender && (
                <p className="error-message">{errors.gender}</p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                aria-invalid={Boolean(errors.address)}
              />
              {errors.address && (
                <p className="error-message">{errors.address}</p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                aria-invalid={Boolean(errors.city)}
              />
              {errors.city && (
                <p className="error-message">{errors.city}</p>
              )}
            </div>
          </div>

          {successMessage && (
            <p className="success-message" role="status">
              {successMessage}
            </p>
          )}

          <div className="form-buttons">
            <button className="submit-button" type="submit">
              Submit
            </button>
            <button className="reset-button" type="reset">
              Reset
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}