import { toast } from "react-toastify";

export default function showToastError(message) {
  return toast.success(`${message}`, { position: "top-center" });
}
