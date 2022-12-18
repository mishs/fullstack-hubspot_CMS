import * as Yup from "yup";
import { FormattedData } from "../models";
import axios from "axios";

export const BASE_URL = `http://localhost:5000/api/`;

export async function deleteContact(id: string) {
  return fetch(`${BASE_URL}contacts/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
}

export async function createContact(data: FormattedData) {
  console.log(data, "data");
  const res = await axios.post(`${BASE_URL}contacts/create`, data);
  return res.data;
}

export async function editContact(data: FormattedData) {
  console.log(data, "data");
  const res = await axios.put(`${BASE_URL}contacts/edit`, data);
  return res.data;
}

export const contactValidationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "The first name should be greater than 3 characters")
    .max(30, "The first name should be less than 30 characters")
    .required("First name is required"),
  lastname: Yup.string()
    .min(3, "The last name should be greater than 3 characters")
    .max(30, "The last name should be less than 30 characters")
    .required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});
