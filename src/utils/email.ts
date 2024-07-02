import emailjs from "@emailjs/browser"

export const EmailJs = (data: any) => emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",
    data,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "",
)