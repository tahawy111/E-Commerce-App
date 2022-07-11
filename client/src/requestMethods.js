import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmY4MmNmNjdiZWMzZGFkMmU1MjI1NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzQ3Njg0MSwiZXhwIjoxNjYwMDY4ODQxfQ.WM5G05_HHeZC0TVao9_vtDYH9ZW8jsAATEgWpqw69gw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
