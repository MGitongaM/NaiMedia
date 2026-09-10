import ContactNaiMediaTeamNotification from '@/components/emailTemplates/ContactNaiMediaTeamNotification';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request:Request) {
  try {

    const {firstName,lastName,emailAddress,phoneNumber,subject,message}=await request.json()
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['gitoshmbae@gmail.com','delivered@resend.dev',],
      subject: 'New Contact From NaiMediaKenya.com',
      react: ContactNaiMediaTeamNotification({firstName,lastName,emailAddress,phoneNumber,subject,message}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
