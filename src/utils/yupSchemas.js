import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
    name: Yup.string().required("Name is required").min(5, "Name is too short"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    message: Yup.string().required("Message is required").min(10, "Message is too short")
});