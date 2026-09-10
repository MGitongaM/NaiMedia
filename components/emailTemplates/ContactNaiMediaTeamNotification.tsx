import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "react-email";

interface ContactNaiMediaTeamNotificationTemplateProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  subject: string;
  message: string;
}

export default function ContactNaiMediaTeamNotification({
  firstName,
  lastName,
  phoneNumber,
  emailAddress,
  subject,
  message,
}: ContactNaiMediaTeamNotificationTemplateProps) {
  return (
    <>
      <Html>
        <Head />

        <Body className="bg-white font-koala">
          <Preview>
            Contact Message From Website
          </Preview>
          <Container className="mx-auto py-5 pb-12">
            <Img
              src={`https://res.cloudinary.com/hqho8qw7/image/upload/v1789045398/naimedia_email_logo.png`}
              width="170"
              height="50"
              alt="NaiMedia Logo"
              className="object-contain bg-slate-800 w-80 h-full mx-auto"
            />
            <br />
            <Text className="text-[16px] leading-6.5">Hi Team,</Text>
            <Text className="text-[16px] leading-6.5">
              There is a new submission from the contact page. 
            </Text>
            <Hr className="border-[#cccccc] my-5" />
            <Section className="text-center">
              <Text className="text-[16px] leading-6.5">
                Name: {firstName} {lastName}
              </Text>
              <br />
              <Text className="text-[16px] leading-6.5">
                Contact Details: {emailAddress} {phoneNumber}
              </Text>
              <br />
              <Text className="text-[16px] leading-6.5">Reason: {subject}</Text>
              <br />
              <Text className="text-[16px] leading-6.5">
                Message: {message}
              </Text>
              <br />
            </Section>
            <Hr className="border-[#cccccc] my-5" />
            <br />
            <br />
            <br />
            <Text className="text-[16px] leading-6.5">
              Best Regards,
              <br />
              NaiMedia Studio & Events - Tech Team
            </Text>
            
            <Text className="text-[#8898aa] text-[12px]"></Text>
          </Container>
        </Body>
      </Html>
    </>
  );
}
