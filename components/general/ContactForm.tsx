'use client'
import * as z from "zod";
import {Controller, useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import {toast} from "sonner";
import { CheckCircle2Icon } from "lucide-react";

const ContactFormSchema=z.object({
    firstName:z.string().min(2,"First Name has too few characters"),
    lastName:z.string().min(2,"Last Nmae has too few characters"),
    phoneNumber:z.string().min(2,"Phone number has too few characters"),
    emailAddress:z.string().min(2,"Email Address has too few characters"),
    subject:z.string().min(2,"Subject has too few characters"),
    message:z.string().min(2,"Message has too few characters")
})
export default function ContactForm() {
    const form=useForm<z.infer<typeof ContactFormSchema>>({
        resolver:zodResolver(ContactFormSchema),
        defaultValues:{
            firstName:"",
            lastName:"",
            phoneNumber:"",
            emailAddress:"",
            subject:"",
            message:""
        }
    })

    function onSubmit(data:z.infer<typeof ContactFormSchema>){
        toast(<>
            <div className="flex items-center gap-2">
            <CheckCircle2Icon className="text-lime-500"/>
            <p className="text-sm">Message has been set</p>
            </div>
            <div className="hidden">
                <pre>
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
             </div>    
        </>,{duration:4000}
    )
   
        form.reset()
    }
  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Controller
                    name="firstName"
                    control={form.control}
                    render={({field, fieldState})=>(
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                            <Input {...field} id="firstName" aria-invalid={fieldState.invalid} placeholder="Musa"  className="rounded-sm" autoComplete="off"/>
                            {fieldState.invalid && (<FieldError errors={[fieldState.error]}/>)}
                        </Field>
                    )}
                />
                <Controller
                    name="lastName"
                    control={form.control}
                    render={({field, fieldState})=>(
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                            <Input {...field} id="lastName" aria-invalid={fieldState.invalid} placeholder="Jones"  className="rounded-sm" autoComplete="off"/>
                            {fieldState.invalid && (<FieldError errors={[fieldState.error]}/>)}
                        </Field>
                    )}
                />
            </div>
       
          <FieldSeparator />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Controller
                    name="phoneNumber"
                    control={form.control}
                    render={({field, fieldState})=>(
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="phoneNumber">Phone Number</FieldLabel>
                            <Input {...field} id="phoneNumber" type="tel" aria-invalid={fieldState.invalid} placeholder="0700 000 000"  className="rounded-sm" autoComplete="off"/>
                            {fieldState.invalid && (<FieldError errors={[fieldState.error]}/>)}
                        </Field>
                    )}
                />
                <Controller
                    name="emailAddress"
                    control={form.control}
                    render={({field, fieldState})=>(
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="emailAddress">Email Address</FieldLabel>
                            <Input {...field} id="emailAddress" aria-invalid={fieldState.invalid} placeholder="youremail@address.com"  className="rounded-sm" autoComplete="off"/>
                            {fieldState.invalid && (<FieldError errors={[fieldState.error]}/>)}
                        </Field>
                    )}
                />
            </div>

          <FieldSeparator />
            <div className="grid grid-cols-1 gap-2">
                <Controller
                    name="subject"
                    control={form.control}
                    render={({field, fieldState})=>(
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="subject">Subject</FieldLabel>
                            <Input {...field} id="subject" type="text" aria-invalid={fieldState.invalid} placeholder="Audio Visual Equipment Inquiry"  className="rounded-sm" autoComplete="off"/>
                            {fieldState.invalid && (<FieldError errors={[fieldState.error]}/>)}
                        </Field>
                    )}
                />
                <Controller
                    name="message"
                    control={form.control}
                    render={({field, fieldState})=>(
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="message">Message</FieldLabel>
                            <Textarea {...field} id="message" aria-invalid={fieldState.invalid} placeholder="Your message" className="resize-y rounded-sm"rows={20} autoComplete="off"/>
                            {fieldState.invalid && (<FieldError errors={[fieldState.error]}/>)}
                        </Field>
                    )}
                />
            </div>

          <Field orientation="horizontal">
            <Button size="lg" type="submit" className="rounded-sm cursor-pointer bg-lime-700 ">Submit</Button>
          </Field>
        </FieldGroup>
      </form>
    </>
  );
}
