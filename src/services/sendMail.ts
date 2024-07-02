import { toast } from "../components/ui/use-toast";
import { EmailJs } from "../utils/email"

export const SendMail = async (data: any)=>{
    try {
        const res = await EmailJs(data);
        toast({
            title: "Success ",
            description: "Form Submit successfully!",
            className:'gradient8 text-white'
          })
          return 
    } catch (error: any) {
        console.log(error)
        toast({
            title: "Error ",
            description: error?.message || "Oop's something went wrong!",
            className:'bg-red-200'
          })
    }
}